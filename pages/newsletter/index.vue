<template>
  <main>
    <PageHero
      eyebrow="Newsletter"
      title="A Sunday memo on process and progress."
      lede="Every week I share what shipped, what failed, and what I learned from building in public."
      :media-src="require('~/assets/9-5.png')"
      media-alt="Newsletter cover"
      cta-label="Subscribe"
      cta-to="/newsletter#subscribe"
    />

    <section id="subscribe" class="page-shell page-space">
      <div class="surface-card newsletter-subscribe">
        <h2 class="display-lg">Get the next edition in your inbox</h2>
        <p class="lede">
          One issue per week. No noise, no promotional clutter, and easy
          unsubscribe any time.
        </p>
        <NewsletterSimple />
      </div>
    </section>

    <SectionRail
      eyebrow="Archive"
      title="Past issues"
      description="Browse the complete list of existing newsletter links."
    >
      <div class="surface-card newsletter-archive">
        <ol>
          <li v-for="item in archive" :key="item.href">
            <a :href="item.href" target="_blank" rel="noreferrer noopener">
              {{ item.title }}
            </a>
          </li>
        </ol>
      </div>
    </SectionRail>

    <PageOutro
      title="Want more long-form notes?"
      description="The journal archive includes essays, experiments, and build logs across products and design systems."
      primary-label="Open Journal"
      primary-to="/blog"
      secondary-label="Back Home"
      secondary-to="/"
    />
  </main>
</template>

<script>
import NewsletterSimple from '~/partials/NewsletterSimple.vue'
import PageHero from '~/components/editorial/PageHero.vue'
import PageOutro from '~/components/editorial/PageOutro.vue'
import SectionRail from '~/components/editorial/SectionRail.vue'

export default {
  name: 'Newsletter',
  components: {
    NewsletterSimple,
    PageHero,
    PageOutro,
    SectionRail
  },
  data() {
    return {
      archive: [
        {
          href:
            'https://eomail6.com/preview?p=60273194-461b-11eb-a3d0-06b4694bee2a&pt=automation&t=1610806707&s=d2619d274e98c71a74109cf86f4dc40e662e7a28e1db23d55aa2dab0dd552879',
          title: 'This is how it all begins...'
        },
        {
          href:
            'https://eomail6.com/preview?p=7a3aea83-461f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1609729281&s=0f1f9876e2b6b058ed42b94dc9029e75a15f922417f464a1613bb7f60d7b657d',
          title: 'Just Start'
        },
        {
          href:
            'https://eomail6.com/preview?p=4472351f-4d06-11eb-a3d0-06b4694bee2a&pt=campaign&t=1610334153&s=ce53c492364c5e0fdf00331401191d0a7b7c49b68dc34f6ae29e3cde1fb5ee58',
          title: 'Keep Moving'
        },
        {
          href:
            'https://eomail6.com/preview?p=9bc07704-5919-11eb-a3d0-06b4694bee2a&pt=campaign&t=1610938939&s=03621c779771bf685aa8fa0d7559e4dde6c506890cec1fd1fde66eccd4bd6220',
          title: 'How Eventful'
        },
        {
          href:
            'https://eomail6.com/preview?p=78731bf4-5d89-11eb-a3d0-06b4694bee2a&pt=campaign&t=1611543418&s=86cb4438e1d12730f195da77ae3780b076f2894cb28289445e22394ad81f164b',
          title: 'Launch quick, Validate quicker'
        },
        {
          href:
            'https://eomail6.com/preview?p=41daa461-62a8-11eb-a3d0-06b4694bee2a&pt=campaign&t=1612148558&s=ad5cb7f1d8cc6b9bc35784a1e9bea6ff7d7b8eadb0a71ca7fc232a4ddc487b28',
          title: "Dreaming is easy, it's the waking up that's hard."
        },
        {
          href:
            'https://eomail6.com/preview?p=ce223c61-6a6f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1612833991&s=65da63f2818ae2f7e213c522f2f26d725516b3b1abda4b2513e2282453d1ac0c',
          title: "Slip but don't fall."
        },
        {
          href:
            'https://eomail6.com/preview?p=c660eb73-6e3b-11eb-a3d0-06b4694bee2a&pt=campaign&t=1613358119&s=3bf89340528b45fd6c9ef7763d6725a11090cdb980683baed49bfb8af6906850',
          title: 'One Decision to rule them all.'
        },
        {
          href:
            'https://eomail6.com/preview?p=fe7077c2-738a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1613962911&s=0baa9fe44997aaae469d552c4418826f6b7aaff71e90024b19602db6c8177070',
          title: 'Give it a hundred.'
        },
        {
          href:
            'https://eomail6.com/preview?p=d49ba168-7f47-11eb-a3d0-06b4694bee2a&pt=campaign&t=1615172657&s=a3946c77b5d70f3e03cbaa00a0e393e89e471bd9cd7d5ad9f099353d69b9d345',
          title: 'Have 1 good day, then repeat it.'
        },
        {
          href:
            'https://eomail6.com/preview?p=29995304-8525-11eb-a3d0-06b4694bee2a&pt=campaign&t=1615773697&s=8822884a88d2e308898398ac91c58b9772e29df1e94f4f295f9b59e0d319a9c5',
          title: 'Meditate to train your mind.'
        },
        {
          href:
            'https://eomail6.com/preview?p=d343a305-8aaa-11eb-a3d0-06b4694bee2a&pt=campaign&t=1616378773&s=4ca6e49230f8148f3ea695d0ec0d6e2c400606ee5ee4195c7a5af8c7c3d5758e',
          title: 'The real risk is mediocrity.'
        },
        {
          href:
            'https://eomail6.com/preview?p=af97604a-901f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1616978985&s=76a1b156004868ec2ca34531c441a6a152f6d9c6bc46fcd31d3fe5081ebc544c',
          title: 'Consistency > Intensity'
        },
        {
          href:
            'https://eomail6.com/web-version?p=7b6140b5-95ac-11eb-a3d0-06b4694bee2a&pt=campaign&t=1617588211&s=f84ea514d2ee6b0604f2069f8389691186cdda6212ecc936ef2a5a794f31ab70',
          title: 'Chateau Plateau'
        },
        {
          href:
            'https://eomail6.com/web-version?p=9f592d0b-9b2f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1618193635&s=7f5564d5a2bf3d726c9f559b46acc2cee112bac4c7c76ed0302f1d3186bf8b91',
          title: 'Information Billionaire'
        },
        {
          href:
            'https://eomail6.com/web-version?p=7f4b65a0-a04b-11eb-a3d0-06b4694bee2a&pt=campaign&t=1618797658&s=1828a5a41cfd0fcd29cf3719449bb58d24e83ac523172d8ac5a57786448a1010',
          title: 'What you resist tends to persist'
        },
        {
          href:
            'https://eomail6.com/web-version?p=dd41b071-a637-11eb-a3d0-06b4694bee2a&pt=campaign&t=1619406917&s=6ace69bea2f96899a381b820bec1bd0691bbf348201bd978f4c30a0495908cf8',
          title: 'Get what you deserve'
        },
        {
          href:
            'https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a',
          title: 'What-The-Hell effect'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Newsletter'
    }
  }
}
</script>

<style scoped>
.newsletter-subscribe,
.newsletter-archive {
  padding: clamp(1.2rem, 3.2vw, 2.3rem);
}

.newsletter-subscribe {
  display: grid;
  gap: 0.8rem;
}

.newsletter-archive {
  max-width: 920px;
}

.newsletter-archive ol {
  display: grid;
  gap: 0.55rem;
  list-style: decimal;
  padding-left: 1.1rem;
}

.newsletter-archive a {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: rgba(143, 111, 62, 0.42);
  text-underline-offset: 4px;
  transition: color var(--duration-fast) var(--ease-out),
    text-decoration-color var(--duration-fast) var(--ease-out);
}

.newsletter-archive a:hover {
  color: var(--accent);
  text-decoration-color: var(--accent);
}
</style>
