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
                    <h1 class="h1 mb-4" data-aos="fade-up">What I enjoy listening to.</h1>
                    <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">How my tastes formed, and a smattering of the most uplifting mixes known to me.
                    </p>
                  </div>
                  <!-- Article meta -->
                  <div class="md:flex md:items-center md:justify-between mt-3">
                    <!-- Author meta -->
                    <div class="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      <a href="#0">
                        <img class="rounded-full flex-shrink-0 mr-4" :src="require('~/assets/tc-crop-purple.png')"
                          width="40" height="40" alt="Author 04" />
                      </a>
                      <div>
                        <a class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                          href="#0">Andrew Kim</a>
                        <span class="text-gray-700"> - </span>
                        <span class="text-gray-500">December 24, 2020</span>
                      </div>
                    </div>
                    <!-- Article tags -->
                    <div class="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                        <li class="m-1">
                          <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0">Music</a>
                        </li>
                        <li class="m-1">
                          <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0">Recommend</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </header>


                <!-- Article content -->
                <div class="text-lg text-gray-400">
                  <p>Although I grew up playing piano, then violin, and alto saxophone, I never sought out music on my own terms. I do remember in elementary school making a hard turn from Classical to Hip-Hop (50 Cent), and some Korean Ballads (SG Wannabee).
                    It wasn't till around high school when I picked up guitar with my main influences being The Beatles and other pop music. 
                  </p>
                  <br>
                  <p>
                    I had a musical renaissance when I left for New York, getting heavily into folk music (Bob Dylan, Fleet Foxes) and becoming a singer-songwriter. But towards the end of university, I doubled down on hip hop (A Tribe Called Quest, MF Doom, J Dilla), and all the original records that were sampled.
                  </p>
                  <br>
                  <p>Nowadays its a heavy mix between old (70s) and new producers. When I'm studying I like listening to lyricless beats or Jazz. I tend to like piano (Rhodes) mixed with some solid drum rhythms, and some Portuguese. Can't go wrong with that combo. I broadly enjoy colorful arrangements, and soulful arrangements. But enough talking, take a listen below and be sure to support these artists & DJs!</p>
                  <br>
                  <!-- <h3 class="h3 mb-4 text-gray-200">My Top Songs played on Spotify</h3> -->
                  <iframe style="margin:auto;margin-bottom:2rem;"
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1EMezxEIa5VHWn" width="300" height="380"
                    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  <div class="mb-12">
                    <h3 class="h3 mb-4 text-gray-200">Mr.Bongo</h3>

                    <iframe width="100%" height="120"
                      src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fchrisreadsubstance%2Fmr-bongo-x-the-vinyl-factory-guest-mix-brazil-45s%2F"
                      frameborder="0"></iframe>

                  </div>
                  <div class="mb-12">
                    <h3 class="h3 mb-4 text-gray-200">
                      Stones Throw Records

                    </h3>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/444398829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div
                      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                      <a href="https://soundcloud.com/stonesthrow" title="Stones Throw Records" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Stones Throw Records</a> · <a
                        href="https://soundcloud.com/stonesthrow/aaaaa" title="Kiefer - AAAAA" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Kiefer - AAAAA</a></div>

                  </div>
                  <div class="mb-12">

                    <h3 class="h3 mb-4 text-gray-200">
                      Rappcats

                    </h3>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236696102&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div
                      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                      <a href="https://soundcloud.com/rappcats" title="Rappcats" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Rappcats</a> · <a
                        href="https://soundcloud.com/rappcats/thanks-for-effects-box"
                        title="Thanks For The Effects Box J Rocc, mixed by Egon" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Thanks For The Effects Box J Rocc, mixed by
                        Egon</a></div>
                  </div>

                  <div class="mb-12">

                    <h3 class="h3 mb-4 text-gray-200">

                      WorldWide FM - Gilles Peterson
                    </h3>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/750933778&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div
                      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                      <a href="https://soundcloud.com/worldwide-fm" title="Worldwide FM" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Worldwide FM</a> · <a
                        href="https://soundcloud.com/worldwide-fm/worldwide-awards-2020-rip-mix"
                        title="Gilles Peterson: Worldwide Awards 2020 RIP Mix" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Gilles Peterson: Worldwide Awards 2020 RIP
                        Mix</a></div>
                  </div>

                  <div class="mb-12">

                    <h3 class="h3 mb-4 text-gray-200">

                      Rappamelo Madlib mixes
                    </h3>
                    <iframe width="200" height="250" src="https://www.mixcloud.com/widget/follow/?u=%2Frappamelo%2F"
                      frameborder="0"></iframe>
                  </div>

                  <!-- <div class="mb-12">

                    <h3 class="h3 mb-4 text-gray-200">

                      Bonafide Magazine
                    </h3>
                    <iframe width="100%" height="120"
                      src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBonafide_magazine%2Fbonafide-classics-souleance-42-2012%2F"
                      frameborder="0"></iframe>
                  </div> -->

                  <div class="mb-12">

                    <h3 class="h3 mb-4 text-gray-200">

                      Youtube Playlist
                    </h3>
                    <iframe 
                      src="https://www.youtube.com/embed/videoseries?list=PLCBivGwxMG-MclA6saZyIrtx0nimGYt__"
                      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>


                </div>

                <!-- Article footer -->
                <footer>
                  <div class="md:flex md:items-center md:justify-between text-center md:text-left">
                    
                    <ul class="inline-flex mt-4 md:ml-4 md:mb-0">
                      <li>
                        <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                          href="#0">
                          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                          </svg>
                        </a>
                      </li>
                      <li class="ml-4">
                        <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                          href="#0">
                          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                          </svg>
                        </a>
                      </li>
                      <li class="ml-4">
                        <a class="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                          href="#0">
                          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
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
              <article class="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <router-link to="/books" class="block mb-6">
                    <figure class="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" :src="require('~/assets/books.jpg')" width="352" height="198" alt="Books" />
                    </figure>
                  </router-link>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Books</a>
                      </li>
                      <li class="m-1">
                        <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out" href="#0">Recommend</a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="h4 mb-2">
                    <router-link to="/books" class="hover:text-gray-100 transition duration-150 ease-in-out">Books I Highly Recommend</router-link>
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">I learned a lot from these, hopefully you can apply them to your life.</p>
                <footer class="flex items-center mt-4">
                  <div class="font-medium">
                    <span class="text-gray-500">December 25, 2020</span>
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
    name: 'Music',
    components: {
      PageIllustration,
      BlogSingle,
      Newsletter
    }
  };

</script>

<style lang="">

</style>
