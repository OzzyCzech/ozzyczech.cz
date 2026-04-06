# Personal knowledge base

This is an LLM Wiki — a personal knowledge base where LLM actively builds and maintains structured Markdown pages instead of answering from scratch every time. The wiki is public but primarily serves as a personal reference.

## Language

- English is the default language
- Czech is the secondary language

## Structure

Content lives in `src/content/docs/` organized by topic (AI, Development, macOS, …). Each `.md` file is one wiki page.

Sidebar navigation is configured in `astro.config.mjs`. When adding a new top-level category, always add it to the `sidebar` array there. Do not change directory structure without asking first.

## File naming

- Use human-readable filenames with spaces: `Canon RF lenses.md`, not `canon-rf-lenses.md`
- Filenames can be in English or Czech, matching the page language
- Keep filenames short but descriptive — 2–4 words max
- No date prefixes — this is a wiki, not a blog

## Frontmatter

- Use YAML syntax — do not use JSON-style frontmatter
- Keep frontmatter minimal — only set fields that differ from defaults
- Always use `title` for the page title — it is the only required field
- Always include `description` for SEO and social media previews
- Use `sidebar.label` only when the title is long or differs from desired sidebar text
- Do not repeat `title` in `sidebar.label` if it is the same
- Do not set `slug` unless the file path does not match the desired URL
- When updating a page, always preserve existing frontmatter fields
- Always include `created` with the date the page was first created (format `YYYY-MM-DD`) — never change this value after initial creation
- Always include `updated` with the date of the last edit (format `YYYY-MM-DD`) — update this value on every change to the page
- Order frontmatter fields consistently: `title`, `description`, `created`, `updated`, `sidebar`, then any extras

## Images and assets

- Store images next to the page that uses them — in the same directory
- Use kebab-case for image filenames: `prompt-caching-diagram.png`, not `Screenshot 2025-04-06.png`
- Reference images with relative paths: `![Alt text](./prompt-caching-diagram.png)`
- Always include meaningful alt text for accessibility
- Prefer PNG for screenshots and diagrams, SVG for icons and simple illustrations

## Page format

- Do not use `#` (h1) in page body — Starlight renders `title` as h1
- Start with a short introductory paragraph (1–3 sentences) explaining what the page covers
- Use `##` for main sections, `###` for subsections — do not go deeper than `#####`
- Use Starlight admonitions where appropriate: `:::note`, `:::tip`, `:::caution`, `:::danger`
- Use tables for comparisons and structured data — keep them narrow (max 4–5 columns) so they remain readable
- Use fenced code blocks with language identifiers (e.g. ```python```, ```bash```)
- Keep pages concise — aim for scannable content, not exhaustive essays
- Prefer structured lists and short paragraphs over walls of text
- One topic per page — split if a page grows beyond a single focused subject

### New page template

When creating a new page, follow this structure:

```markdown
---
title: Page Title
description: One-sentence summary for SEO and previews.
created: 2025-04-06
updated: 2025-04-06
---

Short intro paragraph explaining what this page covers and why it matters.

## First section

Content here.

## Sources

- [Source title](https://example.com) — brief note on what was used
```

## Workflow

### Ingest

When adding a new topic or source:

1. Read and understand the source material
2. Create a new page or update existing relevant pages
3. When new information contradicts existing content, update with the newer information without asking
4. Check if related pages need updates to stay consistent

### Query

Answer from existing wiki pages. If the answer is worth keeping, write it back into the wiki.

### Lint

Check for contradictions between pages, outdated claims, orphan pages, and missing cross-references.

### When to create a new page vs. update existing

Create a new page when:
- The topic is distinct enough to stand on its own (has its own name, tools, concepts)
- Adding it to an existing page would make that page lose focus

Update an existing page when:
- The new information is a detail, example, or clarification of an existing topic
- The existing page explicitly covers this area but is incomplete

When in doubt, update the existing page and split later if it grows too large.

### When to create a new page vs. update existing

Create a new page when:
- The topic is distinct enough to stand on its own (has its own name, tools, concepts)
- Adding it to an existing page would make that page lose focus

Update an existing page when:
- The new information is a detail, example, or clarification of an existing topic
- The existing page explicitly covers this area but is incomplete

When in doubt, update the existing page and split later if it grows too large.

## Sources and attribution

- When a page is based on an external source, include a `## Sources` section at the bottom
- If the page is written purely from LLM knowledge without external sources, omit the `## Sources` section entirely
- Link to the original with a brief note: `[Title](url) — what was used from this source`
- Include access date for sources that change frequently
- Do not copy content verbatim — always summarize and restructure in your own words

## Git conventions

- Use conventional commits: `docs: add page on prompt caching`, `docs: update LLM comparison table`
- One commit per logical change — adding a page, updating related pages together, fixing a typo
- Do not batch unrelated changes into a single commit

## Rules

- Do not delete pages without asking first
- Do not rewrite entire pages when making small updates — edit only the relevant sections
- Do not create empty placeholder pages — every page must have real content
- When updating a page, check if related pages need updates too
- Use relative links for cross-references between wiki pages