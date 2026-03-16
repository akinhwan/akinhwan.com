<template>
  <div class="blog-list__container">
    <header class="blog-list__header">
      <p class="eyebrow">Journal</p>
      <h1 class="display-xl blog-list__title">Writing Archive</h1>
      <p class="lede">
        Build notes, reflective essays, and product learnings from ongoing work.
      </p>
    </header>

    <ul class="blog-list">
      <li
        v-for="(item, index) in filteredList"
        v-show="index <= displayRange.end"
        :key="`blog-post-${index}`"
        class="blog-list__item"
      >
        <BlogPostPreview :post="item" />
      </li>
    </ul>

    <div v-if="displayRange.end < filteredList.length - 1" class="pagination">
      <button class="button--load-more" type="button" @click="loadMore">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import BlogPostPreview from '~/components/BlogPostPreview'
import blog from '~/utils/blog'

export default {
  name: 'BlogPostList',
  components: {
    BlogPostPreview
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      displayRange: {
        end: 8
      },
      selectedTag: ''
    }
  },
  computed: {
    filteredList() {
      const posts = blog.getPublishedPosts(this.list)

      return this.selectedTag
        ? posts.filter(
            (item) => item.tags && item.tags.includes(this.selectedTag)
          )
        : posts
    }
  },
  methods: {
    loadMore() {
      this.displayRange.end += 5
    }
  }
}
</script>

<style scoped>
.blog-list__container {
  width: min(calc(100% - 2rem), 900px);
  margin: 0 auto;
  padding-top: clamp(2.5rem, 6vw, 4rem);
}

.blog-list__header {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
}

.blog-list__title {
  max-width: 11ch;
}

.blog-list {
  display: grid;
  gap: 1rem;
}

.blog-list__item {
  list-style: none;
}

.pagination {
  margin-top: 1.3rem;
  text-align: center;
}

.button--load-more {
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  padding: 0.8rem 1.4rem;
  border: 1px solid transparent;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.button--load-more:hover {
  background: var(--accent);
}
</style>
