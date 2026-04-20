---
title: Is It Agent Ready?
description: Cloudflare tool that scans websites for AI agent compatibility — checks robots.txt, MCP, OAuth, content negotiation, and agentic commerce standards.
created: 2026-04-20
updated: 2026-04-20
---

**[Is It Agent Ready?](https://isitagentready.com/)** is a free scanning tool by Cloudflare that evaluates how well a website supports interaction with AI agents. It checks compliance with emerging standards — from `robots.txt` and Markdown content negotiation to MCP, OAuth, and agentic commerce protocols.

## How it works

Enter a URL and the tool runs automated checks across five categories, returning a readiness score with actionable recommendations.

### Scan types

- **All Checks** — full evaluation across all categories
- **Content Site** — focused on discoverability and content accessibility
- **API / Application** — focused on protocol discovery and machine-readable interfaces

## Evaluation categories

### 🔍 Discoverability

Checks whether the site can be found and indexed by AI agents:

- `robots.txt` presence and configuration
- Sitemap availability
- `Link` response headers

### 📄 Content Accessibility

Tests whether the site can serve content in agent-friendly formats:

- Markdown content negotiation support (responding to `Accept: text/markdown`)

### 🤖 Bot Access Control

Evaluates rules governing AI bot interaction:

- AI-specific bot rules in `robots.txt`
- Content Signals
- Web Bot Auth

### 🔌 Protocol Discovery

Checks support for machine-to-machine communication standards:

- MCP (Model Context Protocol) servers
- Agent Skills
- WebMCP
- API catalogs
- OAuth discovery

### 💳 Commerce

Tests support for emerging agentic commerce standards:

- x402 (HTTP 402 payment protocol)
- UCP (Universal Commerce Protocol)
- ACP (Agentic Commerce Protocol)

## Quick wins

Cloudflare recommends starting with easy improvements:

1. Publish a valid `robots.txt` with AI bot rules
2. Add sitemap directives
3. Add `Link` response headers for discoverability

## Sources

- [Is It Agent Ready?](https://isitagentready.com/) — Cloudflare website scanner for AI agent compatibility (accessed 2026-04-20)
