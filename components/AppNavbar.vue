<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="site-header__inner">
      <router-link class="site-logo" to="/">Andrew Kim</router-link>

      <div class="site-header__actions">
        <nav class="site-primary-nav" aria-label="Primary navigation">
          <router-link
            v-for="item in primaryNav"
            :key="item.to"
            :to="item.to"
            class="site-primary-link"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <div class="site-utility-group" aria-label="Display preferences">
          <HeaderUtilityMenu
            class="site-utility site-utility--appearance"
            label="Appearance"
            aria-label="Choose appearance"
            :options="appearanceOptions"
            :value="appearance"
            :compact="isCompactUtility"
            @select="updateAppearance"
          />
          <HeaderUtilityMenu
            class="site-utility site-utility--language"
            label="Language"
            aria-label="Choose language"
            :options="languageOptions"
            :value="language"
            :compact="isCompactUtility"
            @select="updateLanguage"
          />
        </div>

        <button
          ref="menuButton"
          class="site-menu-trigger"
          type="button"
          aria-haspopup="true"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="site-overlay-menu"
          @click="toggleMenu"
        >
          <span class="sr-only">Toggle menu</span>
          <span v-if="!isMenuOpen">Menu</span>
          <span v-else>Close</span>
        </button>
      </div>
    </div>

    <transition name="overlay-fade">
      <div
        v-if="isMenuOpen"
        id="site-overlay-menu"
        ref="overlay"
        class="site-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        @click.self="closeMenu"
      >
        <div class="site-overlay__content">
          <section class="site-overlay__section">
            <p class="eyebrow">Primary</p>
            <ul class="site-overlay__list">
              <li v-for="item in primaryNav" :key="`primary-${item.to}`">
                <router-link
                  :to="item.to"
                  class="site-overlay__link"
                  @click.native="closeMenu"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="site-overlay__section">
            <p class="eyebrow">Recommendations</p>
            <ul class="site-overlay__list">
              <li v-for="item in secondaryNav" :key="`secondary-${item.to}`">
                <router-link
                  :to="item.to"
                  class="site-overlay__link"
                  @click.native="closeMenu"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="site-overlay__section">
            <p class="eyebrow">Labs</p>
            <ul class="site-overlay__list">
              <li v-for="item in labsNav" :key="`labs-${item.to}`">
                <router-link
                  :to="item.to"
                  class="site-overlay__link"
                  @click.native="closeMenu"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </section>

          <section class="site-overlay__section site-overlay__section--full">
            <p class="eyebrow">Preferences</p>
            <div class="site-overlay__utilities">
              <HeaderUtilityMenu
                label="Appearance"
                aria-label="Choose appearance"
                :options="appearanceOptions"
                :value="appearance"
                @select="updateAppearance"
              />
              <HeaderUtilityMenu
                label="Language"
                aria-label="Choose language"
                :options="languageOptions"
                :value="language"
                @select="updateLanguage"
              />
            </div>
          </section>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import HeaderUtilityMenu from '~/components/HeaderUtilityMenu'
import {
  labsNav as labsNavLinks,
  primaryNav as primaryNavLinks,
  secondaryNav as secondaryNavLinks
} from '~/utils/navigation'

const THEME_STORAGE_KEY = 'akinhwan-theme-preference'
const LANGUAGE_STORAGE_KEY = 'akinhwan-language-preference'

export default {
  name: 'AppNavbar',
  components: {
    HeaderUtilityMenu
  },
  data() {
    return {
      appearance: 'system',
      isCompactUtility: false,
      isMenuOpen: false,
      language: 'en',
      mediaQueryList: null,
      scrolled: false,
      previouslyFocusedElement: null
    }
  },
  computed: {
    appearanceOptions() {
      return [
        {
          value: 'light',
          label: 'Light theme',
          icon: 'sun',
          description: 'Bright editorial palette'
        },
        {
          value: 'dark',
          label: 'Dark theme',
          icon: 'moon',
          description: 'Dimmed palette for low light'
        },
        {
          value: 'system',
          label: 'Device default',
          icon: 'desktop',
          description: 'Follow your system setting'
        }
      ]
    },
    languageOptions() {
      return [
        {
          value: 'en',
          label: 'English',
          icon: 'globe',
          description: 'Default site language'
        },
        {
          value: 'ko',
          label: 'Korean',
          icon: 'globe',
          description: 'Saved for future localization'
        }
      ]
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
  },
  watch: {
    $route() {
      this.closeMenu()
    },
    isMenuOpen(value) {
      document.body.classList.toggle('overlay-menu-open', value)
      if (value) {
        this.$nextTick(() => {
          const firstButtonOrLink = this.$refs.overlay.querySelector(
            'button, a'
          )
          if (firstButtonOrLink) firstButtonOrLink.focus()
        })
      }
    }
  },
  mounted() {
    this.readPreferences()
    this.onResize()
    this.onScroll()
    this.setupMediaQuery()
    window.addEventListener('resize', this.onResize, { passive: true })
    window.addEventListener('scroll', this.onScroll, { passive: true })
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy() {
    document.body.classList.remove('overlay-menu-open')
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
    document.removeEventListener('keydown', this.onKeyDown)
    this.removeMediaQueryListener()
  },
  methods: {
    applyAppearance() {
      const prefersDark =
        this.mediaQueryList && this.mediaQueryList.matches ? 'dark' : 'light'
      const theme = this.appearance === 'system' ? prefersDark : this.appearance

      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.setAttribute(
        'data-theme-preference',
        this.appearance
      )
      localStorage.setItem(THEME_STORAGE_KEY, this.appearance)
    },
    applyLanguage() {
      document.documentElement.setAttribute('lang', this.language)
      localStorage.setItem(LANGUAGE_STORAGE_KEY, this.language)
    },
    closeMenu() {
      if (!this.isMenuOpen) return
      this.isMenuOpen = false
      this.$nextTick(() => {
        if (
          this.previouslyFocusedElement &&
          typeof this.previouslyFocusedElement.focus === 'function'
        ) {
          this.previouslyFocusedElement.focus()
        } else if (this.$refs.menuButton) {
          this.$refs.menuButton.focus()
        }
      })
    },
    handleSystemThemeChange() {
      if (this.appearance === 'system') {
        this.applyAppearance()
      }
    },
    onKeyDown(event) {
      if (event.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu()
      }
    },
    onResize() {
      this.isCompactUtility = window.innerWidth < 760
    },
    onScroll() {
      this.scrolled = window.scrollY > 12
    },
    openMenu() {
      this.previouslyFocusedElement = document.activeElement
      this.isMenuOpen = true
    },
    readPreferences() {
      const savedAppearance = localStorage.getItem(THEME_STORAGE_KEY)
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

      if (
        this.appearanceOptions.some(
          (option) => option.value === savedAppearance
        )
      ) {
        this.appearance = savedAppearance
      }

      if (
        this.languageOptions.some((option) => option.value === savedLanguage)
      ) {
        this.language = savedLanguage
      }

      this.applyLanguage()
    },
    removeMediaQueryListener() {
      if (!this.mediaQueryList) return

      if (typeof this.mediaQueryList.removeEventListener === 'function') {
        this.mediaQueryList.removeEventListener(
          'change',
          this.handleSystemThemeChange
        )
      } else if (typeof this.mediaQueryList.removeListener === 'function') {
        this.mediaQueryList.removeListener(this.handleSystemThemeChange)
      }
    },
    setupMediaQuery() {
      this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

      if (typeof this.mediaQueryList.addEventListener === 'function') {
        this.mediaQueryList.addEventListener(
          'change',
          this.handleSystemThemeChange
        )
      } else if (typeof this.mediaQueryList.addListener === 'function') {
        this.mediaQueryList.addListener(this.handleSystemThemeChange)
      }

      this.applyAppearance()
    },
    toggleMenu() {
      if (this.isMenuOpen) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    },
    updateAppearance(value) {
      this.appearance = value
      this.applyAppearance()
    },
    updateLanguage(value) {
      this.language = value
      this.applyLanguage()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.site-header {
  position: sticky;
  top: 0;
  z-index: 60;
  width: 100%;
  backdrop-filter: blur(0);
  transition: background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    backdrop-filter var(--duration-fast) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.site-header.is-scrolled {
  background: var(--header-surface);
  border-color: var(--line);
  box-shadow: 0 6px 20px rgba(27, 23, 18, 0.08);
  backdrop-filter: blur(8px);
}

.site-header__inner {
  width: min(calc(100% - 2rem), var(--container-width));
  margin: 0 auto;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-header__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
  flex: 1;
  min-width: 0;
}

.site-logo {
  font-family: 'Cormorant Garamond', serif;
  color: var(--ink);
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}

.site-primary-nav {
  display: none;

  @media (min-width: 900px) {
    display: flex;
    gap: 1.15rem;
    align-items: center;
    min-width: 0;
  }
}

.site-primary-link {
  font-family: 'Manrope', sans-serif;
  color: var(--ink);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.8;
  transition: opacity var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
}

.site-primary-link:hover,
.site-primary-link.nuxt-link-exact-active {
  opacity: 1;
  color: var(--accent);
}

.site-utility-group {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
}

.site-utility {
  flex-shrink: 0;
}

.site-menu-trigger {
  font-family: 'Manrope', sans-serif;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 1rem;
  color: var(--ink);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.42);
  transition: background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.site-menu-trigger:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: #fff;
}

.site-overlay {
  position: fixed;
  inset: 0;
  background: var(--overlay);
  z-index: 80;
  color: #f5efe2;
  overflow-y: auto;
}

.site-overlay__content {
  width: min(calc(100% - 2rem), 1080px);
  margin: 0 auto;
  min-height: 100vh;
  padding: 6rem 0 4rem;
  display: grid;
  gap: 2.2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.site-overlay__section {
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  padding-top: 1rem;
}

.site-overlay__section--full {
  @media (min-width: 900px) {
    grid-column: 1 / -1;
  }
}

.site-overlay__section .eyebrow {
  color: rgba(255, 255, 255, 0.7);
}

.site-overlay__list {
  margin-top: 0.95rem;
  display: grid;
  gap: 0.5rem;
}

.site-overlay__link {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #f8f3e8;
  line-height: 1.2;
  transition: color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  display: inline-block;
}

.site-overlay__link:hover,
.site-overlay__link:focus {
  color: #d9bf8a;
  transform: translateX(3px);
}

.site-overlay__utilities {
  margin-top: 0.95rem;
  display: grid;
  gap: 0.85rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity var(--duration-base) var(--ease-out);
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
</style>
