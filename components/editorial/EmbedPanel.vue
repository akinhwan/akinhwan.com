<template>
  <article class="embed-panel surface-card" :class="`embed-panel--${aspect}`">
    <header class="embed-panel__header">
      <p class="meta">{{ provider }}</p>
      <h3 class="h4">{{ title }}</h3>
    </header>
    <div class="embed-panel__frame-wrap">
      <iframe
        :src="src"
        :title="title"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'EmbedPanel',
  props: {
    title: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    aspect: {
      type: String,
      default: 'video'
    }
  }
}
</script>

<style scoped>
.embed-panel {
  padding: 1rem;
}

.embed-panel__header {
  margin-bottom: 0.8rem;
}

.embed-panel__frame-wrap {
  position: relative;
  width: 100%;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.embed-panel--video .embed-panel__frame-wrap {
  aspect-ratio: 16 / 9;
}

.embed-panel--audio .embed-panel__frame-wrap {
  min-height: 120px;
}

.embed-panel--square .embed-panel__frame-wrap {
  aspect-ratio: 1 / 1;
}

.embed-panel iframe {
  width: 100%;
  height: 100%;
  min-height: 120px;
}
</style>
