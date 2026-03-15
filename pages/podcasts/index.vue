<template>
  <ResourcePage
    slug="podcasts"
    eyebrow="Podcasts"
    :hero-image="require('~/assets/podcast.jpg')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'PodcastsPage',
  components: { ResourcePage },
  head() {
    return { title: 'Podcasts' }
  }
}
</script>
