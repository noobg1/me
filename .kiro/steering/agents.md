# Blog Conventions

## Blog Post Structure

- Each blog post lives in `blog/<slug>/` (no date prefix in folder name)
- Use `index.md` for plain markdown, `index.mdx` if using JSX/imports (e.g., GIF require())
- All assets (images, GIFs) go in the same folder as the post

## Frontmatter

```yaml
---
slug: <kebab-case-slug>
title: "<Title>"
authors: [jeevan_dc]
tags: [<tags from blog/tags.yml>]
date: YYYY-MM-DD
---
```

- Always include `date` in YYYY-MM-DD format (only the year is displayed on the site)
- Never use date prefixes in folder names
- Author is always `jeevan_dc`
- Tags must exist in `blog/tags.yml` — add new ones there if needed

## When Publishing from Internal Repo

- Source: `/Users/Jeevan.Chikkegowda/labs/entain/docs-hub` (check all branches)
- Copy the entire blog folder including assets
- Strip date prefix from folder name
- Update frontmatter to match conventions above
- Change any non-jeevan_dc authors to `jeevan_dc`
- Remove internal/company-specific references if needed
- Build (`npm run build`) before committing
- Commit and push to `main` (auto-deploys via GitHub Actions)
