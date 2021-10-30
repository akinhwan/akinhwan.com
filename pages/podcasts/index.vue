<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Page content -->
    <main class="flex-grow">

      <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto">

          <article>

            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <h1 class="h1 mb-4" data-aos="fade-up">My favorite Podcasts</h1>
                <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Listen and learn from masters in their fields.</p>
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
                    <span class="text-gray-500">December 27, 2020</span>
                  </div>
                </div>
                <!-- Article tags -->
                <div class="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Podcasts</a>
                    </li>
                    <li class="m-1">
                      <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Recommend</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            <!-- Article image -->
            <!-- <figure class="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
              <img class="w-full" :src="require('~/assets/tc-crop-purple.png')" width="1024" height="576" alt="News single" />
            </figure> -->

            <!-- Article content -->
            <div class="text-lg text-gray-400">
              <p class="mb-8">
                I have my friend Will to thank for turning me on to podcasts. We got in his car, and he asked if I didn't mind finishing listening to what he had remaining of a Planet Money episode. I happily obliged, unawares of the spell it would cast on me. It was the intimacy of the host's voice, mixed with the practical information I was getting, that did me in. 
              </p>
              <p class="mb-8">
                Three years since then, and I have listened to multiple podcasts almost every single day. My tastes have changed however over time. In fact, I probably have "How I Built This" to thank for opening my eyes to the possibilities of entrepreneurship. I can distinctly remember sobbing whenever I heard some story of hardship and how the founder overcame it through sheer force of will and luck.  
              </p>
              <p class="mb-8">
                In that time my subscriptions have come and gone, and this is the final list I've settled on. So without further ado, here are my top podcast shows.
              </p>
              <!-- <blockquote class="italic pl-4 border-l-2 border-gray-200 mb-8">
                Greg Korshak, a journalist for the New York Times, reported that e-commerce audience will reach 380 million worldwide this year, comprising 250 dedicated fans and 215 occasional viewers. New York Times projected that the e-commerce industry would generate $905 million in revenue in 2020.
              </blockquote>
              <p class="mb-8">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.
              </p> -->
              <!-- <figure class="mb-8">
                <img class="w-full" :src="require('~/assets/tc-crop-purple.png')" width="768" height="432" alt="News inner" />
                <figcaption class="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption>
              </figure> -->
              <!-- <h3 class="h3 mb-4 text-gray-200">Challenges of designing for masses</h3> -->
              <!-- <p class="mb-8">
                Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
              </p> -->
              <!-- <h4 class="font-medium text-gray-200 mb-8">Here’s what we discovered:</h4>
              <ul class="list-disc list-inside mb-8">
                <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                <li>Urna nunc id cursus metus aliquam eleifend.</li>
                <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                <li>Sed risus ultricies tristique nulla aliquet.</li>
              </ul> -->
              <!-- <p class="mb-8">
                Non nisi est sit amet facilisis magna etiam, aliquet porttitor lacus luctus accumsan tortor posuere. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Id velit ut tortor pretium viverra.
              </p>
              <p class="mb-8">
                Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
              </p> -->

              <h4 class="h4 text-gray-200 mb-4">Creator Lab</h4>
              <h5 class="h5 text-gray-200">Bilal Zaidi</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN8K30NHARfg6ypmCPsy8g3frUJSw5gxjy6WNfPS6rlrhfeng" alt="">
              <p class="mb-8">
                Conversations with leading entrepreneurs, non-profit founders, award winning designers, educators, artists and everything else in between. We dig deep into their stories, have honest conversations about how they made their ideas come to life and the lessons learned along the way.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Invest Like the Best</h4>
              <h5 class="h5 text-gray-200">Patrick O'Shaughnessy</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjMd862AxGtesrbLZrkpVYk5n1r4PPjyW3e3wW9yYjnDiWP3K" alt="">
              <p class="mb-8">
                Exploring the ideas, methods, and stories of people that will help you better invest your time and money. Learn more and stay-up-to-date at InvestorFieldGuide.com
              </p>
              <h4 class="h4 text-gray-200 mb-4">The Brandon Zhang Show
</h4>
              <h5 class="h5 text-gray-200">Brandon Zhang</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfARjC7Bgu7mb5lQpvgQdn3YgVBP08a-V7rJ0gI-t-UDw4jYg" alt="">
              <p class="mb-8">
                An exploration of the toolboxes of the amazing people leveraging the internet to build audiences, foster growth, and generate wealth. The guests diverge in some areas, but converge in others, displaying the shared traits that lead to success. Every week, host Brandon Zhang aims to uncover the guest's path to success and question them on the topics they know best. Past guests have included David Perell, Jack Butcher and Anthony Pompliano.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Deep Questions
</h4>
              <h5 class="h5 text-gray-200">Cal Newport</h5>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNbiAgarhayxyaeE_QQ7G3uOXQXfYx1SgCkBGpArW_jgH5QlV-" alt="">
              <p class="mb-8">
                Cal Newport is a computer science professor and the New York Times bestselling author of Digital Minimalism and Deep Work. He writes about technology and the way it can both support and impede our efforts to live more meaningful, productive lives. In this podcast, he answers questions from his readers about work, technology, and the deep life.
              </p>
              <h4 class="h4 text-gray-200 mb-4">The NFX Podcast
</h4>
              <h5 class="h5 text-gray-200">NFX</h5>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2p7ZeY9WkIPVg12-uwyIpK6SES_RSOXbuI61JKtGuXfOle_g" alt="">
              <p class="mb-8">
                We believe creating something of true significance starts with seeing things others do not.
              </p>
              <h4 class="h4 text-gray-200 mb-4">North Star Podcast
</h4>
              <h5 class="h5 text-gray-200">David Perell</h5>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGJM5rg9b5UTGw3CwPHcyeiYB60TW5qmSd5io7AidQL2kNQwr3" alt="">
              <p class="mb-8">
                A deep dive into the stories, habits, ideas, strategies and methods that drive fulfilled people and create enormous success for them. The guests are diverse, but they share profound similarities. They’re guided by purpose, live with intense joy, learn passionately, and see the world with a unique lens. Each episode lets us soak in their hard-earned wisdom and apply it to our lives. Guests include Neil deGrasse Tyson, Seth Godin, and Tyler Cowen.
              </p>
              <h4 class="h4 text-gray-200 mb-4">The Prof G Show with Scott Galloway
</h4>
              <h5 class="h5 text-gray-200">Section 4 / Westwood One Podcast Network
</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6tZ53AHOUO5VRJZmD9RlbbPXjZx_63wdwJ9NP5XYI1OEoJ8g" alt="">
              <p class="mb-8">
                We live in a winner-take-all economy that’s bifurcating into those who are part of the innovation economy and those who aren’t. Every week best-selling author, professor and entrepreneur Scott Galloway answers questions from you (his listeners) on who’s winning and losing, and how you can get ahead. Other professors, practitioners, and entrepreneurs join Scott to contribute ideas, alternate opinions, and insights to help you thrive at work. Tune in for a no mercy, no malice take on how you can level up your game in the world of business. To submit a question, email a voice recording to OfficeHours@Section4.com.
              </p>
              <h4 class="h4 text-gray-200 mb-4">All-In
</h4>
              <h5 class="h5 text-gray-200">Chamath, Jason, Sacks & Friedberg</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZSFTl8lgNM9b2KSmGEyGCrjOXAUkLSGl8wv_394wGBRcmW3F" alt="">
              <p class="mb-8">
                Industry veterans, degenerate gamblers & besties Chamath Palihapitiya, Jason Calacanis, David Sacks & David Friedberg cover all things economic, tech, political, social & poker.
              </p>
              <h4 class="h4 text-gray-200 mb-4">The Nathan Barry Show
</h4>
              <h5 class="h5 text-gray-200">Nathan Barry: Author, Designer, Marketer
</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI0vmwisvx_F1FxBDUcFFCXRmKiDSamA_Rn7VSLhHv4Qor1fM" alt="">
              <p class="mb-8">
                Nathan Barry is a designer and author who has recently become fascinated with building and launching products. In the show he discusses marketing, self-publishing, and any other topic related to building a profitable online business and living a great life!
              </p>
              <h4 class="h4 text-gray-200 mb-4">My First Million
</h4>
              <h5 class="h5 text-gray-200">The Hustle & Shaan Puri
</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQHoUOQw49m1uxlDO7946wh-oHVti6hhY5y15DSsCFvIRrGrM" alt="">
              <p class="mb-8">
                The Hustle presents - My First Million. A podcast where we brainstorm new business ideas based on trends & opportunities we see in the market. Sometimes we have famous guests, and they do it with us.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Village Global's Venture Stories
</h4>
              <h5 class="h5 text-gray-200">Erick Torenberg</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR70v4awEa70z2dm1ADF9JCcwL1lbucAJ9VvHblj2E_esBOd_i7" alt="">
              <p class="mb-8">
                Village Global's Venture Stories takes you inside the world of venture capital and technology, featuring enlightening interviews with entrepreneurs, investors and tech industry leaders. The podcast is hosted by Village Global partner and co-founder Erik Torenberg. Check us out on the web at villageglobal.vc/podcast for more.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Acquired</h4>
              <h5 class="h5 text-gray-200">Ben Gilbert and David Rosenthal
</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfXp-aZBbayD4m4VL2zLKjGGO_0_8LmIIa8lOcTZJChwGN4BS-" alt="">
              <p class="mb-8">
                Every company has a story. Learn the playbooks that built the world’s greatest companies — and how you can apply them as a founder, operator, or investor.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Indie Hackers
</h4>
              <h5 class="h5 text-gray-200">Courtland Allen</h5>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqOEKW8RsOiLbLQCjLEhDg1j46YvTZOxFI5PVgQ19qEbNQDfo" alt="">
              <p class="mb-8">
                Courtland Allen interviews the ambitious indie hackers who are turning their ideas and side projects into profitable online businesses. Explore the latest strategies and tools founders are using to discover new trends, escape the 9-to-5 grind, and create their own personal revenue-generating machines. The future is indie!
              </p>
              <h4 class="h4 text-gray-200 mb-4">The Knowledge Project with Shane Parrish
</h4>
              <h5 class="h5 text-gray-200">Farnam Street
</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C-OrXpcDJyIDq5KkeSgxZrj1BMZ8ZiYO_9oNxCfq1PsvYX4v" alt="">
              <p class="mb-8">
                Master the best of what other people have already figured out. Learn more at https://fs.blog/podcast
              </p>
              <h4 class="h4 text-gray-200 mb-4">Akimbo: A Podcast from Seth Godin
</h4>
              <h5 class="h5 text-gray-200">Seth Godin</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnDJ_iQSdATR3Eku0ttpLMx4z1KQvjFbTrS0dybcQSPRFj7Tk5" alt="">
              <p class="mb-8">
                Akimbo is an ancient word, from the bend in the river or the bend in an archer's bow. It's become a symbol for strength, a posture of possibility, the idea that when we stand tall, arms bent, looking right at it, we can make a difference. Akimbo's a podcast about our culture and about how we can change it. About seeing what's happening and choosing to do something. The culture is real, but it can be changed. You can bend it.
              </p>
              <h4 class="h4 text-gray-200 mb-4">Conversations with Tyler
</h4>
              <h5 class="h5 text-gray-200">Mercatus Center at George Mason University
</h5>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThn4OfQiphVvcZqiMzoYj0PzldrBh5GTX1csJdohAAZt5T4ggQ" alt="">
              <p class="mb-8">
                Tyler Cowen engages today’s deepest thinkers in wide-ranging explorations of their work, the world, and everything in between. New conversations every other Wednesday. Subscribe wherever you get your podcasts.
              </p>
              <h4 class="h4 text-gray-200 mb-4">a16z Podcast
</h4>
              <h5 class="h5 text-gray-200">Andreessen Horowitz
</h5>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRE266qFcJsd4KqNuXT4JnL-5_AJx6IFggWtyc9fwAahKvHWXg" alt="">
              <p class="mb-8">
                The a16z Podcast discusses tech and culture trends, news, and the future – especially as ‘software eats the world’. It features industry experts, business leaders, and other interesting thinkers and voices from around the world. This podcast is produced by Andreessen Horowitz (aka “a16z”), a Silicon Valley-based venture capital firm. Multiple episodes are released every week; visit a16z.com for more details and to sign up for our newsletters and other content as well!
              </p>
              <h4 class="h4 text-gray-200 mb-4">The Tim Ferriss Show
</h4>
              <h5 class="h5 text-gray-200">Tim Ferriss: Bestselling Author, Human Guinea Pig
</h5>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNrO952e8eFWXNGTVyxDtX5q9GD3d0q3WZOD_opgWrvjI7GrM" alt="">
              <p class="mb-8">
                Tim Ferriss is a self-experimenter and bestselling author, best known for The 4-Hour Workweek, which has been translated into 40+ languages. Newsweek calls him "the world's best human guinea pig," and The New York Times calls him "a cross between Jack Welch and a Buddhist monk." In this show, he deconstructs world-class performers from eclectic areas (investing, chess, pro sports, etc.), digging deep to find the tools, tactics, and tricks that listeners can use.
              </p>

              <h4 class="h4 text-gray-200 mb-4">Product ideas
</h4>
              <h5 class="h5 text-gray-200">Jakob Greenfeld
</h5>
              <!-- <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNrO952e8eFWXNGTVyxDtX5q9GD3d0q3WZOD_opgWrvjI7GrM" alt=""> -->
              <iframe src="https://open.spotify.com/embed-podcast/episode/0zqsD9V7zLnMVkMjgHaD9t" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <p class="mb-8">
                Here's the pitch I send out to people I want to talk to:

I host a podcast inspired by the My first Million Podcast (basically just as an excuse to talk about cool product ideas). Would you be interested in joining me for an episode?

The idea is that we schedule a Zoom call, both bring a list with product ideas and then discuss them for an hour or so.
              </p>
              <!-- <h4 class="h4 text-gray-200 mb-4">ddddddddddddd</h4>
              <h5 class="h5 text-gray-200">ssssssssssssssssssssssssss</h5>
              <img src="fffffffff" alt="">
              <p class="mb-8">
                ccccccccccccccccccccccccccccccccc
              </p> -->

              <h3 class="h3 mb-4 text-gray-200">Conclusions</h3>
              <p class="mb-8">
                This cacophony of smart intelligent opinionated voices is what forms my braintrust.
                One-way conversations of course, which is why I've started taking notes while listening when possible.
                Heavily tilted towards entrepreneurship, business, venture capital, technology, and economics.

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
  name: 'Podcasts',
  components: {
    PageIllustration,
    BlogSingle,
    Newsletter
  }
};
</script>

<style lang="">
  
</style>