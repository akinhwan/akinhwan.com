<template>
  <main>
    <PageHero
      eyebrow="Personal Studio"
      title="Designing, building, and documenting the craft."
      lede="This is my working archive. Product builds, writing experiments, and carefully collected resources all live here in one editorial home."
      :media-src="require('~/assets/tc-crop-purple.png')"
      media-alt="Andrew Kim portrait"
      cta-label="Read the Journal"
      cta-to="/blog"
    />

    <SectionRail
      eyebrow="Worlds"
      title="Three ways to explore the site"
      description="Start with active work, weekly writing, or curated notes."
    >
      <LinkGrid :columns="3">
        <EditorialCard
          title="Work"
          description="A snapshot of shipped projects, experiments, and product collaborations."
          to="/"
          :image="require('~/assets/pubmed-home.png')"
          meta="Featured"
        />
        <EditorialCard
          title="Newsletter"
          description="A Sunday letter about progress, process, and what I'm learning next."
          to="/newsletter"
          :image="require('~/assets/9-5.png')"
          meta="Weekly"
        />
        <EditorialCard
          title="Journal"
          description="Essays, build logs, and field notes from the intersection of design and code."
          to="/blog"
          :image="require('~/assets/calendar.jpg')"
          meta="Archive"
        />
      </LinkGrid>
    </SectionRail>

    <SectionRail
      eyebrow="Latest Writing"
      title="Recent journal entries"
      description="The newest entries from the archive, ordered by publish date."
    >
      <LinkGrid :columns="3">
        <EditorialCard
          v-for="post in latestPosts"
          :key="post.path"
          :title="post.title"
          :description="
            post.excerpt ||
              'Open the full post for notes, context, and references.'
          "
          :to="post.path"
          :meta="formatDate(post.date)"
        />
      </LinkGrid>
    </SectionRail>

    <SectionRail
      eyebrow="Recommendations"
      title="Curated resources"
      description="Long-running pages where I keep the books, podcasts, tools, and references I revisit most."
    >
      <LinkGrid :columns="3">
        <EditorialCard
          v-for="item in recommendations"
          :key="item.to"
          :title="item.title"
          :description="item.description"
          :to="item.to"
          :image="item.image"
        />
      </LinkGrid>
    </SectionRail>

    <PageOutro
      title="Want the behind-the-scenes process?"
      description="I send one carefully edited update each week with what shipped, what failed, and what changed my thinking."
      primary-label="Join Newsletter"
      primary-to="/newsletter"
      secondary-label="View About"
      secondary-to="/about"
    />
  </main>
</template>

<script>
import EditorialCard from '~/components/editorial/EditorialCard.vue'
import LinkGrid from '~/components/editorial/LinkGrid.vue'
import PageHero from '~/components/editorial/PageHero.vue'
import PageOutro from '~/components/editorial/PageOutro.vue'
import SectionRail from '~/components/editorial/SectionRail.vue'
import blog from '~/utils/blog'

export default {
  name: 'Home',
  components: {
    EditorialCard,
    LinkGrid,
    PageHero,
    PageOutro,
    SectionRail
  },
  async asyncData({ $content }) {
    const latestPosts = await blog.fetchLatestBlogPosts($content)
    return { latestPosts }
  },
  data() {
    return {
      recommendations: [
        {
          title: 'Books',
          description: 'A growing shelf of books worth re-reading.',
          to: '/books',
          image: require('~/assets/books.jpg')
        },
        {
          title: 'Podcasts',
          description: 'Conversations and interviews I return to.',
          to: '/podcasts',
          image: require('~/assets/podcast.jpg')
        },
        {
          title: 'Music',
          description: 'Listening guides and mixes that shape my workflow.',
          to: '/music',
          image: require('~/assets/music.jpg')
        },
        {
          title: 'Uses',
          description: 'Hardware, software, and systems I rely on daily.',
          to: '/uses',
          image: require('~/assets/mybooks.jpg')
        },
        {
          title: 'Bookmarks',
          description: 'Curated links and rabbit holes from years of browsing.',
          to: '/bookmarks',
          image: require('~/assets/pushups.png')
        },
        {
          title: 'Amazon',
          description: 'Favorite purchases and practical tools from Amazon.',
          to: '/amazon',
          image: require('~/assets/us.png')
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      return blog.formatPostDate(date)
    }
  }
}
</script>
