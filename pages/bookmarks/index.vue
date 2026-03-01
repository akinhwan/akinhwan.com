<template>
  <ResourcePage
    slug="bookmarks"
    eyebrow="Bookmarks"
    :hero-image="require('~/assets/pushups.png')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'BookmarksPage',
  components: { ResourcePage },
  head() {
    return { title: 'Bookmarks' }
  }
}
</script>
