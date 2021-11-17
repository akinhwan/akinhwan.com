<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- CTA box -->
      <div
        class="relative text-center py-10 px-8 md:py-16 md:px-12"
        data-aos="fade-up"
      >
        <div
          class="
            relative
            flex flex-col
            lg:flex-row
            justify-between
            items-center
          "
        >
          <link
            rel="stylesheet"
            href="https://emailoctopus.com/bundles/emailoctopuslist/css/1.6/form.css"
          />
          <div
            class="
              w-full
              emailoctopus-form-wrapper emailoctopus-form-default
              null
            "
            style="
              font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
              color: rgb(26, 26, 26);
            "
          >
            <p class="emailoctopus-success-message"></p>
            <p class="emailoctopus-error-message"></p>
            <form
              action="https://emailoctopus.com/lists/625955a8-4616-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add"
              method="post"
              data-message-success="🎉 Welcome aboard! You've made the right choice~ 🎊"
              data-message-missing-email-address="Your email address is required."
              data-message-invalid-email-address="Your email address looks incorrect, please try again."
              data-message-bot-submission-error="This doesn't look like a human submission."
              data-message-consent-required="Please check the checkbox to indicate your consent."
              data-message-invalid-parameters-error="This form has missing or invalid fields."
              data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
              class="emailoctopus-form text-white"
            >
              <div
                class="
                  emailoctopus-form-row
                  flex flex-col
                  sm:flex-row
                  justify-center
                  max-w-xs
                  mx-auto
                  sm:max-w-md
                  lg:max-w-none
                "
              >
                <input
                  id="field_0"
                  name="field_0"
                  type="email"
                  required="required"
                  class="
                    font-sans
                    w-full
                    appearance-none
                    bg-gray-800
                    border border-purple-500
                    focus:border-purple-300
                    rounded-sm
                    px-4
                    py-3
                    mb-2
                    sm:mb-0 sm:mr-2
                    text-white
                    placeholder-purple-400
                  "
                  placeholder="Email Address…"
                />
                <input type="hidden" name="successRedirectUrl" />
                <button
                  type="submit"
                  class="
                    btn
                    text-white
                    bg-purple-600
                    hover:bg-purple-100
                    shadow
                    font-sans font-black
                  "
                >
                  Subscribe
                </button>
              </div>
              <div aria-hidden="true" class="emailoctopus-form-row-hp">
                <input
                  type="text"
                  name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
                  tabindex="-1"
                  autocomplete="nope"
                />
              </div>
            </form>
            <div
              class="
                emailoctopus-rewards
                sm:text-center
                text-purple-400 text-xs
                font-sans
              "
            >
              Powered by
              <a
                href="https://emailoctopus.com/?ali=285006c3-46ad-11eb-a3d0-06b4694bee2a"
                target="_blank"
                rel="nofollow noopener"
              >
                EmailOctopus
              </a>
            </div>
          </div>
          <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js"></script>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>
<style>
.emailoctopus-success-message {
  color: white !important;
}

.emailoctopus-error-message {
  color: white !important;
}
</style>
