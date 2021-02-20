import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import LoginHelp from "@/components/auth/LoginHelp";
import Newpassword from "@/components/auth/@utils/Newpassword.vue";
import Resetpassword from "@/components/auth/@utils/Resetpassword.vue";
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

  actions = {};

  store = new Vuex.Store({
    modules: {
      auth: {
        state,
        actions,
        namespaced: true
      }
    }
  });

  wrapper = shallowMount(LoginHelp, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

// Loginhelp component
describe("Loginhelp.vue", () => {
  /**
   * @http://localhost:8080/login-help
   *  Ensure Resetpassword and Newpassword are mounted
   */

  it("check if Resetpassword and Newpassword are mounted", async () => {
    // 1. Ensure only one component has been mounted
    const reset = wrapper.findComponent(Resetpassword);
    const new_password = wrapper.findComponent(Newpassword);
    expect(new_password.exists()).toBe(false);
    expect(reset.exists()).toBe(true);
  });

  /**
   * **********************************************
   */
});
