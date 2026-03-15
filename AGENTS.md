# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal website for Andrew Kim (akinhwan.com) — a statically-generated site built with Nuxt 2, serving as a journal archive, newsletter home, and curated recommendation pages. Deployed to Netlify.

## Commands

```bash
# Install dependencies
yarn install

# Dev server with hot reload (localhost:3000)
yarn dev

# Production build
yarn build

# Generate static site (used for Netlify deploy)
yarn generate

# Lint JS and Vue files
yarn lint
```

There is no test suite configured in this project.

## Tech Stack

- **Framework:** Nuxt 2 (Vue 2) with `target: 'static'` and `mode: 'universal'`
- **Content:** `@nuxt/content` v1 — blog posts are Markdown files in `content/blog/`
- **CSS:** TailwindCSS (loaded via PostCSS in `nuxt.config.js`, not as a Nuxt module) + Sass (SCSS)
- **Plugins:** AOS (scroll animations, client-only), Google Analytics (production-only)

## Architecture

### Content Pipeline

Blog posts live as Markdown files in `content/blog/`. Each post has YAML frontmatter with `title`, `date`, `excerpt`, and optionally `isNewsletter`. Posts are fetched at build time via `$content('blog')` and rendered by `pages/blog/_slug.vue`. The `generate.routes()` function in `nuxt.config.js` explicitly enumerates all blog content paths for static generation.

### Page Patterns

There are two distinct page types:

1. **Blog/Journal pages** — `pages/blog/index.vue` lists posts via `BlogPostList` component; `pages/blog/_slug.vue` renders individual posts using `<nuxt-content>`.
2. **Recommendation pages** (books, podcasts, music, uses, bookmarks, amazon) — These all use the same `ResourcePage` component with a `slug` prop. The data is centralized in `utils/recommendations-data.js`. To add a new recommendation page, create a page file like `pages/foo/index.vue` that renders `<ResourcePage slug="foo" />` and add the corresponding entry to `recommendationPages` in the data file.

### Editorial Component System

The `components/editorial/` directory contains a reusable layout system used across all pages:

- `PageHero` — full-width hero with eyebrow, title, lede, optional image and CTA
- `SectionRail` — labeled content section with eyebrow, title, description, and a slot for child content
- `LinkGrid` — responsive grid wrapper (accepts a `columns` prop)
- `EditorialCard` — card that renders as `<router-link>`, `<a>`, or `<article>` depending on `to`/`href` props
- `EmbedPanel` — iframe embed wrapper for Spotify, Mixcloud, YouTube, SoundCloud
- `PageOutro` — closing CTA section with primary and secondary actions

Pages are composed by nesting these components: `PageHero` → one or more `SectionRail` sections containing `LinkGrid` + `EditorialCard` → `PageOutro`.

### Navigation

Site navigation is defined in `utils/navigation.js` as a flat array of items with a `group` field (`primary`, `secondary`, `labs`). `AppNavbar` imports filtered subsets of this array. To add a new page to the nav, add an entry to `siteNavigation` in that file.

### Styling

- **Design tokens** are CSS custom properties defined in `styles/_luxury-tokens.scss` (colors, radii, shadows, timing, container width). These are the source of truth for the visual language.
- **Typography classes** (`display-xl`, `display-lg`, `eyebrow`, `lede`, `meta`, `btn`) are defined in `styles/_settings.scss` and available globally.
- **Fonts:** Cormorant Garamond (headings/display) and Manrope (body/UI), loaded from Google Fonts in `nuxt.config.js`.
- TailwindCSS is configured with a custom warm color palette (overrides `gray` and `purple` scales) in `tailwind.config.js`. The Tailwind purge config scans `components/`, `partials/`, `layouts/`, `pages/`, and `plugins/`.
- The default layout (`layouts/default.vue`) provides the global shell: navbar, decorative background (grain + gradient orbs), `<nuxt>` slot, and footer. It also defines global utility classes like `.content`, `.page-shell`, `.page-space`, and `.surface-card`.

### Code Style

- Prettier: no semicolons, single quotes, arrow parens always (`.prettierrc`)
- ESLint: `@nuxtjs` + Prettier + Nuxt plugin rules (`.eslintrc.js`)
- Indentation: 2 spaces, LF line endings (`.editorconfig`)
