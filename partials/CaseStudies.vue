<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">
            Integrated workflow designed for product teams
          </h2>
          <p class="text-xl text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>

        <!-- Articles -->
        <div
          class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none"
        >
          <!-- 1st article -->
          <article class="flex flex-col h-full" data-aos="fade-up">
            <a class="block" href="#0">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  :src="require('~/assets/news-10.jpg')"
                  width="352"
                  height="198"
                  alt="News 10"
                />
                <figcaption
                  class="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none"
                  href="#0"
                >
                  Case study
                </figcaption>
              </figure>
            </a>
            <div class="flex-grow flex flex-col h-full p-6 bg-gray-800">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                  >How to build anything</a
                >
              </h3>
              <p class="text-lg text-gray-400 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex.
              </p>
              <div>
                <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  href="#0"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 2nd article -->
          <article
            class="flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a class="block" href="#0">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  :src="require('~/assets/news-11.jpg')"
                  width="352"
                  height="198"
                  alt="News 11"
                />
                <figcaption
                  class="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none"
                  href="#0"
                >
                  Case study
                </figcaption>
              </figure>
            </a>
            <div class="flex-grow flex flex-col h-full p-6 bg-gray-800">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                  >How to build anything</a
                >
              </h3>
              <p class="text-lg text-gray-400 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex.
              </p>
              <div>
                <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  href="#0"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 3rd article -->
          <article
            class="flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a class="block" href="#0">
              <figure class="relative h-0 pb-9/16 overflow-hidden">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  :src="require('~/assets/news-12.jpg')"
                  width="352"
                  height="198"
                  alt="News 12"
                />
                <figcaption
                  class="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none"
                  href="#0"
                >
                  Case study
                </figcaption>
              </figure>
            </a>
            <div class="flex-grow flex flex-col h-full p-6 bg-gray-800">
              <h3 class="h4 mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                  >How to build anything</a
                >
              </h3>
              <p class="text-lg text-gray-400 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex.
              </p>
              <div>
                <a
                  class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
                  href="#0"
                >
                  <span class="text-sm">Learn more</span>
                  <svg
                    class="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 5H0v2h6v4l6-5-6-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudies'
}
</script>
<style lang=""></style>
