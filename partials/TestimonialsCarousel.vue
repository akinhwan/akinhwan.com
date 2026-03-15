<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-6">
        <!-- Carousel area-->
        <div class="max-w-2xl mx-auto">
          <!-- Carousel -->
          <div class="mt-6">
            <!-- Testimonials -->
            <transition-group
              tag="div"
              class="relative justify-center flex items-start"
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <!-- <template v-for="(item, index) in items">
                <div
                  :key="index"
                  v-show="active === index"
                  class="text-center"
                >
                  <div class="relative inline-flex flex-col justify-center mb-4">
                    <img class="rounded-full" :src="require(`~/assets/${item.img}`)" width="56" height="56" :alt="item.alt" />
                    <svg class="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote class="text-lg text-gray-400">{{item.quote}}</blockquote>
                  <div class="text-gray-700 font-medium mt-3">
                    <cite class="text-gray-200 not-italic">{{item.name}}</cite> / <span class="text-purple-600">{{item.role}}</span>
                  </div>
                </div>
              </template> -->
              <template>
                <div v-show="active === 0" :key="0">
                  <img src="~/assets/tweet3.png" alt="" />
                </div>
                <div v-show="active === 1" :key="1">
                  <img src="~/assets/tweet2.png" alt="" />
                </div>
                <div v-show="active === 2" :key="2">
                  <img src="~/assets/tweet4.png" alt="" />
                </div>
                <div v-show="active === 3" :key="3">
                  <img src="~/assets/tweet1.png" alt="" />
                </div>
              </template>
            </transition-group>

            <!-- Bullets -->
            <div class="flex justify-center mt-6">
              <template v-for="(item, index) in items">
                <button
                  :key="index"
                  class="p-1 group"
                  @click="
                    active = index
                    stopAutorotate()
                  "
                >
                  <span
                    class="block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out"
                    :class="active === index ? 'bg-gray-200' : 'bg-gray-500'"
                  ></span>
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsCarousel',
  data() {
    return {
      active: 0,
      autorotate: true,
      autorotateTiming: 5000,
      items: [
        {
          img: 'tc-crop-purple.png',
          alt: 'Testimonial 01',
          quote:
            '“ I want my readers to be inspired to design their own life and make money online by scaling their talents.“',
          name: 'Andrew Kim',
          role: 'IndieHacker'
        },
        {
          img: 'tc-crop-purple.png',
          alt: 'Testimonial 02',
          quote:
            '“ I want to quit working for somebody else, and build up my own dream no matter how difficult it may be.“',
          name: 'Andrew Kim',
          role: 'IndieHacker'
        },
        {
          img: 'tc-crop-purple.png',
          alt: 'Testimonial 03',
          quote:
            '“ I am grateful for every single person who cares to learn from my failures, and want to connect with you. I respond to every message!“',
          name: 'Andrew Kim',
          role: 'IndieHacker'
        },
        {
          img: 'tc-crop-purple.png',
          alt: 'Testimonial 03',
          quote:
            '“ I am grateful for every single person who cares to learn from my failures, and want to connect with you. I respond to every message!“',
          name: 'Andrew Kim',
          role: 'IndieHacker'
        }
      ]
    }
  },
  mounted() {
    if (this.autorotate) {
      this.autorotateInterval = setInterval(() => {
        this.active =
          this.active + 1 === this.items.length ? 0 : this.active + 1
      }, this.autorotateTiming)
    }
  },
  beforeDestroy() {
    this.stopAutorotate()
  },
  methods: {
    stopAutorotate() {
      clearInterval(this.autorotateInterval)
    }
  }
}
</script>
<style lang="scss">
img {
  max-width: 30rem;
}
</style>
