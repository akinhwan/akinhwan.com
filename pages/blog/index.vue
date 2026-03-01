<template>
  <main class="page-space">
    <BlogPostList :list="posts" />
  </main>
</template>

<script>
import BlogPostList from '~/components/BlogPostList'

export default {
  name: 'BlogIndex',
  components: {
    BlogPostList
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },
  head() {
    return {
      title: 'Journal'
    }
  }
}
</script>
