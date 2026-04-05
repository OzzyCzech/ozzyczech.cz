# Personal knowledge base

This is an LLM Wiki — a personal knowledge base where LLM actively builds and maintains structured Markdown pages instead of answering from scratch every time.

## Language

- English is the default language
- Czech is the secondary language

## Structure

Content lives in `src/content/docs/` organized by topic (AI, Development, macOS, …). Each `.md` file is one wiki page.

## Workflow

- **Ingest** — when adding a new topic or source: read it, summarize, create or update relevant pages, keep related pages consistent
- **Query** — answer from existing pages; if the answer is worth keeping, write it back into the wiki
- **Lint** — check for contradictions between pages, outdated claims, orphan pages, missing cross-references

## Conventions

- Frontmatter is YAML, always preserve existing fields
- Use `sidebar.label` when the title is long or differs from desired sidebar text
- Keep pages concise — prefer structured lists and short paragraphs over walls of text
- When updating a page, check if related pages need updates too
