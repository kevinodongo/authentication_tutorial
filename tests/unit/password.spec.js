import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Newpassword from "@/components/auth/@utils/Newpassword.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
// eslint-disable-next-line no-unused-vars
import auth from "../../src/store/auth.module";
import Vuex from "vuex";
import VueRouter from "vue-router";
import "boxicons";
// initilaize routes
if (!process || process.env.NODE_ENV !== "test") {
  Vue.use(VueRouter);
}

let wrapper;
let state;
let actions;
let store;
let localVue;
let router;
let item;

beforeEach(() => {
  localVue = createLocalVue();
  router = new VueRouter();
  Vue.use(Vuex);
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);

  state = {};

  actions = {};

  item = {
    email: null,
    password: null,
    code: null
  };

  store = new Vuex.Store({
    modules: {
      auth: {
        state,
        actions,
        namespaced: true
      }
    }
  });

  wrapper = mount(Newpassword, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router,
    propsData: {
      item: item
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

// New password component
describe("Newpassword.vue", () => {
  /**
   * @http://localhost:8080/login-help
   *  Test and ensure new password button is available
   */

  it("check if password reset button is available on mount", async () => {
    const reset_button = await wrapper.find("#password_reset_button");
    expect(reset_button.exists()).toBe(true);

    // 2. Find the email input, password input and code input and set values
    const email_input = await wrapper.find('input[name="Email_input"]');
    const code_input = await wrapper.find('input[name="code_input"]');
    const password_input = await wrapper.find('input[name="password_input"]');
    await email_input.setValue("example@exmaple.com");
    await code_input.setValue("123456");
    await password_input.setValue("123456");

    // 3. Submit confirm button and ensure reset function is called
    await reset_button.trigger("click");
    await wrapper.vm.$nextTick();
    //expect(actions.saveloading).toHaveBeenCalled();
  });

  /**
   * **********************************************
   */
});
