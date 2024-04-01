<template>
  <section id="work">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
          <h2
            class="h2 mb-4"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-tabs]"
          >
            Here's some of my work.
          </h2>
          <p
            class="text-xl text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-tabs]"
          >
            <!-- These are just quick overviews, click to learn more on each card. -->
            I couldn't fit everything here, so reach out to see more.
          </p>
        </div>

        <!-- Section content -->
        <div>
          <!-- Tabs buttons -->
          <div
            class="flex flex-wrap justify-center -m-2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-tabs]"
          >
            <button
              :class="{ 'opacity-50': tab !== '1' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '1'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Pubmed.gov</span
              >
            </button>

            <button
              :class="{ 'opacity-50': tab !== '2' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '2'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Memotrix</span
              >
            </button>

            <button
              :class="{ 'opacity-50': tab !== '3' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '3'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Soheco.org</span
              >
            </button>

            <button
              :class="{ 'opacity-50': tab !== '4' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '4'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Memotrix</span
              >
            </button>

            <button
              :class="{ 'opacity-50': tab !== '5' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '5'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Connect 4</span
              >
            </button>

            <button
              :class="{ 'opacity-50': tab !== '6' }"
              class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500"
              @click="tab = '6'"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-600 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z"
                />
              </svg>
              <span
                class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out"
                >Schulte Table</span
              >
            </button>

            <!-- <button :class="{ 'opacity-50': tab !== '5' }" class="flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500" @click="tab = '5'">
              <svg class="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
              </svg>
              <span class="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Quick action</span>
            </button> -->
          </div>

          <!-- Tabs items -->
          <div class="relative flex flex-col mt-16" data-aos="fade-up">
            <!-- Item 1 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '1'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/pubmed-home.png')"
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Pubmed.gov</h4>
                    <p class="text-lg text-gray-400">
                      The flagship public site by the National Center for
                      Biotechnology Information (NIH/NLM/NCBI). Serving over 4
                      million DAU with 30 million + citations for biomedical
                      literature.
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                      href="https://www.pubmed.gov"
                    >
                      <span class="text-sm">Visit this site</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- Item 2 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '3'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/soheco.png')"
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Soheco.org</h4>
                    <p class="text-lg text-gray-400">
                      Engaging seniors in a reflective conversation about the
                      benefits of social connections. Visitors can receive
                      personalized resources based on their responses and
                      preferences.
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="https://soheco-org.netlify.app/"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      <span class="text-sm">Visit this site</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- Item 3 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '2'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/memotrix.png')"
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Memotrix</h4>
                    <p class="text-lg text-gray-400">
                      Inspired by one of the games in the Lumosity app, I
                      reverse engineered the game and built it from scratch.
                      Test your memory and see how many levels you can get
                      through!
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                      href="https://memotrix.netlify.app/"
                    >
                      <span class="text-sm">Play this game</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- Item 4 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '4'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/memotrix.png')"
                      width="516"
                      height="387"
                      alt="Tabs 04"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Memotrix</h4>
                    <p class="text-lg text-gray-400">
                      A web game inspired by a lumosity style memory game. See how many levels you can get to and add your name to the leaderboard!
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="https://memotrix.netlify.app/"
                    >
                      <span class="text-sm">Visit this site</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- Item 5 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '5'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/connect-4-vercel.png')"
                      width="516"
                      height="387"
                      alt="Tabs 05"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Connect 4</h4>
                    <p class="text-lg text-gray-400">
                      My own react implementation of the classic game Connect 4.
                      Algorithm for calculating winning state is original to me.
                      Play against a friend on your phone, anywhere you go!
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="https://connect-4-beta.vercel.app/"
                    >
                      <span class="text-sm">Visit this site</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- Item 6 -->
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '6'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      class="w-full h-full object-cover"
                      :src="require('~/assets/schulte.png')"
                      width="516"
                      height="387"
                      alt="Tabs 06"
                    />
                  </figure>
                  <div
                    class="relative bg-gray-800 py-8 md:py-16 px-6 lg:max-w-xl md:ml-auto"
                  >
                    <h4 class="h4 mb-2">Schulte Table</h4>
                    <p class="text-lg text-gray-400">
                      My implementation of a schulte table test. Compete with
                      others, and try to get the fastest time!
                    </p>
                    <a
                      class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                      href="https://schultetable.netlify.app"
                    >
                      <span class="text-sm">Test your peripheral vision</span>
                      <svg
                        class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition>

            <!-- MORE -->
            <!-- https://formation-flying.netlify.app/ -->
            <!-- https://posterday.netlify.app/ -->
            <!-- https://3dpinballrecall.netlify.app/ -->
            <!-- <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full" v-show="tab === '5'">
                <article class="relative max-w-md mx-auto md:max-w-none">
                  <figure class="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img class="w-full h-full object-cover" :src="require('~/assets/tabs-image-01.jpg')" width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div class="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 class="h4 mb-2">Optimize and scale, easy to start</h4>
                    <p class="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span class="text-sm">Learn more</span>
                      <svg class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </transition> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tabs',
  data: function () {
    return {
      tab: '1',
    }
  },
}
</script>
<style lang="">
</style>