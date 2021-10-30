<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pt-20 md:pb-20">
        <div class="max-w-3xl mx-auto">

          <article>

            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <h1 class="h1 mb-4" data-aos="fade-up">Designing a functional workflow at home.</h1>
                <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-3">
                <!-- Author meta -->
                <div class="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                  <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-4" :src="require('~/assets/tc-crop-purple.png')" width="40" height="40" alt="Author 04" />
                  </a>
                  <div>
                    <a class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Andrew Kim</a>
                    <span class="text-gray-700"> - </span>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </div>
                <!-- Article tags -->
                <div class="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            <!-- Article image -->
            <figure class="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
              <img class="w-full" :src="require('~/assets/tc-crop-purple.png')" width="1024" height="576" alt="News single" />
            </figure>

            <!-- Article content -->
            <div class="text-lg text-gray-400">
              <p class="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. <a class="text-gray-200 underline hover:no-underline" href="#0">Ligula ullamcorper</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <strong class="font-medium text-gray-200">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong class="font-medium text-gray-200">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
              </p>
              <blockquote class="italic pl-4 border-l-2 border-gray-200 mb-8">
                Greg Korshak, a journalist for the New York Times, reported that e-commerce audience will reach 380 million worldwide this year, comprising 250 dedicated fans and 215 occasional viewers. New York Times projected that the e-commerce industry would generate $905 million in revenue in 2020.
              </blockquote>
              <p class="mb-8">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.
              </p>
              <figure class="mb-8">
                <img class="w-full" :src="require('~/assets/tc-crop-purple.png')" width="768" height="432" alt="News inner" />
                <figcaption class="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption>
              </figure>
              <h3 class="h3 mb-4 text-gray-200">Challenges of designing for masses</h3>
              <p class="mb-8">
                Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
              </p>
              <h4 class="font-medium text-gray-200 mb-8">Here’s what we discovered:</h4>
              <ul class="list-disc list-inside mb-8">
                <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                <li>Urna nunc id cursus metus aliquam eleifend.</li>
                <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                <li>Sed risus ultricies tristique nulla aliquet.</li>
              </ul>
              <p class="mb-8">
                Non nisi est sit amet facilisis magna etiam, aliquet porttitor lacus luctus accumsan tortor posuere. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Id velit ut tortor pretium viverra.
              </p>
              <p class="mb-8">
                Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
              </p>
              <h4 class="h4 text-gray-200 mb-4">1. The quick brown fox jumped over the lazy dog.</h4>
              <p class="mb-8">
                Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
              </p>
              <h4 class="h4 text-gray-200 mb-4">2. The quick brown fox jumped over the lazy dog.</h4>
              <p class="mb-8">
                Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
              </p>
              <p class="mb-8">
                Bibendum enim facilisis gravida neque convallis. Convallis posuere morbi leo urna molestie turpis in eu mi bibendum neque egestas. Est ante in <a class="text-gray-200 underline hover:no-underline" href="#0">nibh mauris cursus mattis molestie</a> aliquam purus sit amet luctus vulputate sapien nec sagittis aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi morbi tempus iaculis urna id. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
              </p>
              <h3 class="h3 mb-4 text-gray-200">Conclusions</h3>
              <p class="mb-8">
                Sapien nec sagittis aliquam malesuada orci sagittis eu volutpat odio facilisis mauris sit amet massa, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo, purus viverra accumsan in nisl nisi scelerisque. Vel pharetra vel turpis nunc eget lorem malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
              </p>
            </div>

            <!-- Article footer -->
            <footer>
              <div class="md:flex md:items-center md:justify-between text-center md:text-left">
                
                <ul class="inline-flex mt-4 md:ml-4 md:mb-0">
                  <li>
                    <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" href="#0">
                      <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                      </svg>
                    </a>
                  </li>
                  <li class="ml-4">
                    <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" href="#0">
                      <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>
                  <li class="ml-4">
                    <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" href="#0">
                      <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </article>

        </div>

        <!-- Related articles -->
        <aside class="mt-20">
          <div class="max-w-sm mx-auto md:max-w-none">

            <!-- Section title -->
            <h4 class="h4 py-6 mb-10 border-t border-b border-gray-700">Recommended posts</h4>

            <!-- Articles container -->
            <div class="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">

              <!-- 1st article -->
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
                  <!-- <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-4" :src="require('~/assets/tc-crop-purple.png')" width="40" height="40" alt="Author 05" />
                  </a> -->
                  <div class="font-medium">
                    <!-- <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Andrew Kim</a> -->
                    <!-- <span class="text-gray-700"> - </span> -->
                    <span class="text-gray-500">Jan 7, 2020</span>
                  </div>
                </footer>
              </article>

              <!-- 2nd article -->
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
                  <!-- <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-4" :src="require('~/assets/tc-crop-purple.png')" width="40" height="40" alt="Author 03" />
                  </a> -->
                  <div class="font-medium">
                    <!-- <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Andrew Kim</a>
                    <span class="text-gray-700"> - </span> -->
                    <span class="text-gray-500">Jan 4, 2020</span>
                  </div>
                </footer>
              </article>

              <!-- 3rd article -->
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
                  <!-- <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-4" :src="require('~/assets/tc-crop-purple.png')" width="40" height="40" alt="Author 06" />
                  </a> -->
                  <div class="font-medium">
                    <!-- <a class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Andrew Kim</a>
                    <span class="text-gray-700"> - </span> -->
                    <span class="text-gray-500">Jan 2, 2020</span>
                  </div>
                </footer>
              </article>

            </div>

          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSingle'
}
</script>

<style lang="">
  
</style>