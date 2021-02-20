<template>
  <div class="login-help">
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        class="max-w-md w-full bg-white rounded-xl py-8 px-8 sm:py-12 sm:px-12 shadow-2xl space-y-8"
      >
        <div>
          <router-link to="/">
            <img
              id="logo_image"
              class="mx-auto h-16  w-auto"
              src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612296046/IMG-20200910-WA0020_ppnudi-removebg-preview_vqozxz.png"
              alt="Jogevk Group Logo"
          /></router-link>
          <h2 class="mt-3 text-center text-2xl font-semibold text-gray-900">
            {{ text }}
          </h2>
        </div>
        <!--Error alert-->
        <div class="bg-red-100 rounded-lg" v-if="message">
          <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg ">
                  <!-- Heroicon name: speakerphone -->
                  <svg
                    class="h-6 w-6 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>
                <p class="ml-3 text-sm font-medium text-gray-600">
                  <span v-text="message"> </span>
                </p>
              </div>
              <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  @click="closealert"
                  class="-mr-1 flex p-2 rounded-md hover:text-white focus:outline-none sm:-mr-2"
                >
                  <span class="sr-only">Dismiss</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--/end-->
        <Newpassword
          v-if="reset"
          :item="item"
          :loading="loading"
          @changepassword="changepassword"
        />
        <Resetpassword
          v-else
          :item="item"
          :loading="loading"
          @resetpassword="resetpassword"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Newpassword from "./@utils/Newpassword.vue";
import Resetpassword from "./@utils/Resetpassword.vue";
export default {
  name: "LoginHelp",
  components: { Newpassword, Resetpassword },
  data() {
    return {
      reset: false,
      text: "Reset password",
      item: {
        email: null,
        password: null,
        code: null
      },
      loading: false,
      interval: 0
    };
  },
  // computed
  computed: {
    message() {
      return this.$store.state.alert.message;
    }
  },
  // before destroy clear interval
  beforeDestroy() {
    clearInterval(this.interval);
  },
  // methods
  methods: {
    /**
     * @http://localhost:8080/login-help
     * Send code to change password
     */
    resetpassword() {
      this.loading = true;
      // 1. dispatch to vuex
      this.$store.dispatch("auth/confirm", this.item, { root: true });
      // 2.  clear item
      this.item = {
        email: null,
        password: null,
        code: null
      };
      this.reset = true;
      // 3. set interval and clear on message / response
      // this.interval = setInterval(() => {
      //   if (this.message) {
      //     clearInterval(this.interval);
      //     this.loading = false;
      //     this.text = "Reset password";
      //     this.reset = false;
      //   }
      // }, 500);
    },

    /**
     * @http://localhost:8080/login-help
     * Change password
     */
    changepassword() {
      this.loading = true;
      // 1. dispatch to vuex
      this.$store.dispatch("auth/confirm", this.item, { root: true });
      // 2.  clear item
      this.item = {
        email: null,
        password: null,
        code: null
      };

      // 3. set interval and clear on message / response
      // this.interval = setInterval(() => {
      //   if (this.message) {
      //     clearInterval(this.interval);
      //     this.loading = false;
      //     this.text = "Assign new password";
      //     this.reset = false;
      //   }
      // }, 500);
    },

    /**
     * Close alert
     */
    closealert() {
      this.$store.dispatch("alert/clear", { root: true });
    }
    /**
     * *****************************
     */
  }
};
</script>
