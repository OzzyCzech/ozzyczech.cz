---
title: Vector Memory for Claude Code
description: Build a persistent semantic memory system for Claude Code using ChromaDB and BGE-M3 embeddings via MCP.
created: 2026-04-09
updated: 2026-04-09
---

A local vector memory system gives Claude Code persistent, semantic memory across sessions. Instead of stuffing entire memory files into the prompt, only the most relevant fragments are retrieved — saving 80–90% of tokens compared to full in-context memory.

## Architecture

```
Claude Code
    │
    ▼
MCP Server (stdio)
    │
    ├── BGE-M3 (local embedding model, ~3 GB RAM)
    │     └── dense vectors (1024-dim)
    │
    └── ChromaDB (vector database)
          └── collections: memory, code_patterns, decisions…
```

On search, the query is embedded via BGE-M3 and ChromaDB returns the top-N relevant fragments. On store, the text is embedded and written to ChromaDB with metadata (category, project, timestamp).

## Requirements

- Python 3.10+
- `uv` (recommended) or `pip`
- Docker (optional — for ChromaDB server mode)
- ~4 GB free RAM (3 GB model + ChromaDB overhead)
- ~2 GB disk for BGE-M3 model download

## Setup

### 1. ChromaDB

**Option A — Docker (recommended for stability):**

```bash
docker run -d \
  --name chromadb \
  -p 8000:8000 \
  -v ~/chromadb-data:/chroma/chroma \
  -e IS_PERSISTENT=TRUE \
  -e ANONYMIZED_TELEMETRY=FALSE \
  chromadb/chroma:latest
```

**Option B — Embedded (no Docker):**

```python
import chromadb
client = chromadb.PersistentClient(path="~/.claude-memory/chromadb")
```

### 2. BGE-M3 and MCP server dependencies

```bash
mkdir ~/claude-memory-mcp && cd ~/claude-memory-mcp
uv init && uv venv && source .venv/bin/activate
uv add "mcp[cli]" chromadb FlagEmbedding torch numpy
```

Verify the model downloads correctly (~2 GB on first run):

```bash
python -c "from FlagEmbedding import BGEM3FlagModel; m = BGEM3FlagModel('BAAI/bge-m3', use_fp16=True); print('OK')"
```

:::note
Use `use_fp16=False` on CPU. Use `use_fp16=True` on GPU (CUDA) or Apple Silicon (MPS) for faster inference with minimal accuracy loss.
:::

### 3. MCP server

Create `~/claude-memory-mcp/server.py` with four tools: `memory_search`, `memory_store`, `memory_delete`, `memory_stats`. The server loads BGE-M3 on startup and connects to ChromaDB. See the full implementation in the [source guide](#sources).

### 4. Register with Claude Code

```bash
claude mcp add memory-search -- \
  ~/claude-memory-mcp/.venv/bin/python \
  ~/claude-memory-mcp/server.py
```

Verify:

```bash
claude mcp list
# Should show: memory-search (stdio)
```

## MCP Tools

| Tool | Purpose |
|------|---------|
| `memory_search(query, top_k)` | Semantic search — returns top-N relevant fragments |
| `memory_store(content, category, project)` | Store with deduplication via content hash |
| `memory_delete(content_or_id)` | Delete by ID or content |
| `memory_stats()` | Count, category breakdown, and project list |

### Categories for `memory_store`

`general`, `bugfix`, `architecture`, `preference`, `code_pattern`, `decision`, `learning`, `debug_insight`

## CLAUDE.md configuration

Add to your project or global `~/.claude/CLAUDE.md` to guide Claude on when to use the memory tools:

```markdown
## Memory system

### When to SEARCH (memory_search):
- At the start of each session — search for project context
- Before implementing a new feature — check for relevant notes
- When referencing past decisions, bugs, or architecture

### When to STORE (memory_store):
- Non-trivial bugs solved (category: bugfix)
- Architectural decisions with reasoning (category: architecture, decision)
- Project-specific code patterns (category: code_pattern)
- User preferences and workflow habits (category: preference)

### When NOT to store:
- Information already in CLAUDE.md or README
- Trivial or temporary debug output
- Information obvious from the code

### Rules:
- Always include category and project name when storing
- Keep entries concise but self-contained — future sessions have no other context
- At the end of a longer session, store a summary of what was done
```

## Two-level fallback strategy

For quick fixes and simple syntax questions, vector search adds unnecessary latency. Use a two-level approach:

| Level | Source | Latency | Use for |
|-------|--------|---------|---------|
| 1 — Local | CLAUDE.md, auto memory, project files | ~0 ms | Quick fixes, syntax, simple questions |
| 2 — Vector DB | ChromaDB via MCP | ~200–500 ms | Historical context, cross-session decisions, architecture |

Rule: if the answer is in CLAUDE.md or auto memory, skip the vector DB. At the start of a new session, always search the vector DB for project context.

## Model comparison

| Model | RAM | Czech quality | Speed |
|-------|-----|--------------|-------|
| BGE-M3 (fp16) | ~1.5 GB | Best | Medium |
| BGE-M3 (fp32) | ~3 GB | Best | Slower |
| multilingual-e5-large | ~1.2 GB | Good | Medium |
| all-MiniLM-L6-v2 | ~100 MB | Poor | Fast |

BGE-M3 from BAAI is the best option for multilingual projects — particularly for Czech, Slovak, and other non-English languages.

## Maintenance

**Backup:**

```bash
cp -r ~/.claude-memory/chromadb ~/.claude-memory/chromadb-backup-$(date +%Y%m%d)
```

**Cleanup old entries (90+ days):**

```python
import chromadb
from datetime import datetime, timezone, timedelta

client = chromadb.PersistentClient(path="~/.claude-memory/chromadb")
collection = client.get_collection("claude_memory")

cutoff = (datetime.now(timezone.utc) - timedelta(days=90)).isoformat()
all_data = collection.get(include=["metadatas"])

to_delete = [id_ for id_, meta in zip(all_data["ids"], all_data["metadatas"])
             if meta.get("timestamp", "") < cutoff]

if to_delete:
    collection.delete(ids=to_delete)
    print(f"Deleted {len(to_delete)} old entries.")
```

## Summary

| Metric | Value |
|--------|-------|
| RAM usage | ~3 GB (model) + ~100 MB (DB) |
| Search latency | ~200–500 ms (CPU) |
| Token savings | ~80–90 % vs full memory in prompt |
| Best for | Large memory (hundreds of entries), multilingual projects |

For small projects with a handful of notes, the built-in [auto memory](../claude-code) in Claude Code is sufficient.

## Sources

- Czech guide "Vektorová paměť pro Claude Code: ChromaDB + BGE-M3" — full implementation with server.py code
