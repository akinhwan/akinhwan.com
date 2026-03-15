<template>
  <div class="site-shell">
    <AppNavbar />
    <div class="site-atmosphere" aria-hidden="true">
      <div class="site-atmosphere__grain" />
      <div class="site-atmosphere__orb site-atmosphere__orb--one" />
      <div class="site-atmosphere__orb site-atmosphere__orb--two" />
    </div>
    <nuxt class="site-main" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppNavbar from '~/components/AppNavbar'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppNavbar
  }
}
</script>

<style lang="scss">
@import '../styles/_settings.scss';
@import '../assets/css/tailwind.css';

html,
body,
#__nuxt,
#__layout {
  min-height: 100%;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--bg);
}

html[data-theme='dark'] {
  --bg: #171512;
  --surface: #211d19;
  --surface-strong: #2a2520;
  --surface-elevated: rgba(34, 29, 24, 0.96);
  --ink: #f5efe5;
  --muted: #b7aa98;
  --accent: #d5b37a;
  --accent-soft: #edd0a4;
  --line: rgba(245, 239, 229, 0.16);
  --overlay: rgba(10, 9, 8, 0.92);
  --shadow-soft: 0 18px 40px rgba(0, 0, 0, 0.35);
  --header-surface: rgba(23, 21, 18, 0.82);
}

body {
  font-family: 'Manrope', sans-serif;
  color: var(--ink);
  background: var(--bg);
  transition: background-color var(--duration-base) var(--ease-out),
    color var(--duration-base) var(--ease-out);
}

body.overlay-menu-open {
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.site-shell {
  position: relative;
  min-height: 100vh;
}

.site-main {
  position: relative;
  z-index: 2;
}

.site-atmosphere {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.site-atmosphere__grain {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image: radial-gradient(
    rgba(25, 22, 18, 0.08) 0.35px,
    transparent 0.35px
  );
  background-size: 5px 5px;
}

.site-atmosphere__orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(0px);
  opacity: 0.38;
}

.site-atmosphere__orb--one {
  width: 44vw;
  aspect-ratio: 1;
  top: -12vw;
  right: -10vw;
  background: radial-gradient(
    circle at 30% 30%,
    #e8d5b2 0%,
    rgba(232, 213, 178, 0) 72%
  );
}

.site-atmosphere__orb--two {
  width: 38vw;
  aspect-ratio: 1;
  bottom: -11vw;
  left: -9vw;
  background: radial-gradient(
    circle at 60% 60%,
    #d9ccb3 0%,
    rgba(217, 204, 179, 0) 70%
  );
}

.content {
  width: min(calc(100% - 2rem), 780px);
  margin: 0 auto;
}

.page-shell {
  width: min(calc(100% - 2rem), var(--container-width));
  margin: 0 auto;
}

.page-space {
  padding-top: clamp(2.8rem, 6vw, 4.5rem);
  padding-bottom: clamp(2.4rem, 5vw, 4rem);
}

.surface-card {
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.68),
    rgba(255, 251, 245, 0.92)
  );
  border: 1px solid rgba(31, 24, 14, 0.11);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

html[data-theme='dark'] .site-atmosphere__grain {
  opacity: 0.14;
  background-image: radial-gradient(
    rgba(255, 248, 236, 0.08) 0.35px,
    transparent 0.35px
  );
}

html[data-theme='dark'] .site-atmosphere__orb--one {
  background: radial-gradient(
    circle at 30% 30%,
    rgba(151, 111, 54, 0.36) 0%,
    rgba(151, 111, 54, 0) 72%
  );
}

html[data-theme='dark'] .site-atmosphere__orb--two {
  background: radial-gradient(
    circle at 60% 60%,
    rgba(90, 121, 136, 0.28) 0%,
    rgba(90, 121, 136, 0) 70%
  );
}

html[data-theme='dark'] .surface-card {
  background: linear-gradient(
    160deg,
    rgba(43, 37, 31, 0.88),
    rgba(28, 24, 20, 0.96)
  );
  border-color: rgba(245, 239, 229, 0.1);
}

.focus-ring:focus,
button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--accent-soft);
  outline-offset: 2px;
}

[data-aos='fade-up'],
[data-aos='fade-right'],
[data-aos='fade-left'] {
  transition-duration: var(--duration-base) !important;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
