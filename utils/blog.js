const BLOG_DIRECTORY = 'blog'

function getPostSlug(post = {}) {
  if (post.slug) {
    return post.slug
  }

  if (post.path) {
    const segments = post.path.split('/').filter(Boolean)
    return segments[segments.length - 1] || ''
  }

  return ''
}

function formatSlug(slug = '') {
  return slug
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}

function normalizePost(post = {}) {
  const slug = getPostSlug(post)
  const path = post.path || `/${BLOG_DIRECTORY}/${slug}`
  const title = post.title || formatSlug(slug) || 'Untitled Entry'

  return {
    ...post,
    slug,
    path,
    title,
    excerpt: post.excerpt || '',
    isNewsletter: Boolean(post.isNewsletter)
  }
}

function isPublishedPost(post = {}) {
  if (!post.date) {
    return false
  }

  return new Date(post.date) <= new Date()
}

function sortPostsByDateDescending(posts = []) {
  return [...posts].sort(
    (left, right) => new Date(right.date) - new Date(left.date)
  )
}

function getPublishedPosts(posts = []) {
  return sortPostsByDateDescending(posts.map(normalizePost)).filter(
    isPublishedPost
  )
}

function getLatestPosts(posts = [], limit = 3) {
  return getPublishedPosts(posts).slice(0, limit)
}

function formatPostDate(date, locale = 'default') {
  if (!date) {
    return ''
  }

  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

async function fetchBlogPosts($content) {
  const posts = await $content(BLOG_DIRECTORY).fetch()
  return posts.map(normalizePost)
}

async function fetchPublishedBlogPosts($content) {
  const posts = await fetchBlogPosts($content)
  return getPublishedPosts(posts)
}

async function fetchLatestBlogPosts($content, limit = 3) {
  const posts = await fetchBlogPosts($content)
  return getLatestPosts(posts, limit)
}

async function fetchBlogPostBySlug($content, slug) {
  const post = await $content(`${BLOG_DIRECTORY}/${slug}`).fetch()
  return normalizePost(post)
}

async function buildBlogRoutes($content) {
  const posts = await fetchPublishedBlogPosts($content)
  return posts.map((post) => post.path)
}

module.exports = {
  BLOG_DIRECTORY,
  buildBlogRoutes,
  fetchBlogPostBySlug,
  fetchBlogPosts,
  fetchLatestBlogPosts,
  fetchPublishedBlogPosts,
  formatPostDate,
  getLatestPosts,
  getPublishedPosts,
  isPublishedPost,
  normalizePost,
  sortPostsByDateDescending
}
