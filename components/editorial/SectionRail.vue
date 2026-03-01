<template>
  <section class="section-rail page-shell page-space">
    <header class="section-rail__header">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2 class="display-lg section-rail__title">{{ title }}</h2>
      <p v-if="description" class="lede">{{ description }}</p>
    </header>
    <div class="section-rail__body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionRail',
  props: {
    eyebrow: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.section-rail__header {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
}

.section-rail__title {
  max-width: 18ch;
}

.section-rail__body {
  display: grid;
  gap: 1rem;
}
</style>
