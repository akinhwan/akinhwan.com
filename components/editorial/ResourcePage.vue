<template>
  <main>
    <PageHero
      :eyebrow="eyebrow"
      :title="resource.title"
      :lede="resource.lede"
      :media-src="heroImage"
      :media-alt="resource.title"
      cta-label="Back Home"
      cta-to="/"
    />

    <SectionRail
      v-if="resource.links && resource.links.length"
      eyebrow="Links"
      title="External resources"
      description="All existing outbound destinations are preserved in this redesigned layout."
    >
      <LinkGrid :columns="3">
        <EditorialCard
          v-for="(link, index) in resource.links"
          :key="`${link.href}-${index}`"
          :title="formatLinkTitle(link, index)"
          :description="link.href"
          :href="resolveHref(link.href)"
          :meta="linkMeta(link.href)"
        />
      </LinkGrid>
    </SectionRail>

    <SectionRail
      v-if="resource.embeds && resource.embeds.length"
      eyebrow="Embeds"
      title="Embedded media"
      description="Original embedded media sources retained from the previous version."
    >
      <LinkGrid :columns="2">
        <EmbedPanel
          v-for="(embed, index) in resource.embeds"
          :key="`${embed.src}-${index}`"
          :title="embed.title || `Embed ${index + 1}`"
          :provider="embed.provider || 'Embed'"
          :src="embed.src"
          :aspect="embedAspect(embed.src)"
        />
      </LinkGrid>
    </SectionRail>

    <PageOutro
      title="Explore another curated page"
      description="Browse adjacent recommendation pages or return to the journal archive."
      primary-label="Open Journal"
      primary-to="/blog"
      secondary-label="Home"
      secondary-to="/"
    />
  </main>
</template>

<script>
import EditorialCard from './EditorialCard.vue'
import EmbedPanel from './EmbedPanel.vue'
import LinkGrid from './LinkGrid.vue'
import PageHero from './PageHero.vue'
import PageOutro from './PageOutro.vue'
import SectionRail from './SectionRail.vue'
import { recommendationPages } from '~/utils/recommendations-data'

export default {
  name: 'ResourcePage',
  components: {
    EditorialCard,
    EmbedPanel,
    LinkGrid,
    PageHero,
    PageOutro,
    SectionRail
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    eyebrow: {
      type: String,
      default: 'Collection'
    },
    heroImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    resource() {
      return (
        recommendationPages[this.slug] || {
          title: 'Collection',
          lede: '',
          links: [],
          embeds: []
        }
      )
    }
  },
  methods: {
    resolveHref(href) {
      if (!href) return '#'
      if (href.startsWith('http://') || href.startsWith('https://')) return href
      if (href.startsWith('//')) return `https:${href}`
      return `https://${href}`
    },
    linkMeta(href) {
      try {
        return new URL(this.resolveHref(href)).hostname.replace('www.', '')
      } catch {
        return 'External resource'
      }
    },
    formatLinkTitle(link, index) {
      if (link.title && !link.title.startsWith('Resource from'))
        return link.title
      return `${this.resource.title} ${index + 1}`
    },
    embedAspect(src) {
      if (src.includes('open.spotify.com')) return 'audio'
      if (src.includes('mixcloud.com/widget/follow')) return 'audio'
      return 'video'
    }
  }
}
</script>
