<template>
  <section id="testimonials">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">It's all love.</h2>
          <p class="text-xl text-gray-400">
            I'm humbled and grateful for the people I've been able to work with
            in the past. Validation from my peers and clients pushes me to be
            better.
          </p>
        </div>

        <!-- Testimonials -->
        <div
          class="
            max-w-sm
            mx-auto
            grid
            gap-8
            lg:grid-cols-3 lg:gap-6
            items-start
            lg:max-w-none
          "
        >
          <!-- 1st testimonial -->
          <div class="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div>
              <div class="relative inline-flex flex-col mb-4">
                <img
                  class="rounded-full"
                  :src="require('~/assets/ben-greiner.jpg')"
                  width="96"
                  height="96"
                  alt="Testimonial 01"
                />
                <svg
                  class="
                    absolute
                    top-0
                    right-0
                    -mr-3
                    w-6
                    h-5
                    fill-current
                    text-purple-600
                  "
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  />
                </svg>
              </div>
            </div>
            <blockquote class="text-md text-gray-400 flex-grow">
              Andrew is a very <b class="text-gray-300">creative</b> and
              <b class="text-gray-300">precise</b> person. We worked together
              efficiently on a project and the final result was spot on. I am
              lucky to have met Andrew and his skills with user experience and
              working with my feedback are great assets that will prove his
              success in the UX/UI development world in the future.
            </blockquote>
            <div
              class="
                text-gray-700
                font-medium
                mt-6
                pt-5
                border-t border-gray-700
              "
            >
              <cite class="text-gray-200 not-italic">Ben Greiner</cite> -
              <a
                class="
                  text-purple-600
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="https://thetadproject.org/"
                >CEO, TalkAboutDepression.org</a
              >
            </div>
          </div>

          <!-- 2nd testimonial -->
          <div
            class="flex flex-col h-full p-6 bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <div class="relative inline-flex flex-col mb-4">
                <img
                  class="rounded-full"
                  :src="require('~/assets/mellena-haile.jpg')"
                  width="96"
                  height="96"
                  alt="Testimonial 02"
                />
                <svg
                  class="
                    absolute
                    top-0
                    right-0
                    -mr-3
                    w-6
                    h-5
                    fill-current
                    text-purple-600
                  "
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  />
                </svg>
              </div>
            </div>
            <blockquote class="text-md text-gray-400 flex-grow">
              When thinking about product design, Andrew has a unique ability to
              put himself in the user’s shoes and think about the experience
              lifecycle. Andrew also takes time to understand what his client is
              looking for. I’m confident Andrew’s
              <b class="text-gray-300">easy going</b> personality and
              <b class="text-gray-300">dedication</b> to creating beautiful
              products will win over many more clients in the future.
            </blockquote>
            <div
              class="
                text-gray-700
                font-medium
                mt-6
                pt-5
                border-t border-gray-700
              "
            >
              <cite class="text-gray-200 not-italic">Mellena Haile</cite> -
              <a
                class="
                  text-purple-600
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="https://telliscope.com/"
                >CEO, Telliscope</a
              >
            </div>
          </div>

          <!-- 3rd testimonial -->
          <div
            class="flex flex-col h-full p-6 bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <div class="relative inline-flex flex-col mb-4">
                <img
                  class="rounded-full"
                  :src="require('~/assets/samira-sabulis.jpg')"
                  width="96"
                  height="96"
                  alt="Testimonial 03"
                />
                <svg
                  class="
                    absolute
                    top-0
                    right-0
                    -mr-3
                    w-6
                    h-5
                    fill-current
                    text-purple-600
                  "
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  />
                </svg>
              </div>
            </div>
            <blockquote class="text-md text-gray-400 flex-grow">
              If you want a creative thinker, who utilizes time
              <b class="text-gray-300">efficiently</b> and delivers a superb
              result, that is Andrew. Andrew was always
              <b class="text-gray-300">respectful, kind and patient</b> and he
              knew exactly what needed to be done and how. We want to work with
              Andrew again in the future as we believe he will contribute so
              much more to our company.
            </blockquote>
            <div
              class="
                text-gray-700
                font-medium
                mt-6
                pt-5
                border-t border-gray-700
              "
            >
              <cite class="text-gray-200 not-italic">Samira Sabulis</cite> -
              <a
                class="
                  text-purple-600
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="https://www.crunchbase.com/organization/tagazu"
                >Co-founder of Tagazu</a
              >
            </div>
          </div>

          <!-- 4th testimonial -->
          <div
            class="flex flex-col h-full p-6 bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <div class="relative inline-flex flex-col mb-4">
                <img
                  class="rounded-full"
                  :src="require('~/assets/tony.jpg')"
                  width="96"
                  height="96"
                  alt="Testimonial 03"
                />
                <svg
                  class="
                    absolute
                    top-0
                    right-0
                    -mr-3
                    w-6
                    h-5
                    fill-current
                    text-purple-600
                  "
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  />
                </svg>
              </div>
            </div>
            <blockquote class="text-md text-gray-400 flex-grow">
              Andrew is a
              <b class="text-gray-300">thoughtful and creative</b> person that
              has a knack for <b class="text-gray-300">user research</b>. We
              sponsored a design hackathon and his team and insights helped
              create a solution that was well designed and took into account the
              <b class="text-gray-300">customer experience</b>. He would be an
              asset to any company.
            </blockquote>
            <div
              class="
                text-gray-700
                font-medium
                mt-6
                pt-5
                border-t border-gray-700
              "
            >
              <cite class="text-gray-200 not-italic">Tony Ma</cite> -
              <a
                class="
                  text-purple-600
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="https://benetech.org/"
                >CEO of Benetech</a
              >
            </div>
          </div>

          <!-- 5th testimonial -->
          <div
            class="flex flex-col h-full p-6 bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <div class="relative inline-flex flex-col mb-4">
                <img
                  class="rounded-full"
                  :src="require('~/assets/jessica.jpg')"
                  width="96"
                  height="96"
                  alt="Testimonial 03"
                />
                <svg
                  class="
                    absolute
                    top-0
                    right-0
                    -mr-3
                    w-6
                    h-5
                    fill-current
                    text-purple-600
                  "
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  />
                </svg>
              </div>
            </div>
            <blockquote class="text-md text-gray-400 flex-grow">
              Andrew is an excellent, productive member of the team. He asks
              good questions that help to clarify acceptance criteria and ensure
              that we are delivering the best solution possible. He is our
              <b class="text-gray-300">go-to person for design and mockups</b>;
              he does a great job of researching best practices as well as
              providing options to
              <b class="text-gray-300"
                >help us solve user problems and provide a great experience</b
              >. He is easy to work with thanks to his
              <b class="text-gray-300"
                >positive attitude and communication skills</b
              >
              and I am happy to have him on our team!
            </blockquote>
            <div
              class="
                text-gray-700
                font-medium
                mt-6
                pt-5
                border-t border-gray-700
              "
            >
              <cite class="text-gray-200 not-italic">Jessica Chan</cite> -
              <a
                class="
                  text-purple-600
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="https://www.ncbi.nlm.nih.gov/"
                >National Center for Biotechnology Information</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
}
</script>
<style lang="">
</style>