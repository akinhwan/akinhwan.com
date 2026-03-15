<template>
  <ResourcePage
    slug="music"
    eyebrow="Music"
    :hero-image="require('~/assets/music.jpg')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'MusicPage',
  components: { ResourcePage },
  head() {
    return { title: 'Music' }
  }
}
</script>
