<template>
  <section class="page-hero page-shell page-space">
    <div class="page-hero__grid surface-card">
      <div class="page-hero__copy">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="display-xl page-hero__title">{{ title }}</h1>
        <p v-if="lede" class="lede">{{ lede }}</p>
        <router-link v-if="ctaTo" :to="ctaTo" class="btn page-hero__cta">
          {{ ctaLabel || 'Explore' }}
        </router-link>
      </div>

      <figure v-if="mediaSrc" class="page-hero__media-wrap">
        <img
          :src="mediaSrc"
          :alt="mediaAlt || title"
          class="page-hero__media"
        />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    eyebrow: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    lede: {
      type: String,
      default: ''
    },
    mediaSrc: {
      type: String,
      default: ''
    },
    mediaAlt: {
      type: String,
      default: ''
    },
    ctaLabel: {
      type: String,
      default: ''
    },
    ctaTo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.page-hero {
  position: relative;
}

.page-hero__grid {
  display: grid;
  gap: 1.8rem;
  padding: clamp(1.6rem, 3.5vw, 3rem);

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: center;
  }
}

.page-hero__copy {
  display: grid;
  gap: 1rem;
}

.page-hero__title {
  max-width: 12ch;
}

.page-hero__cta {
  margin-top: 0.7rem;
  width: fit-content;
  color: #fff;
  background: var(--ink);
}

html[data-theme='dark'] .page-hero__cta {
  color: var(--bg);
  // background: var(--ink);
}

.page-hero__cta:hover {
  background: var(--accent);
}

// .page-hero__cta.nuxt-link-active {
//   background: var(--accent);
// }

// html[data-theme='dark'] .page-hero__cta.nuxt-link-active {
//   background: var(--accent);
// }

.page-hero__media-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  min-height: clamp(260px, 38vw, 420px);
  position: relative;
}

.page-hero__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
