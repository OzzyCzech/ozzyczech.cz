---
name: article-extractor
description: Extract clean article content from URLs as Markdown. Use when user wants to download, extract, or save an article/blog post from a URL.
allowed-tools: Bash,Write,Read
---

# Article Extractor

Extract article content from a URL as clean Markdown using [mreader](https://github.com/OzzyCzech/mreader).

```bash
npx mreader "URL"
```

Options:
- `-o file.md` — save to file
- `-j` — output as JSON (title, author, content, etc.)
- `--no-frontmatter` — omit YAML frontmatter
- `--no-content-negotiation` — skip `Accept: text/markdown`, always extract from HTML
- `--url <url>` — base URL for stdin mode (`curl ... | mreader - --url <url>`)

## After extraction

1. Save output with Write tool — use article title as filename
2. Show summary: title, author, word count, saved path + first ~15 lines as preview
