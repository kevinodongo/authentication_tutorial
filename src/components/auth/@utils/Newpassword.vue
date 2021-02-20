<template>
  <div class="new-password">
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
              <label for="code" class="text-sm">Code</label>
              <input
                id="code"
                name="code_input"
                type="text"
                v-model="item.code"
                autocomplete="code"
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
            @click="changepassword"
            id="password_reset_button"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Spinner v-if="loading" />
            <span v-else>Save new password</span>
          </button>
        </div>
      </ValidationObserver>
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
  name: "Confirm",
  props: ["item", "loading"], // props data from login help component
  components: {
    ValidationProvider,
    ValidationObserver,
    Spinner
  },
  data() {
    return {
      //
    };
  },
  methods: {
    /**
     * @http://localhost:8080/login-help
     * New password
     */
    changepassword() {
      this.$emit("changepassword");
    }
    /**
     * *****************************
     */
  }
};
</script>
