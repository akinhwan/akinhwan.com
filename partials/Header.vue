<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <!-- <div class="flex-shrink-0 mr-4"> -->
        <!-- Logo -->
        <!-- <router-link to="/" class="block" aria-label="logo">
            <img class="rounded-full" :src="require('~/assets/profile2.jpg')" width="32" height="32" alt="Team mosaic 01" />
            <svg class="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
            </svg>
          </router-link> -->
        <!-- </div> -->

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:flex-grow">
          <!-- Desktop menu links -->
          <ul class="flex flex-grow justify-center flex-wrap items-center">
            <!-- <li>
              <router-link to="/features" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Features</router-link>
            </li>
            <li>
              <router-link to="/pricing" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</router-link>
            </li> -->
            <li>
              <router-link
                to="/"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/blog"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link
                to="/newsletter"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Newsletter</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >About</router-link
              >
            </li>
            <!-- 1st level: hover -->
            <!-- <Dropdown title="Support">
              <li>
                <router-link to="/contact" class="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Contact us</router-link>
              </li>
              <li>
                <router-link to="/help" class="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Help center</router-link>
              </li>
              <li>
                <router-link to="/404" class="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">404</router-link>
              </li>
            </Dropdown> -->
          </ul>

          <!-- Desktop sign in links -->
          <!-- <ul class="flex flex-grow justify-end flex-wrap items-center">
            <li>
              <router-link to="/signin" class="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</router-link>
            </li>
            <li>
              <router-link to="/signup" class="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</router-link>
            </li>
          </ul> -->
        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden">
          <!-- Hamburger button -->
          <button
            ref="hamburger"
            class="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav
            id="mobile-nav"
            ref="mobileNav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 }
            ]"
          >
            <ul class="bg-gray-800 px-4 py-2">
              <li>
                <router-link
                  to="/"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Home</router-link
                >
              </li>
              <!-- <li>
                <router-link to="/features" class="flex text-gray-300 hover:text-gray-200 py-2">Work</router-link>
              </li> -->
              <!-- <li>
                <router-link to="/pricing" class="flex text-gray-300 hover:text-gray-200 py-2">Pricing</router-link>
              </li> -->
              <li>
                <router-link
                  to="/blog"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Blog</router-link
                >
              </li>
              <li>
                <router-link
                  to="/newsletter"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Newsletter</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >About</router-link
                >
              </li>
              <!-- <li class="py-2 my-2 border-t border-b border-gray-700">
                <span class="flex text-gray-300 py-2">Support</span>
                <ul class="pl-4">
                  <li>
                    <router-link to="/contact" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</router-link>
                  </li>
                  <li>
                    <router-link to="/help" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</router-link>
                  </li>
                  <li>
                    <router-link to="/404" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</router-link>
                  </li>
                </ul>
              </li> -->

              <!-- <li>
                <router-link to="/signin" class="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</router-link>
              </li> -->
              <!-- <li>
                <router-link to="/signup" class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  components: {
    // Dropdown
  },
  data() {
    return {
      mobileNavOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.clickOutside)
    document.addEventListener('keydown', this.keyPress)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    }
  }
}
</script>
<style lang="scss">
.hamburger {
  svg > * {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      transform-origin: center;
    }

    &:nth-child(1) {
      transition: y 0.1s 0.25s ease-in,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19),
        opacity 0.1s ease-in;
    }

    &:nth-child(2) {
      transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &:nth-child(3) {
      transition: y 0.1s 0.25s ease-in,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19),
        width 0.1s 0.25s ease-in;
    }
  }

  &.active {
    svg > * {
      &:nth-child(1) {
        opacity: 0;
        y: 11;
        transform: rotate(225deg);
        transition: y 0.1s ease-out,
          transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1),
          opacity 0.1s 0.12s ease-out;
      }

      &:nth-child(2) {
        transform: rotate(225deg);
        transition: transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &:nth-child(3) {
        y: 11;
        transform: rotate(135deg);
        transition: y 0.1s ease-out,
          transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1),
          width 0.1s ease-out;
      }
    }
  }
}
</style>
