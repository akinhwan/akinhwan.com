<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Page content -->
    <main class="flex-grow">

      <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pt-20 md:pb-20">
        <div class="max-w-3xl mx-auto">

          <article>

            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <h1 class="h1 mb-4" data-aos="fade-up">My top Amazon purchases</h1>
                <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">The best things I've found deals on Amazon.</p>
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
                    <span class="text-gray-500">January 2, 2020</span>
                      </div>
                    </div>
                    <!-- Article tags -->
                    <div class="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                        <li class="m-1">
                          <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0">Products</a>
                        </li>
                        <li class="m-1">
                          <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0">Recommend</a>
                        </li>
                  </ul>
                </div>
              </div>
            </header>

            <!-- Article image -->
            <!-- <figure class="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
              <img class="w-full" :src="require('~/assets/mybooks.jpg')" width="1024" height="576" alt="News single" />
            </figure> -->
             <p class="mb-8  text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. <a class="text-gray-200 underline hover:no-underline" href="#0">Ligula ullamcorper</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <strong class="font-medium text-gray-200">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong class="font-medium text-gray-200">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
              </p>
              
            <a target="_blank"  href="https://www.amazon.com/gp/product/B08BJJT8HH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08BJJT8HH&linkCode=as2&tag=akinhwan07-20&linkId=55e4ad7ac81432260859a7227f9840a2"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B08BJJT8HH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B08BJJT8HH" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B082KBCN3X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B082KBCN3X&linkCode=as2&tag=akinhwan07-20&linkId=8afee5f822b350ce052843f62688f005"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B082KBCN3X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B082KBCN3X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B07NZ1YQ78/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07NZ1YQ78&linkCode=as2&tag=akinhwan07-20&linkId=3d795d5beffbd29edde3d56e24a00d9b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07NZ1YQ78&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B07NZ1YQ78" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B08LKK939M/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08LKK939M&linkCode=as2&tag=akinhwan07-20&linkId=aeca43143509e805cd8647ac0d53d7fa"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B08LKK939M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B08LKK939M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B07X9VG6ZJ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07X9VG6ZJ&linkCode=as2&tag=akinhwan07-20&linkId=15e94ce87ca8396a3e188db04ef70149"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07X9VG6ZJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B07X9VG6ZJ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B07TWGMVRS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07TWGMVRS&linkCode=as2&tag=akinhwan07-20&linkId=0eb5cb6ca54e4d2ed68194b34a91d4b7"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07TWGMVRS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B07TWGMVRS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B01KFYMFYE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01KFYMFYE&linkCode=as2&tag=akinhwan07-20&linkId=119f8bf2e4ef3e22b750696cec0b28d6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01KFYMFYE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B01KFYMFYE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B00WJJJX2Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00WJJJX2Q&linkCode=as2&tag=akinhwan07-20&linkId=5986b05478ea42bd7cc6e372c146b445"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00WJJJX2Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B00WJJJX2Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a target="_blank"  href="https://www.amazon.com/gp/product/B000ZMAL2U/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000ZMAL2U&linkCode=as2&tag=akinhwan07-20&linkId=ac2b79df0147f47b89c045d0fb464f75"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000ZMAL2U&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B000ZMAL2U" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <!-- Article content -->
            <!-- <div class="text-lg text-gray-400"> -->
              <!-- <blockquote class="italic pl-4 border-l-2 border-gray-200 mb-8">
                "The reading of all good books is like conversation with the finest minds" Rene Descartes
                "Nothing has yet been said that's not been said before" Publius Terentius
                
              </blockquote> -->
              <!-- <p class="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. <a class="text-gray-200 underline hover:no-underline" href="#0">Ligula ullamcorper</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <strong class="font-medium text-gray-200">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong class="font-medium text-gray-200">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
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
                  <router-link to="/podcasts" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/podcast.jpg')" width="352" height="198" alt="Podcasts" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Podcasts</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out" href="#0">Recommend</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/podcasts" class="hover:text-gray-100 transition duration-150 ease-in-out">My favorite Podcasts</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Listen and learn from masters in their fields.</p>
                <footer class="flex items-center mt-4">
                  <div class="font-medium">
                    <span class="text-gray-500">December 25, 2020</span>
                  </div>
                </footer>
              </article>

              <!-- 2nd article -->
              <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <router-link to="/music" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/music.jpg')" width="352" height="198" alt="Music" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Music</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out" href="#0">Recommend</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/music" class="hover:text-gray-100 transition duration-150 ease-in-out">What I enjoy listening to</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">How my tastes formed, and a smattering of the most uplifting mixes known to me.</p>
                <footer class="flex items-center mt-4">
                  <div class="font-medium">
                    <span class="text-gray-500">December 24, 2020</span>
                  </div>
                </footer>
              </article>

              <!-- 3rd article -->
              <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
                <header>
                  <router-link to="/blog/2020" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/calendar.jpg')" width="352" height="198" alt="Calendar" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out" href="#0">Review</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out" href="#0">Plan</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/blog/2020" class="hover:text-gray-100 transition duration-150 ease-in-out">2020 Review & 2021 Plan</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Reflecting on the past year, and envisioning the next.</p>
                <footer class="flex items-center mt-4">
                  <div class="font-medium">
                    <span class="text-gray-500">December 24, 2020</span>
                  </div>
                </footer>
              </article>

            </div>

          </div>
        </aside>

      </div>
    </div>
  </section>
      <Newsletter />

    </main>
  </div>
</template>

<script>
import PageIllustration from '~/partials/PageIllustration.vue'
import BlogSingle from '~/partials/BlogSingle.vue'
import Newsletter from '~/partials/Newsletter.vue'

export default {
  name: 'Amazon',
  components: {
    PageIllustration,
    BlogSingle,
    Newsletter
  }
};
</script>

<style lang="">
  
</style>