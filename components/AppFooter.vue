<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__about">
        <p class="eyebrow">Andrew Kim</p>
        <p class="site-footer__lede">
          Builder, writer, and designer based in Redwood City. I share projects,
          ideas, and learning notes across this site.
        </p>
      </div>

      <div class="site-footer__nav-grid">
        <section>
          <h2 class="site-footer__heading">Primary</h2>
          <ul>
            <li v-for="item in primaryNav" :key="`footer-primary-${item.to}`">
              <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="site-footer__heading">Recommendations</h2>
          <ul>
            <li
              v-for="item in secondaryNav"
              :key="`footer-secondary-${item.to}`"
            >
              <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="site-footer__heading">Labs</h2>
          <ul>
            <li v-for="item in labsNav" :key="`footer-labs-${item.to}`">
              <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p>© {{ currentYear }} Andrew Kim</p>
      <div class="site-footer__socials">
        <a
          href="https://twitter.com/intent/user?screen_name=akinhwan"
          rel="nofollow noreferrer noopener"
          target="_blank"
          aria-label="Twitter"
        >
          X / Twitter
        </a>
        <a href="mailto:hey@akinhwan.com">hey@akinhwan.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  labsNav as labsNavLinks,
  primaryNav as primaryNavLinks,
  secondaryNav as secondaryNavLinks
} from '~/utils/navigation'

export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    primaryNav() {
      return primaryNavLinks
    },
    secondaryNav() {
      return secondaryNavLinks
    },
    labsNav() {
      return labsNavLinks
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.site-footer {
  border-top: 1px solid var(--line);
  margin-top: var(--section-gap);
  padding-top: 2.5rem;
  padding-bottom: 2rem;
}

.site-footer__inner,
.site-footer__bottom {
  width: min(calc(100% - 2rem), var(--container-width));
  margin: 0 auto;
}

.site-footer__inner {
  display: grid;
  gap: 2rem;
  align-items: start;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.9fr);
    gap: 3rem;
  }
}

.site-footer__lede {
  margin-top: 0.7rem;
  color: var(--muted);
  max-width: 34ch;
  line-height: 1.75;
}

.site-footer__nav-grid {
  display: grid;
  gap: 1.5rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.site-footer__heading {
  font-family: 'Manrope', sans-serif;
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.7rem;
}

.site-footer ul {
  display: grid;
  gap: 0.45rem;
}

.site-footer a {
  color: var(--ink);
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  transition: color var(--duration-fast) var(--ease-out);
}

.site-footer a:hover {
  color: var(--accent);
}

.site-footer__bottom {
  margin-top: 2.2rem;
  border-top: 1px solid var(--line);
  padding-top: 1.2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.85rem;
}

.site-footer__socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
