<template>
  <main>
    <PageHero
      eyebrow="Lab"
      title="Arcade experiments"
      lede="A small collection of interactive builds and game-like prototypes."
      :media-src="require('~/assets/poppalock.png')"
      media-alt="Arcade preview"
      cta-label="Open Home"
      cta-to="/"
    />

    <section class="page-shell page-space">
      <article class="surface-card arcade-shell">
        <iframe
          id="lock"
          src="https://poppalock.netlify.app/"
          title="Arcade prototype"
        />
      </article>
    </section>
  </main>
</template>

<script>
import PageHero from '~/components/editorial/PageHero.vue'

export default {
  name: 'Arcade',
  components: { PageHero },
  head() {
    return {
      title: 'Arcade'
    }
  }
}
</script>

<style scoped>
.arcade-shell {
  padding: 1rem;
  min-height: 70vh;
}

#lock {
  width: 100%;
  min-height: 66vh;
  border-radius: var(--radius-sm);
}
</style>
