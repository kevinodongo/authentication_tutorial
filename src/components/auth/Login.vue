<template>
  <div class="login">
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
            Sign in to your account
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
        <form class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <ValidationObserver v-slot="{ invalid }">
            <div class="rounded-md space-y-3">
              <validation-provider rules="required|email" v-slot="{ errors }">
                <div>
                  <label for="email-address" class="text-sm"
                    >Email address</label
                  >
                  <input
                    id="email-address"
                    name="Email_input"
                    type="email"
                    v-model="item.email"
                    autocomplete="email"
                    required
                    class="appearance-none mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <div>
                    <span class="text-red-500 text-xs font-medium">{{
                      errors[0]
                    }}</span>
                  </div>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <div>
                  <label for="password" class="text-sm">Password</label>
                  <input
                    id="password"
                    name="password_input"
                    type="password"
                    v-model="item.password"
                    autocomplete="current-password"
                    required
                    class="appearance-none mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <div>
                    <span class="text-red-500 text-xs font-medium">{{
                      errors[0]
                    }}</span>
                  </div>
                </div>
              </validation-provider>
              <button
                :disabled="invalid"
                type="button"
                @click="submit"
                id="signing_button"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <Spinner v-if="loading" />
                <span v-else>Sign in</span>
              </button>
              <div class="flex justify-end items-center">
                <router-link id="no_account_link" to="/signup"
                  >No account?</router-link
                >
              </div>
            </div>
          </ValidationObserver>
          <div class="text-center mt-3 mb-5 flex justify-center items-center">
            <div class="w-full border border-grey-500"></div>
            <div class="mr-2 ml-2">OR</div>
            <div class="w-full border border-grey-500"></div>
          </div>
          <!--
            Social Buttons
          -->
          <div>
            <button
              type="submit"
              id="facebook_button"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <box-icon type="logo" name="facebook" color="white"></box-icon>
              <span class="ml-2 mb-1">Sign in with Facebook</span>
            </button>
            <button
              type="submit"
              id="google_button"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 mt-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <box-icon name="google" type="logo" color="white"></box-icon>
              <span class="ml-2">Sign in with Google</span>
            </button>
            <button
              type="submit"
              id="twitter_button"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 mt-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <box-icon type="logo" color="white" name="twitter"></box-icon>
              <span class="ml-2">Sign in with Twitter</span>
            </button>
            <div class="mt-4 flex items-center text-sm">
              <router-link id="help_button" to="/login-help"
                >Need help signing in?</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "boxicons";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
extend("email", email);
extend("required", {
  ...required,
  message: "This field is required"
});
import Spinner from "../parts/Spinner";
export default {
  name: "Login",
  components: {
    ValidationProvider,
    ValidationObserver,
    Spinner
  },
  data() {
    return {
      item: {
        email: null,
        password: null
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
     * @http://localhost:8080/login
     * Login into your account
     */
    submit() {
      this.loading = true;
      // 1. dispatch to vuex
      this.$store.dispatch("auth/login", this.item, { root: true });
      // 2.  clear item
      this.item = {
        email: null,
        password: null
      };
      // 3. set interval and clear on message / response
      this.interval = setInterval(() => {
        if (this.message) {
          clearInterval(this.interval);
          this.loading = false;
        }
      }, 500);
    },

    /**
     * Close alert
     */
    closealert() {
      this.$store.dispatch("alert/clear", { root: true });
    }

    /**
     * ********************************************
     */
  }
};
</script>
