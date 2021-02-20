import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Registration from "@/components/auth/@utils/Registeraccount.vue";
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
    password: null
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

  wrapper = mount(Registration, {
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

// registration component
describe("Registration.vue", () => {
  /**
   * @http://localhost:8080/signup
   *  Test and ensure get signing button exists on mount
   */

  it("check if registration button is available on mount", async () => {
    const register_button = await wrapper.find("#register_button");
    expect(register_button.exists()).toBe(true);

    // 2. Find the email input, password input and set values
    const email_input = await wrapper.find('input[name="Email_input"]');
    const password_input = await wrapper.find('input[name="password_input"]');
    await email_input.setValue("example@exmaple.com");
    await password_input.setValue("123456");

    // 3. Submit confirm button and ensure reset function is called
    await register_button.trigger("click");
    await wrapper.vm.$nextTick();
    //expect(actions.saveloading).toHaveBeenCalled();
  });

  /**
   * @http://localhost:8080/signup
   *  Test and ensure no account button exists on mount
   */

  it("check if no account button is avaliable on mount", async () => {
    const account_link = await wrapper.find("#account_link");
    expect(account_link.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/signup
   *  Test and ensure google button exists
   */

  it("check if google button is available on mount", async () => {
    const google_button = await wrapper.find("#google_button");
    expect(google_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/signup
   *  Test and ensure google button exists
   */

  it("check if facebook button is available on mount", async () => {
    const facebook_button = await wrapper.find("#facebook_button");
    expect(facebook_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/signup
   *  Test and ensure twitter button exists
   */

  it("check if twitter button is available on mount", async () => {
    const twitter_button = await wrapper.find("#twitter_button");
    expect(twitter_button.exists()).toBe(true);
  });

  /**
   * **********************************************
   */
});
