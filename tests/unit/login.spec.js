import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/auth/Login.vue";
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

beforeEach(() => {
  localVue = createLocalVue();
  router = new VueRouter();
  Vue.use(Vuex);
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);

  state = {};

  actions = {
    login: jest.fn()
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

  wrapper = mount(Login, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

// login component
describe("Login.vue", () => {
  /**
   * @http://localhost:8080/login
   *  Test and ensure get signing button exists on mount
   */

  it("check if get signing button is available on mount", async () => {
    const signing_button = await wrapper.find("#signing_button");
    expect(signing_button.exists()).toBe(true);

    // 2. Find the email input, password input and set values
    const email_input = await wrapper.find('input[name="Email_input"]');
    const password_input = await wrapper.find('input[name="password_input"]');
    await email_input.setValue("example@exmaple.com");
    await password_input.setValue("123456");

    // 3. Submit confirm button and ensure reset function is called
    await signing_button.trigger("click");
    await wrapper.vm.$nextTick();

    // 4. Assert login function has been called
    expect(actions.login).toHaveBeenCalled();
  });

  /**
   * @http://localhost:8080/login
   *  Test and ensure no account button exists on mount
   */

  it("check if no account button is avaliable on mount", async () => {
    const no_account_link = await wrapper.find("#no_account_link");
    expect(no_account_link.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/login
   *  Test and ensure google button exists
   */

  it("check if google button is available on mount", async () => {
    const google_button = await wrapper.find("#google_button");
    expect(google_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/login
   *  Test and ensure google button exists
   */

  it("check if facebook button is available on mount", async () => {
    const facebook_button = await wrapper.find("#facebook_button");
    expect(facebook_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/login
   *  Test and ensure twitter button exists
   */

  it("check if twitter button is available on mount", async () => {
    const twitter_button = await wrapper.find("#twitter_button");
    expect(twitter_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/login
   *  Test and ensure help button exists
   */

  it("check if help button is available on mount", async () => {
    const help_button = await wrapper.find("#help_button");
    expect(help_button.exists()).toBe(true);
  });

  /**
   * **********************************************
   */
});
