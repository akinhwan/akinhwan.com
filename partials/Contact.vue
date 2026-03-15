<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Page content -->
    <main class="flex-grow">
      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-12 pb-12 md:pb-20 md:pt-20">
            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="fade-up">Leave a comment</h1>
              <p
                class="text-xl text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Feedback? Questions? Critiques?
              </p>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="email"
                    >Email <span class="text-red-600">*</span></label
                  >
                  <input
                    id="email"
                    type="email"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="comment"
                    >Comment<span class="text-red-600">*</span></label
                  >
                  <textarea
                    id="comment"
                    rows="4"
                    class="form-textarea w-full text-gray-300"
                    placeholder="Write your comment"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button
                    class="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Related articles -->
      <!-- <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <aside class="mt-20">
          <div class="max-w-sm mx-auto md:max-w-none">

            <h4 class="h4 py-6 mb-10 border-t border-b border-gray-700">Recommended posts</h4>

            
            <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

              <article class="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <router-link to="/blog-post" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/tc-crop-purple.png')" width="352" height="198" alt="News 04" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out" href="#0">Culture</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">The quick brown fox jumped over the lazy dog.</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer class="flex items-center mt-4">
                
                  <div class="font-medium">
                    <span class="text-gray-500">Jan 7, 2020</span>
                  </div>
                </footer>
              </article>

              <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <router-link to="/blog-post" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/tc-crop-purple.png')" width="352" height="198" alt="News 05" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">The quick brown fox jumped over the lazy dog.</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer class="flex items-center mt-4">
   
                  <div class="font-medium">
                    <span class="text-gray-500">Jan 4, 2020</span>
                  </div>
                </footer>
              </article>

              <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
                <header>
                  <router-link to="/blog-post" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/tc-crop-purple.png')" width="352" height="198" alt="News 06" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out" href="#0">Design</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out" href="#0">Tutorials and articles</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:text-gray-100 transition duration-150 ease-in-out">The quick brown fox jumped over the lazy dog.</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer class="flex items-center mt-4">
                 
                  <div class="font-medium">
                   
                    <span class="text-gray-500">Jan 2, 2020</span>
                  </div>
                </footer>
              </article>

            </div>

          </div>
        </aside>
      </div>
      </div> -->

      <Newsletter />
    </main>
  </div>
</template>

<script>
import Newsletter from './../partials/Newsletter.vue'

export default {
  name: 'Contact',
  components: {
    Newsletter
  }
}
</script>
