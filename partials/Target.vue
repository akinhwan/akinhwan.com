<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2" data-aos="fade-up">
            From the big picture to every tiny detail, we got you covered.
          </h2>
        </div>

        <!-- Items -->
        <div class="grid gap-20" data-aos-id-target>
          <!-- Item -->
          <div class="md:grid md:grid-cols-12 md:gap-6 items-center">
            <!-- Image -->
            <div
              class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-target]"
            >
              <img
                class="mx-auto md:max-w-none"
                :src="require('~/assets/features-02-image.png')"
                width="540"
                height="520"
                alt="Features 02"
              />
            </div>

            <!-- Content -->
            <div
              class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
            >
              <div class="md:pl-4 lg:pl-12 xl:pl-16">
                <div
                  class="font-architects-daughter text-xl text-purple-600 mb-2"
                  data-aos="fade-left"
                  data-aos-anchor="[data-aos-id-target]"
                >
                  Be the change you want to see
                </div>
                <div
                  class="mt-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-anchor="[data-aos-id-target]"
                >
                  <h4 class="h4 mb-2">
                    <span class="text-purple-600">.</span> For developers
                  </h4>
                  <p class="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div
                  class="mt-6"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor="[data-aos-id-target]"
                >
                  <h4 class="h4 mb-2">
                    <span class="text-teal-500">.</span> For designers
                  </h4>
                  <p class="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div
                  class="mt-6"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-anchor="[data-aos-id-target]"
                >
                  <h4 class="h4 mb-2">
                    <span class="text-pink-500">.</span> For teams
                  </h4>
                  <p class="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Target'
}
</script>
<style lang=""></style>
