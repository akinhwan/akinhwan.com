<template>
  <nuxt-link :to="post.path" class="journal-card surface-card">
    <div class="journal-card__inner">
      <p class="meta">{{ formattedDate }}</p>
      <h2 class="journal-card__title">{{ post.title }}</h2>
      <p v-if="post.excerpt" class="journal-card__excerpt">
        {{ post.excerpt }}
      </p>
      <span class="journal-card__cta">Read Entry</span>
    </div>
  </nuxt-link>
</template>

<script>
import blog from '~/utils/blog'

export default {
  name: 'BlogPostPreview',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return blog.formatPostDate(this.post.date)
    }
  }
}
</script>

<style scoped>
.journal-card {
  display: block;
  border-radius: var(--radius-md);
  transition: transform var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.journal-card:hover {
  transform: translateY(-3px);
  border-color: rgba(143, 111, 62, 0.45);
}

.journal-card__inner {
  padding: 1.2rem 1.1rem 1.3rem;
}

.journal-card__title {
  margin-top: 0.45rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.45rem, 2.2vw, 1.95rem);
  line-height: 1.25;
  color: var(--ink);
}

.journal-card__excerpt {
  margin-top: 0.6rem;
  color: var(--muted);
  line-height: 1.75;
}

.journal-card__cta {
  margin-top: 0.9rem;
  display: inline-block;
  color: var(--accent);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}
</style>
