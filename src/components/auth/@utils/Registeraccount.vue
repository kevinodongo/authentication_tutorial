<template>
  <div class="signup">
    <form class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <ValidationObserver v-slot="{ invalid }">
        <div class="rounded-md space-y-3">
          <validation-provider rules="required|email" v-slot="{ errors }">
            <div>
              <label for="email-address" class="text-sm">Email address</label>
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
            @click="registeraccount"
            id="register_button"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Spinner v-if="loading" />
            <span v-else>Sign up</span>
          </button>
          <div class="flex justify-end items-center">
            <router-link id="account_link" to="/login"
              >Already have an account?</router-link
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
          <box-icon name="facebook-circle" type="logo" color="white"></box-icon>
          <span class="ml-2">Sign up with Facebook</span>
        </button>
        <button
          type="submit"
          id="google_button"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 mt-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <box-icon name="google" type="logo" color="white"></box-icon>
          <span class="ml-2">Sign up with Google</span>
        </button>
        <button
          type="submit"
          id="twitter_button"
          class="group mb-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 mt-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <box-icon type="logo" color="white" name="twitter"></box-icon>
          <span class="ml-2">Sign up with Twitter</span>
        </button>
      </div>
    </form>
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
import Spinner from "../../parts/Spinner";
export default {
  name: "Signup",
  props: ["item", "loading"],
  components: { ValidationProvider, ValidationObserver, Spinner },
  data() {
    return {
      //
    };
  },
  methods: {
    /**
     * @http://localhost:8080/signup
     * Register a new account
     */
    registeraccount() {
      this.$emit("registeraccount");
    }
    /**
     * *****************************
     */
  }
};
</script>
