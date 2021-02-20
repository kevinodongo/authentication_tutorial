import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Resetpassword from "@/components/auth/@utils/Resetpassword.vue";
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

  wrapper = mount(Resetpassword, {
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

// reset password component
describe("Resetpassword.vue", () => {
  /**
   * @http://localhost:8080/login-help
   *  Test and ensure reset button is available
   */

  it("check if reset button is available on mount", async () => {
    const send_code_button = await wrapper.find("#reset_button");
    expect(send_code_button.exists()).toBe(true);

    // 2. Find the email input and set value
    const email_input = await wrapper.find('input[name="Email_input"]');
    await email_input.setValue("example@exmaple.com");

    // 3. Submit confirm button and ensure reset function is called
    await send_code_button.trigger("click");
    await wrapper.vm.$nextTick();
    //expect(actions.saveloading).toHaveBeenCalled();
  });

  /**
   * **********************************************
   */
});
