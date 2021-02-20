import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Confirm from "@/components/auth/@utils/Confirmaccount.vue";
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

  actions = {
    confirm: jest.fn()
  };

  item = {
    email: null
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

  wrapper = mount(Confirm, {
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

// confirm component
describe("Confirm.vue", () => {
  /**
   * @http://localhost:8080/signup
   *  Test and ensure confirm button is available
   */
  it("check if confirm button is available on mount", async () => {
    // 1. Ensure confirm button exists
    const confirm_button = await wrapper.find("#confirm_button");
    expect(confirm_button.exists()).toBe(true);
  });

  /**
   * @http://localhost:8080/signup
   *  Test and ensure on submission emitted funtion is called
   */
  it("check if on submit button confirm button emits", async () => {
    // 1. Assign value and test emmtted
    await wrapper
      .find('input[name="Email_input"]')
      .setValue("example@exmaple.com");
    await wrapper.find('input[name="code_input"]').setValue("123456");
    await wrapper.find("#confirm_button").trigger("click");
    await wrapper.vm.$nextTick();

    // 2. Find the confirmation button
    wrapper.vm.confirmaccount();
    expect(wrapper.emitted()).toBeTruthy();
  });

  /**
   * **********************************************
   */
});
