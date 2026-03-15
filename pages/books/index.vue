<template>
  <ResourcePage
    slug="books"
    eyebrow="Books"
    :hero-image="require('~/assets/books.jpg')"
  />
</template>

<script>
import ResourcePage from '~/components/editorial/ResourcePage.vue'

export default {
  name: 'BooksPage',
  components: { ResourcePage },
  head() {
    return { title: 'Books' }
  }
}
</script>
