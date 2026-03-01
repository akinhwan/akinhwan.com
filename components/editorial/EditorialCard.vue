<template>
  <component
    :is="tagName"
    :to="to || null"
    :href="href || null"
    class="editorial-card surface-card"
    :target="href && isExternal ? '_blank' : null"
    :rel="href && isExternal ? 'noreferrer noopener' : null"
  >
    <figure v-if="image" class="editorial-card__media-wrap">
      <img :src="image" :alt="title" class="editorial-card__media" />
    </figure>

    <div class="editorial-card__copy">
      <p v-if="meta" class="meta">{{ meta }}</p>
      <h3 class="editorial-card__title">{{ title }}</h3>
      <p v-if="description" class="editorial-card__description">{{ description }}</p>
      <span class="editorial-card__cta">Explore</span>
    </div>
  </component>
</template>

<script>
export default {
  name: 'EditorialCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    meta: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagName() {
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'article'
    },
    isExternal() {
      return this.href.startsWith('http')
    }
  }
}
</script>

<style scoped lang="scss">
.editorial-card {
  display: block;
  overflow: hidden;
  border-radius: var(--radius-md);
  transition: transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.editorial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(143, 111, 62, 0.45);
  box-shadow: 0 20px 45px rgba(27, 21, 15, 0.12);
}

.editorial-card__media-wrap {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.editorial-card__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-base) var(--ease-out);
}

.editorial-card:hover .editorial-card__media {
  transform: scale(1.04);
}

.editorial-card__copy {
  padding: 1.1rem 1rem 1.25rem;
}

.editorial-card__title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.25;
  color: var(--ink);
}

.editorial-card__description {
  margin-top: 0.55rem;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.editorial-card__cta {
  margin-top: 0.95rem;
  display: inline-flex;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-weight: 700;
}
</style>
