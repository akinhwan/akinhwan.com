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
                <h1 class="h1 mb-4" data-aos="fade-up">Books I Highly Recommend</h1>
                <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">I learned a lot from these, hopefully you can apply them to your life. In no particular order...</p>
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
                    <span class="text-gray-500">December 24, 2020</span>
                      </div>
                    </div>
                    <!-- Article tags -->
                    <div class="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                        <li class="m-1">
                          <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0">Books</a>
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

            <h4 class="h4 text-gray-200 mb-2">Atomic Habits</h4>
            <h5 class="h5 text-gray-200 mb-2">James Clear</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0735211299/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0735211299&linkCode=as2&tag=akinhwan07-20&linkId=9da8c5f31f43f3a02804cec0192b0263"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0735211299&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0735211299" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Bhagavad Gita</h4>
            <h5 class="h5 text-gray-200 mb-2">Translated by Eknath Easwaran</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1586380192/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1586380192&linkCode=as2&tag=akinhwan07-20&linkId=0b454985b343655471d2c83acdb52e0d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1586380192&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1586380192" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Courage to be Disliked</h4>
            <h5 class="h5 text-gray-200 mb-2">Ichiro Kishimi and Fumitake Koga</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1501197274/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1501197274&linkCode=as2&tag=akinhwan07-20&linkId=4dbd7a3f900585a135dc369b95974faf"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1501197274&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1501197274" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Never Split the Difference</h4>
            <h5 class="h5 text-gray-200 mb-2">Chris Voss</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0062407805/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062407805&linkCode=as2&tag=akinhwan07-20&linkId=19acfaa8889d5454c583a12f1077c9d5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0062407805&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0062407805" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Influence</h4>
            <h5 class="h5 text-gray-200 mb-2">Robert Cialdini</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/006124189X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=006124189X&linkCode=as2&tag=akinhwan07-20&linkId=e98eb2be400279b31b0d331ef1f753a9"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=006124189X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=006124189X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">How Innovation Works</h4>
            <h5 class="h5 text-gray-200 mb-2">Matt Ridley</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0062916599/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062916599&linkCode=as2&tag=akinhwan07-20&linkId=0a838eccfe46cb105cfad213840bd4e0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0062916599&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0062916599" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Decisive</h4>
            <h5 class="h5 text-gray-200 mb-2">Chip & Dan Heath</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/B017MYIB16/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B017MYIB16&linkCode=as2&tag=akinhwan07-20&linkId=9d9d83aa3db4178934fef1bfe7b7a791"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B017MYIB16&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=B017MYIB16" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Innovation Stack</h4>
            <h5 class="h5 text-gray-200 mb-2">Jim McKelvey</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0593086732/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0593086732&linkCode=as2&tag=akinhwan07-20&linkId=1337255dd2ec2ec3c13d6b50a463213f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0593086732&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0593086732" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Psychology of Money</h4>
            <h5 class="h5 text-gray-200 mb-2">Morgan Housel</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0857197681/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0857197681&linkCode=as2&tag=akinhwan07-20&linkId=3ab1a76a2660a04eae2533fb4d15033c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0857197681&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0857197681" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Direct Truth</h4>
            <h5 class="h5 text-gray-200 mb-2">Kapil Gupta</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1724334417/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1724334417&linkCode=as2&tag=akinhwan07-20&linkId=e9cd9b59e57f756c68d3383c0cd6d1a4"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1724334417&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1724334417" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            
            <br>
            <h4 class="h4 text-gray-200 mb-2">The Practice</h4>
            <h5 class="h5 text-gray-200 mb-2">Seth Godin</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0593328973/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0593328973&linkCode=as2&tag=akinhwan07-20&linkId=93d50cabbcb3097a94b0da5969113dd0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0593328973&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0593328973" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Rediscovering Life: Awaken to Reality</h4>
            <h5 class="h5 text-gray-200 mb-2">Anthony de Mello</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/030798494X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=030798494X&linkCode=as2&tag=akinhwan07-20&linkId=337b5e76630914f3ec3a34c38798b826"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=030798494X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=030798494X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">All I Want To Know Is Where I'm Going To Die So I'll Never Go There: Buffett & Munger – A Study in Simplicity and Uncommon, Common Sense </h4>
            <h5 class="h5 text-gray-200 mb-2">Peter Bevelin</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1681840480/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1681840480&linkCode=as2&tag=akinhwan07-20&linkId=5324aa0feba7f8cd16369ca17825f426"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1681840480&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1681840480" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers</h4>
            <h5 class="h5 text-gray-200 mb-2">Ben Horowitz</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0062273205/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062273205&linkCode=as2&tag=akinhwan07-20&linkId=4e846971def852fb30ba425e5d934f64"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0062273205&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=0062273205" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Indistractable: How to Control Your Attention and Choose Your Life</h4>
            <h5 class="h5 text-gray-200 mb-2">Nir Eyal</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/194883653X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=194883653X&linkCode=as2&tag=akinhwan07-20&linkId=421bafe4f1bce6666b032b269a95d1e0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=194883653X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=194883653X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Hooked: How to Build Habit-Forming Products </h4>
            <h5 class="h5 text-gray-200 mb-2">Nir Eyal</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1591847788/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1591847788&linkCode=as2&tag=akinhwan07-20&linkId=efd1cb8adb4594f3a85d8b2701802008"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1591847788&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1591847788" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">The Almanack of Naval Ravikant</h4>
            <h5 class="h5 text-gray-200 mb-2">Eric Jorgensen</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1544514212/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1544514212&linkCode=as2&tag=akinhwan07-20&linkId=7613bf314a4e626af1d3e1ed88828d45"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1544514212&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1544514212" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <br>
            <h4 class="h4 text-gray-200 mb-2">Principles</h4>
            <h5 class="h5 text-gray-200 mb-2">Ray Dalio</h5>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1501124021/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1501124021&linkCode=as2&tag=akinhwan07-20&linkId=0f7f1ff076f8f29e6acff23610c9fe22"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1501124021&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=akinhwan07-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=akinhwan07-20&l=am2&o=1&a=1501124021" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            
            <!-- Article content -->
            <div class="text-lg text-gray-400">
              <blockquote class="italic pl-4 border-l-2 border-gray-200 mb-8">
                "The reading of all good books is like conversation with the finest minds" Rene Descartes
                "Nothing has yet been said that's not been said before" Publius Terentius
                
              </blockquote>
              <!-- <p class="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. <a class="text-gray-200 underline hover:no-underline" href="#0">Ligula ullamcorper</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem <strong class="font-medium text-gray-200">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. <strong class="font-medium text-gray-200">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
              </p>
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
              </p> -->
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
  name: 'Books',
  components: {
    PageIllustration,
    BlogSingle,
    Newsletter
  }
};
</script>

<style lang="">
  
</style>