<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- <script async custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
     -->
    <iframe
      id="lock"
      src="https://poppalock.netlify.app/"
      title="W3Schools Free Online Web Tutorials"
    ></iframe>
  </div>
</template>

<script>
// import PageIllustration from '~/partials/PageIllustration.vue'
// import HeroAbout from '~/partials/HeroAbout.vue'
// import Timeline from '~/partials/Timeline.vue'
// import Newsletter from '~/partials/Newsletter.vue'
// import Footer from '~/partials/Footer.vue'

export default {
  name: 'Arcade',
  components: {
    // PageIllustration,
    // HeroAbout,
    // Timeline,
    // Newsletter,
    // Footer,
  },
}
</script>

<style lang="scss">
#lock {
  // height: 100%;
  width: 50%;
  margin: auto;
  height: 50vh;
}
</style>