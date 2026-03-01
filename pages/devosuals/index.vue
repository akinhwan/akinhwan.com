<template>
  <main>
    <PageHero
      eyebrow="Lab"
      title="Devosuals"
      lede="This experimental lab is currently being rebuilt into a richer visual prototype archive."
      :media-src="require('~/assets/tweet2.png')"
      media-alt="Devosuals lab"
      cta-label="Explore Journal"
      cta-to="/blog"
    />

    <section class="page-shell page-space">
      <article class="surface-card devosuals-note">
        <h2 class="display-lg">Lab in progress</h2>
        <p class="lede">
          The original page used an unfinished AMP story shell. During this
          redesign it remains published, but de-emphasized in navigation while I
          curate a full set of visual demos.
        </p>
      </article>
    </section>
  </main>
</template>

<script>
import PageHero from '~/components/editorial/PageHero.vue'

export default {
  name: 'Devosuals',
  components: { PageHero },
  head() {
    return {
      title: 'Devosuals'
    }
  }
}
</script>

<style scoped>
.devosuals-note {
  padding: clamp(1.3rem, 3vw, 2rem);
  display: grid;
  gap: 0.8rem;
}
</style>
