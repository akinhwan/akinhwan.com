# How To Create a New Blog Post

This repo stores blog posts as Markdown files in `content/blog/`. Once a post file exists there with valid frontmatter, Nuxt Content will load it automatically and the site will render it in the journal.

## Quick Start

1. Create a new Markdown file in `content/blog/`.
2. Name the file with the URL slug you want, for example `my-new-post.md`.
3. Add frontmatter at the top of the file.
4. Write the post body in Markdown below the frontmatter.
5. Run the site locally and confirm the post appears at `/blog/<slug>`.

## File Location

All blog posts live here:

```text
content/blog/
```

Examples already in the repo:

- `content/blog/pushups.md`
- `content/blog/posterday.md`
- `content/blog/hackathons.md`

## URL Structure

The filename becomes the post slug.

Example:

- File: `content/blog/my-new-post.md`
- URL: `/blog/my-new-post`

You do not need to manually register the route anywhere else. Static route generation uses the local helper in `utils/blog.js` to include published blog posts automatically.

## Required Frontmatter

At minimum, add these fields:

```md
---
title: My New Post
date: 2026-03-15T09:00:00
excerpt: A short summary that appears in blog cards and metadata.
---
```

What each field does:

- `title`: Used as the page title and heading on the post page.
- `date`: Determines whether the post is considered published and where it appears in date order.
- `excerpt`: Used in archive previews and as the page description meta tag.

## Optional Frontmatter

You can also include:

```md
---
isNewsletter: true
tags:
  - writing
  - process
---
```

What these do:

- `isNewsletter`: When `true`, the post page shows the newsletter divider images above and below the content.
- `tags`: Supported by the blog list filtering logic, although the current UI does not expose a tag picker.

## Full Example

```md
---
title: Building a Better Writing Workflow
date: 2026-03-15T09:00:00
excerpt: Notes on making the publishing flow lighter and more consistent.
isNewsletter: false
tags:
  - writing
  - workflow
---

# Building a Better Writing Workflow

Start with a strong opening paragraph.

## Add sections with Markdown

You can use headings, lists, links, blockquotes, images, and embeds.

- Bullet points work well
- Numbered lists work too

> Blockquotes are styled on the post page.

[External links](https://example.com) render normally.
```

## Publishing Rules

This repo only treats a post as published if it has a valid `date` and that date is not in the future.

That means:

- If `date` is missing, the post will not appear in the blog index, homepage latest posts, or generated static routes.
- If `date` is in the future, the post will stay hidden until that date passes.
- If `date` is in the past or present, the post will appear automatically.

This behavior is implemented in `utils/blog.js`.

## Markdown Features

Posts are rendered with `<nuxt-content>`, so standard Markdown works well:

- Headings
- Paragraphs
- Bullet and numbered lists
- Blockquotes
- Links
- Inline images
- Embedded iframes in raw HTML

Example image:

```md
![Alt text](/some-image.jpg)
```

Example HTML embed:

```html
<iframe
  src="https://www.youtube.com/embed/example"
  title="Embedded video"
  frameborder="0"
  allowfullscreen
></iframe>
```

## Images Inside Posts

If you want to use images inside a post, prefer assets that are easy to serve from the static site.

Good options:

- Put image files in `static/` and reference them with root-relative paths.
- Use externally hosted image URLs when appropriate.

Example:

```md
![Notebook](/blog-images/notebook.jpg)
```

If you add `static/blog-images/notebook.jpg`, that image will resolve correctly at runtime.

## Local Preview Workflow

Start the site locally:

```bash
yarn dev
```

Then open:

- `http://localhost:3000/blog` for the journal archive
- `http://localhost:3000/blog/my-new-post` for the individual post

Check that:

- The post title renders correctly
- The date looks right
- The excerpt appears in the archive card
- The content formatting looks good
- Any images or embeds load properly

## Build Verification

Before shipping a post, it is a good idea to run:

```bash
yarn lint
yarn build
```

If `yarn` is not available in your shell, the npm equivalents also work:

```bash
npm run lint
npm run build
```

## Common Mistakes

### The post does not show up in `/blog`

Check the following:

- The file is inside `content/blog/`
- The file ends in `.md`
- The frontmatter is wrapped in `---`
- `date` exists and is valid
- `date` is not in the future

### The title looks wrong

If `title` is missing, the site falls back to a title generated from the filename. Add an explicit `title` in frontmatter to control it.

### The excerpt is missing on cards

Add an `excerpt` field in the frontmatter. Without it, the post page still works, but preview cards will have less context.

### The page 404s

Make sure the URL matches the filename exactly.

Example:

- File: `content/blog/my-new-post.md`
- Valid URL: `/blog/my-new-post`

## Recommended Template

Copy this when starting a new post:

```md
---
title: Post Title
date: 2026-03-15T09:00:00
excerpt: One or two sentences describing the post.
isNewsletter: false
tags:
  - tag-one
  - tag-two
---

# Post Title

Write here.
```

## Where The Post Appears

Once published, a post can appear in these places:

- `/blog` journal archive
- `/blog/<slug>` individual post page
- Homepage latest writing section, if it is one of the 3 most recent published posts
- Generated static output during `nuxt generate`

## Relevant Files

If you want to understand or adjust the blog behavior, these are the main files:

- `content/blog/`
- `utils/blog.js`
- `pages/blog/index.vue`
- `pages/blog/_slug.vue`
- `components/BlogPostList.vue`
- `components/BlogPostPreview.vue`
- `pages/index.vue`
- `nuxt.config.js`
