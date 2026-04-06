Process a new source or input into the wiki using the following steps:

## 1. Identify the input

- If the input is a URL: fetch the page and extract key information
- If the input is text: read it and identify the topic, key concepts, and content type (tool, tutorial, reference, concept...)
- If the input is a file: read and understand the content before acting

## 2. Find the right place

Search the existing wiki structure and decide:

- **Does an exact page for this topic already exist?** → update it
- **Does a related page exist where this logically belongs?** → add a section or list item
- **Is it a tool?** → check `AI/Tools/`, `Development/Tools/`, `Development/Assets/`, or `Inspiration/` based on focus
- **Is it a code snippet?** → `Development/Snippets/` or the relevant language directory (`PHP/`, `JavaScript/`, `Tailwind/`...)
- **No suitable place exists?** → create a new page; if even the category is missing, ask the user first

## 3. Process the content

- Summarize in your own words — never copy verbatim
- Keep only what has lasting reference value (not news, not temporary offers)
- Attribute every factual claim to a source; if a source is missing, do not invent
- Preserve precise technical terms while keeping the tone clear and scannable
- For tools/services: capture name, URL, one-sentence description, and key differentiators

## 4. Write to the wiki

When editing or creating a page:

- Follow frontmatter rules from `CLAUDE.md`: `title`, `description`, `created`, `updated`
- Never use `#` (h1) in the page body — Starlight renders `title` as h1
- Start with a short intro paragraph (1–3 sentences)
- Use `##` for sections, `###` for subsections
- Tool format: `**[Name](url)** — short description`
- Cross-reference related pages using absolute URL paths

## 5. Check consistency

After writing:

- Does the new content contradict anything on other pages?
- Are there related pages that should link to this one?
- Is the `updated` date current on every modified file?

## 6. Commit and push

- One commit per logical change
- Message format: `docs: add X to Y` or `docs: update X with Z`
- Always push after every commit
