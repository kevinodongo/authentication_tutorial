import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";
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

  wrapper = shallowMount(Dashboard, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

// dashboard component
describe("Dashboard.vue", () => {
  /**
   * @http://localhost:8080/dashboard
   *  Test and ensure get started button exists on mount
   */

  it("check if signout button is available on mount", async () => {
    // 1. User menu exists
    const main_menu = await wrapper.find("#user_menu");
    expect(main_menu.exists()).toBe(true);

    // 2. Trigger click
    await main_menu.trigger("click");
    await wrapper.vm.$nextTick();

    // 3. Signout button is available
    const signout_link = await wrapper.find("#signout_button_large_screen");
    expect(signout_link.exists()).toBe(true);
  });
});
