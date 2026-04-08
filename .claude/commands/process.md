Process a new source or input into the wiki using the following steps:

## 1. Identify the input

Fetch URLs, read files, or parse text to identify the topic and content type.
If a URL is unreachable, ask the user to paste the content. If the input is ambiguous, ask before proceeding.

## 2. Find the right place

Search the existing wiki structure in `content/docs/` and decide where the content belongs:

1. **Exact page exists** → update it
2. **Related page exists** → add a section or list item there
3. **No suitable page exists** → create a new page in the best-fitting folder
4. **No suitable folder exists** → ask the user first

Match content to folders by primary use case. If a source fits multiple categories, pick the one matching its primary use case. When in doubt, browse the existing folder structure for context.

## 3. Process the content

Extract and rewrite — never copy verbatim from the source.

**Keep:**

- Information with lasting reference value
- Precise technical terms, APIs, version numbers
- Key differentiators and unique capabilities
- Source attribution for every factual claim

**Discard:**

- Pricing, plan details, and free-tier limits (change constantly)
- Marketing fluff, launch framing, and time-sensitive claims

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

- Review pages in the **same category** and any **directly linked pages** for contradictions
- Add links to this content from related pages only when the existing page explicitly covers the same topic — do not add back-links just because pages share a theme
- If you notice a broader inconsistency outside this scope, flag it to the user rather than silently editing unrelated pages

## 6. Commit and push

Group all changes from a single source into **one commit**, then push.

**Commit message format:**

- Adding new content: `docs: add [topic] to [section]`
- Updating existing page: `docs: update [page] with [what changed]`
- Removing outdated content: `docs: remove [what] from [section]`
- Moving/reorganizing: `docs: move [topic] from [old] to [new]`
- Multiple changes from one source: `docs: process [source name] — add to X, update Y`