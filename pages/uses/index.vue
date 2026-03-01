<template>
  <ResourcePage
    slug="uses"
    eyebrow="Uses"
    :hero-image="require('~/assets/us.png')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'UsesPage',
  components: { ResourcePage },
  head() {
    return { title: 'Uses' }
  }
}
</script>
