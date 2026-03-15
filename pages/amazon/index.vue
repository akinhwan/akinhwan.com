<template>
  <ResourcePage
    slug="amazon"
    eyebrow="Amazon"
    :hero-image="require('~/assets/avatar.png')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'AmazonPage',
  components: { ResourcePage },
  head() {
    return { title: 'Amazon' }
  }
}
</script>
