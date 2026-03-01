<template>
  <main>
    <PageHero
      eyebrow="About"
      title="I build products and write in public."
      lede="My work sits between product design and engineering execution. I care about small details, clear systems, and iterative shipping."
      :media-src="require('~/assets/tc-crop-purple.png')"
      media-alt="Andrew Kim"
      cta-label="Read Journal"
      cta-to="/blog"
    />

    <SectionRail
      eyebrow="Manifesto"
      title="How I approach craft"
      description="A concise view of what I optimize for in projects and collaboration."
    >
      <article class="surface-card about-manifesto">
        <p>
          I value useful software over flashy demos. The best work is usually the
          result of consistent iterations, clear feedback loops, and careful
          attention to users.
        </p>
        <p>
          I spend most of my time in product strategy, interface design,
          front-end systems, and shipping workflows. Writing helps me pressure
          test ideas and document the process.
        </p>
        <p>
          Outside of project work, I maintain curated resource pages to capture
          books, podcasts, tools, and references that keep influencing my
          thinking.
        </p>
      </article>
    </SectionRail>

    <SectionRail
      eyebrow="Contact"
      title="Let's talk"
      description="If you're working on something ambitious and need a product-minded builder, reach out."
    >
      <article class="surface-card about-contact">
        <a class="about-contact__email" href="mailto:hey@akinhwan.com">
          hey@akinhwan.com
        </a>
        <a
          class="about-contact__social"
          href="https://twitter.com/intent/user?screen_name=akinhwan"
          target="_blank"
          rel="noreferrer noopener"
        >
          @akinhwan
        </a>
      </article>
    </SectionRail>

    <PageOutro
      title="Prefer weekly updates?"
      description="Subscribe to the Sunday newsletter for projects, lessons, and practical links."
      primary-label="Join Newsletter"
      primary-to="/newsletter"
      secondary-label="Go Home"
      secondary-to="/"
    />
  </main>
</template>

<script>
import PageHero from '~/components/editorial/PageHero.vue'
import PageOutro from '~/components/editorial/PageOutro.vue'
import SectionRail from '~/components/editorial/SectionRail.vue'

export default {
  name: 'About',
  components: {
    PageHero,
    PageOutro,
    SectionRail
  },
  head() {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>
.about-manifesto,
.about-contact {
  padding: clamp(1.3rem, 3.2vw, 2.2rem);
}

.about-manifesto {
  display: grid;
  gap: 0.9rem;
  max-width: 860px;
}

.about-manifesto p {
  color: var(--muted);
  line-height: 1.9;
}

.about-contact {
  max-width: 760px;
  display: grid;
  gap: 0.55rem;
}

.about-contact__email,
.about-contact__social {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--ink);
  line-height: 1.2;
}

.about-contact__email:hover,
.about-contact__social:hover {
  color: var(--accent);
}
</style>
