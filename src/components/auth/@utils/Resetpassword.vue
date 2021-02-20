<template>
  <div class="reset-password">
    <form>
      <ValidationObserver v-slot="{ invalid }">
        <div class="rounded-md space-y-4">
          <validation-provider rules="required|email" v-slot="{ errors }">
            <div>
              <div class="mb-3">
                <p>
                  Enter your primary email address and we’ll send you
                  instructions on how to reset your password.
                </p>
              </div>
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
          <button
            :disabled="invalid"
            type="button"
            @click="resetpassword"
            id="reset_button"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Spinner v-if="loading" />
            <span v-else>Send code</span>
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
  name: "Resetpassword",
  props: ["item", "loading"], // props data from login help componenet
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
     * Reset password
     */
    resetpassword() {
      this.$emit("resetpassword");
    }
    /**
     * *****************************
     */
  }
};
</script>
