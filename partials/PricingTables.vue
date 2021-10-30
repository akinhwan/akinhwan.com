<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pt-20 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h1 class="h1 mb-4" data-aos="fade-up">Simple, transparent pricing</h1>
          <p class="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Get the Open PRO plan that fits your needs at a special introductory price.</p>
        </div>

        <!-- Pricing tables -->
        <div>

          <!-- Pricing toggle -->
          <div class="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
            <div class="inline-flex items-center">
              <div class="text-gray-500 font-medium mr-3">Billed Monthly</div>
              <div class="form-switch focus-within:shadow-outline">
                <input type="checkbox" name="pricing-toggle" id="pricing-toggle" class="sr-only" v-model="value" />
                <label class="bg-gray-600" for="pricing-toggle">
                  <span class="bg-gray-200" aria-hidden="true"></span>
                  <span class="sr-only">Enable to see yearly prices</span>
                </label>
              </div>
              <div class="text-gray-500 font-medium ml-3">Billed Annually</div>
            </div>
          </div>

          <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <!-- Pricing table 1 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-purple-600 mb-1">Essential</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl md:text-3xl font-medium text-gray-400">{{priceOutput.plan1[value][0]}}</span>
                  <span class="h2">{{priceOutput.plan1[value][1]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan1[value][2]}}</span>
                </div>
                <div class="text-gray-400">Better insights for growing businesses that want more customers.</div>
              </div>
              <div class="font-medium mb-3">Features include:</div>
              <ul class="text-gray-400 -mb-3 flex-grow">
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>50 Placeholder text commonly</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
              <div class="border border-gray-700 p-3 mt-6">
                <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a>
              </div>
            </div>

            <!-- Pricing table 2 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div class="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Most Popular</div>
              </div>
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-purple-600 mb-1">Premium</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl md:text-3xl font-medium text-gray-400">{{priceOutput.plan2[value][0]}}</span>
                  <span class="h2">{{priceOutput.plan2[value][1]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan2[value][2]}}</span>
                </div>
                <div class="text-gray-400">Better insights for growing businesses that want more customers.</div>
              </div>
              <div class="font-medium mb-3">All features of Essential plus:</div>
              <ul class="text-gray-400 -mb-3 flex-grow">
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>100 placeholder text commonly</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Placeholder text commonly used</span>
                </li>
              </ul>
              <div class="border border-gray-700 p-3 mt-6">
                <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a>
              </div>
            </div>

            <!-- Pricing table 3 -->
            <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-purple-600 mb-1">Premium</div>
                <div class="inline-flex items-baseline mb-2">
                  <span class="text-2xl md:text-3xl font-medium text-gray-400">{{priceOutput.plan3[value][0]}}</span>
                  <span class="h2">{{priceOutput.plan3[value][1]}}</span>
                  <span class="font-medium text-gray-400">{{priceOutput.plan3[value][2]}}</span>
                </div>
                <div class="text-gray-400">Better insights for growing businesses that want more customers.</div>
              </div>
              <div class="font-medium mb-3">All features of Essential plus:</div>
              <ul class="text-gray-400 -mb-3 flex-grow">
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>200 placeholder text commonly</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Voluptate velit esse cillum</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg class="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Placeholder text commonly used</span>
                </li>
              </ul>
              <div class="border border-gray-700 p-3 mt-6">
                <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a>
              </div>
            </div>

          </div>

          <!-- Bottom infobox -->
          <div class="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
            <div class="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">Expecting more than 1000 Active End Users?</div>
            <div>
              <a class="btn-sm text-white bg-purple-600 hover:bg-purple-700" href="#0">Contact us</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingTables',
  data: function () {
    return {
      value: true,
      priceOutput: {
        plan1: {
          false: ['$', '55', '/mo'],
          true: ['$', '49', '/mo']
        },
        plan2: {
          false: ['$', '85', '/mo'],
          true: ['$', '79', '/mo']
        },
        plan3: {
          false: ['$', '135', '/mo'],
          true: ['$', '129', '/mo']
        }        
      }
    }
  },  
}
</script>
<style lang="">
  
</style>