Scan the entire wiki for structural and consistency issues.

## 1. Frontmatter issues

Check every `.md` and `.mdx` file in `src/content/docs/` for:
- Missing `title`
- Missing `description`
- Missing `created` or `updated`
- `created` date that is newer than `updated` date (impossible — flag as error)
- `#` h1 heading used in the page body (title is rendered by Starlight)

## 2. Orphan pages

Find pages with no inbound links from other wiki pages. A page is an orphan if no other `.md`/`.mdx` file links to it. List all orphans — do not delete them, just report.

## 3. Missing sources

Find pages that contain factual claims (statistics, version numbers, benchmarks, named tools) but have no `## Sources` section. Flag these for attribution.

## 4. Broken internal links

Check all relative and absolute internal links between wiki pages. Flag any that point to a file or anchor that does not exist.

## 5. Filename diacritics

Find `.md`/`.mdx` files whose names contain non-ASCII characters (Czech diacritics). For each match, compute the transliterated ASCII version using:

- `č → c`, `ř → r`, `š → s`, `ž → z`, `ň → n`, `ť → t`, `ď → d`
- `á → a`, `é → e`, `ě → e`, `í → i`, `ó → o`, `ú → u`, `ů → u`, `ý → y`

Rename each affected file with `git mv` to preserve history. The page `title` in frontmatter must keep diacritics — only the filename changes. After renaming, search the wiki for broken links that referenced the old slug (with diacritics) and update them.

## 6. Report

Output a structured report grouped by issue type:

```
## Frontmatter issues
- src/content/docs/AI/Example.md — missing `description`

## Orphan pages
- src/content/docs/AI/Example.md — no inbound links

## Missing sources
- src/content/docs/AI/Example.md — contains factual claims, no Sources section

## Broken internal links
- src/content/docs/AI/Example.md:12 — links to /AI/Nonexistent

## Filename diacritics
- src/content/docs/LifeHack/Nemusíš.md → Nemusis.md
```

If no issues are found in a category, write `None found.`

## 7. Fix what you can

Fix frontmatter issues (missing fields, wrong date order) directly.

Rename filenames with diacritics using `git mv` and update any internal links that referenced the old slug.

Do not add fake sources, do not remove content, do not rewrite pages. For orphans and missing sources, report only — let the user decide.

## 8. Commit fixes

If any files were changed:

```
docs: lint — fix [summary]
```
