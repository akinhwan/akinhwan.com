<template>
  <main class="page-space">
    <BlogPostList :list="posts" />
  </main>
</template>

<script>
import BlogPostList from '~/components/BlogPostList'
import blog from '~/utils/blog'

export default {
  name: 'BlogIndex',
  components: {
    BlogPostList
  },
  async asyncData({ $content }) {
    const posts = await blog.fetchPublishedBlogPosts($content)
    return { posts }
  },
  head() {
    return {
      title: 'Journal'
    }
  }
}
</script>
