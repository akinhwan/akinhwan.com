<template>
  <main>
    <section class="journal-entry page-shell page-space">
      <article class="journal-entry__surface surface-card">
        <header class="journal-entry__header">
          <p class="eyebrow">Journal Entry</p>
          <p class="meta">{{ formattedDate }}</p>
          <h1 class="display-xl journal-entry__title">{{ page.title }}</h1>
        </header>

        <img
          v-if="page.isNewsletter"
          src="~/assets/9-5.png"
          alt="Newsletter divider"
          class="journal-entry__divider"
        />

        <nuxt-content class="journal-entry__content" :document="page" />

        <img
          v-if="page.isNewsletter"
          src="~/assets/5-9.png"
          alt="Newsletter divider"
          class="journal-entry__divider"
        />
      </article>
    </section>

    <PageOutro
      title="Continue exploring the archive"
      description="Read another entry or follow the weekly newsletter for in-progress notes and ideas."
      primary-label="Back to Journal"
      primary-to="/blog"
      secondary-label="Newsletter"
      secondary-to="/newsletter"
    />
  </main>
</template>

<script>
import PageOutro from '~/components/editorial/PageOutro.vue'
import blog from '~/utils/blog'

export default {
  name: 'BlogPost',
  components: {
    PageOutro
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await blog.fetchBlogPostBySlug($content, params.slug)
      return { page }
    } catch (err) {
      error({ statusCode: 404, message: 'Journal entry not found' })
      return { page: null }
    }
  },
  computed: {
    formattedDate() {
      return blog.formatPostDate(this.page?.date)
    }
  },
  head() {
    return {
      title: this.page?.title || 'Journal Entry',
      meta: this.page?.excerpt
        ? [
            {
              hid: 'description',
              name: 'description',
              content: this.page.excerpt
            }
          ]
        : []
    }
  }
}
</script>

<style lang="scss">
.journal-entry__surface {
  width: min(100%, 860px);
  margin: 0 auto;
  padding: clamp(1.3rem, 4vw, 3rem);
}

.journal-entry__header {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.journal-entry__title {
  max-width: 14ch;
  font-size: clamp(2.2rem, 5vw, 4rem);
}

.journal-entry__divider {
  margin: 1.2rem auto;
}

.journal-entry__content {
  color: var(--ink);
}

.journal-entry__content * {
  color: inherit;
}

.journal-entry__content h2 {
  margin-top: 1.6rem;
  margin-bottom: 0.75rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  line-height: 1.18;
}

.journal-entry__content h3 {
  margin-top: 1.25rem;
  margin-bottom: 0.55rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  line-height: 1.2;
}

.journal-entry__content p,
.journal-entry__content li,
.journal-entry__content blockquote {
  line-height: 1.9;
  font-size: 1.03rem;
  color: var(--muted);
}

.journal-entry__content p,
.journal-entry__content ul,
.journal-entry__content ol,
.journal-entry__content blockquote {
  margin-bottom: 0.95rem;
}

.journal-entry__content blockquote {
  border-left: 3px solid var(--accent);
  padding-left: 0.9rem;
  font-style: italic;
}

.journal-entry__content a {
  color: var(--accent);
  text-decoration: underline;
}

.journal-entry__content img,
.journal-entry__content iframe {
  width: 100%;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
}

.journal-entry__content iframe {
  min-height: 320px;
}
</style>
