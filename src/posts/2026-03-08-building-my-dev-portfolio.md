---
title: "Building My Dev Portfolio with Eleventy"
description: "How I set up a fast, static blog and portfolio using Eleventy and deployed it on Vercel."
date: 2026-03-08
---

This is the first post on my new blog. I built this site using [Eleventy](https://www.11ty.dev/) — a simple, fast static site generator — and deployed it on Vercel.

## Why Eleventy?

A few reasons I picked Eleventy for this project:

- **Zero client-side JavaScript** by default — pages load fast
- **Flexible templating** — I'm using Nunjucks, but it supports Markdown, Liquid, and more
- **Simple data model** — front matter and directory data files keep things organized
- **Great for blogs** — collections and tags make listing posts trivial

## The Stack

Here's what powers this site:

- **Eleventy v3** for static generation
- **Nunjucks** for templating
- **Vercel** for hosting and continuous deployment
- **Markdown** for writing posts

## Writing a New Post

Creating a new blog post is straightforward. Add a Markdown file to `src/posts/` with front matter:

```yaml
---
title: "Your Post Title"
description: "A short summary of the post."
date: 2026-03-08
---
```

Then write your content in Markdown below the front matter. Eleventy picks it up automatically — no config changes needed.

## What's Next

I'm planning to add:

- A projects showcase section
- Syntax highlighting for code blocks
- Dark mode toggle
- An RSS feed

Stay tuned for more updates as I build this out.
