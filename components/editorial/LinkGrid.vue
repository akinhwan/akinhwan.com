<template>
  <div class="link-grid" :style="gridStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LinkGrid',
  props: {
    columns: {
      type: Number,
      default: 3
    }
  },
  computed: {
    gridStyles() {
      return {
        '--columns': this.columns
      }
    }
  }
}
</script>

<style scoped>
.link-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 700px) {
  .link-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1040px) {
  .link-grid {
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  }
}
</style>
