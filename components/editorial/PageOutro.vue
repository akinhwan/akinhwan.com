<template>
  <section class="page-outro page-shell page-space">
    <div class="page-outro__inner surface-card">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2 class="display-lg page-outro__title">{{ title }}</h2>
      <p class="lede">{{ description }}</p>
      <div class="page-outro__actions">
        <router-link class="btn page-outro__action" :to="primaryTo">
          {{ primaryLabel }}
        </router-link>
        <router-link
          v-if="secondaryTo"
          class="btn page-outro__action page-outro__action--ghost"
          :to="secondaryTo"
        >
          {{ secondaryLabel }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageOutro',
  props: {
    eyebrow: {
      type: String,
      default: 'Stay Connected'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    primaryLabel: {
      type: String,
      default: 'Read Journal'
    },
    primaryTo: {
      type: String,
      default: '/blog'
    },
    secondaryLabel: {
      type: String,
      default: 'Newsletter'
    },
    secondaryTo: {
      type: String,
      default: '/newsletter'
    }
  }
}
</script>

<style scoped>
.page-outro__inner {
  padding: clamp(1.5rem, 4vw, 2.8rem);
  display: grid;
  gap: 0.95rem;
}

.page-outro__title {
  max-width: 14ch;
}

.page-outro__actions {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
}

.page-outro__action {
  color: #fff;
  background: var(--ink);
}

.page-outro__action:hover {
  background: var(--accent);
}

.page-outro__action--ghost {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
}

.page-outro__action--ghost:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: #fff;
}
</style>
