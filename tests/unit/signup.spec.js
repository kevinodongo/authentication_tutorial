import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Signup from "@/components/auth/Signup";
import Registeraccount from "@/components/auth/@utils/Registeraccount.vue";
import Confirmaccount from "@/components/auth/@utils/Confirmaccount.vue";
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

  state = {};

  actions = {
    register: jest.fn()
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

  wrapper = mount(Signup, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

// signup component
describe("Signup.vue", () => {
  /**
   * @http://localhost:8080/login-help
   *  Ensure confirmaccount and registeraccount are mounted
   */

  it("check if confirmaccount and registeraccount are mounted", async () => {
    // 1. Ensure only one component has been mounted
    const confirm = wrapper.findComponent(Confirmaccount);
    const register = wrapper.findComponent(Registeraccount);
    expect(confirm.exists()).toBe(false);
    expect(register.exists()).toBe(true);
  });

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
    //expect(actions.register).toHaveBeenCalled();
  });
  /**
   * **********************************************
   */
});
