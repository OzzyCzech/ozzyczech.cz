Process a new source or input into the wiki using the following steps:

## 1. Identify the input

- If the input is a **URL**: fetch the page and extract key information. If the URL is unreachable or behind a paywall, ask the user to paste the relevant text manually.
- If the input is **text**: read it and identify the topic, key concepts, and content type (tool, tutorial, reference, concept…)
- If the input is a **file**: read and understand the content before acting
- If the input is ambiguous or too broad, ask a clarifying question before proceeding.

## 2. Find the right place

Search the existing wiki structure and decide where the content belongs. Follow this priority order:

1. **Exact page exists** → update it (add section, append to list, refresh outdated info)
2. **Related page exists where this logically belongs** → add a section or list item there
3. **No suitable page exists** → create a new one; if even the category is missing, ask the user first

**Category decision guide:**

- AI related content → `AI/` - AI tools, services, models, etc.
- Photography related content → `Photography/` - cameras, lenses, flashes, accessories, tripods, filters, etc.
- Development related content → `Development/` - programming languages, frameworks, tools, etc.  
- Inspiration related content → `Inspiration/` - open source projects, tools, services, etc.
- macOS related content → `macOS/` - macOS tools, services, etc.
- Hardware related content → `Hardware/` - hardware tools, services, etc.
- Life Hack related content → `LifeHack/` - life hack tools, services, etc.
- Security related content → `Security/` - security tools, services, etc.
- Books related content → `Books/` - books, articles, blog posts, etc.
- Movies and TV related content → `Movies & TV/` - links from ČSFD, Netflix, IMDB, etc.
- Shell & CLI related content → `CLI/` — pick a subfolder by topic: `Bash & shell`, `Git`, `Media` (includes `ffmpeg/`), `Web`, `Network`, `Security`, `Downloads`, `Testing`, or `Tools` (short tool roundup pages).
- If a source fits multiple categories, pick the one matching its primary use case.

## 3. Process the content

Extract and rewrite — never copy verbatim from the source.

**Keep:**

- Information with lasting reference value
- Precise technical terms, APIs, version numbers
- Key differentiators and unique capabilities
- Source attribution for every factual claim

**Discard:**

- Pricing, free-tier limits, and plan details (these change constantly)
- Time-limited offers, launch promotions, "just announced" framing
- Marketing superlatives and filler ("revolutionary", "blazing fast", "best-in-class")
- News-style narrative or commentary without reference value

**Formatting rules for tools/services:**

`**[Name](url)** — one-sentence description that captures what it does and why it's notable`

## 4. Write to the wiki

When editing or creating a page:

- Follow frontmatter rules from `CLAUDE.md`: `title`, `description`, `created`, `updated`
- Never use `#` (h1) in the page body — Starlight renders `title` as h1
- Start with a short intro paragraph (1–3 sentences)
- Use `##` for sections, `###` for subsections
- Cross-reference related pages using absolute URL paths
- Set `updated` to today's date on every modified file

## 5. Check consistency

After writing, verify within a realistic scope:

- Review pages in the **same category** and any **directly linked pages** for contradictions
- Add links to this content from related pages where it would be useful
- If you notice a broader inconsistency outside this scope, flag it to the user rather than silently editing unrelated pages

## 6. Commit and push

- Group all changes from a single source into **one commit** (even if multiple files were modified)
- Push once after the commit is complete

**Commit message format:**

- Adding new content: `docs: add [topic] to [section]`
- Updating existing page: `docs: update [page] with [what changed]`
- Removing outdated content: `docs: remove [what] from [section]`
- Moving/reorganizing: `docs: move [topic] from [old] to [new]`
- Multiple changes from one source: `docs: process [source name] — add to X, update Y`