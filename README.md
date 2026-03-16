# Akinhwan.com

This personal site is the home of my newsletter archive, blog posts, past work, and other miscellany.

## Technology Stack

- Framework: [Vue.js](https://www.vuejs.org)
- Static Site Generation: [Nuxt](https://www.nuxtjs.org)
- Markdown Management: [Nuxt Content](https://content.nuxtjs.org/)
- Deployment: [Netlify](https://www.netlify.com)
- CSS Pre-processor: [Sass](https://sass-lang.com/)
- CSS Framework: [TailwindCSS](https://tailwindcss.com/)

## Blog Architecture

The journal is fully contained in this repo:

- Posts live in `content/blog/` as Markdown with frontmatter.
- Shared blog query and formatting logic lives in `utils/blog.js`.
- `pages/blog/index.vue`, `pages/blog/_slug.vue`, `pages/index.vue`, and static route generation all use the same local helper layer.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
