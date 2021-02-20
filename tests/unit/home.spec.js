import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
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

  wrapper = shallowMount(Home, {
    localVue,
    stubs: ["router-link", "router-view", "box-icon"],
    store,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

// home component
describe("Home.vue", () => {
  /**
   * @http://localhost:8080
   *  Test and ensure get started button exists on mount
   */

  it("check if get started button is available on mount", async () => {
    const started_link = await wrapper.find("#started_link");
    expect(started_link.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080
   *  Test and ensure demo button exists on mount
   */

  it("check if live demo button is avaliable on mount", async () => {
    const demo_link = await wrapper.find("#demo_link");
    expect(demo_link.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080
   *  Test and ensure main menu button exists and opens the menu
   */

  it("check if main menu button exists and opens the menu", async () => {
    // 1. Main Menu exists
    const main_menu = await wrapper.find("#main_menu");
    expect(main_menu.exists()).toBe(true);

    // 2. Trigger click
    await main_menu.trigger("click");
    await wrapper.vm.$nextTick();

    // 3 Assert menu section is available
    const menu_section = await wrapper.find("#menu_section");
    expect(menu_section.exists()).toBe(true);

    // 4 Assert login button is available
    const login_button = await wrapper.find("#login_button");
    expect(login_button.exists()).toBe(true);

    // 5 Assert signup button is available
    const signup_button = await wrapper.find("#signup_button");
    expect(signup_button.exists()).toBe(true);
  });
});
