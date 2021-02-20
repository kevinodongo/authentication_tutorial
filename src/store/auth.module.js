import {
  loginuser,
  registeruser,
  confirmuseremail,
  sendusercode,
  logoutuser,
  resetuserpassword
} from "../scripts/userService";
import router from "../router";

/* eslint-disable */
const user = JSON.parse(localStorage.getItem("user"));
//const user = Auth.currentAuthenticatedUser()
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };


const actions = {
  /**
   * @http://localhost:8080/login
   * Login function once logged in send to dashboard
  */
  login({ dispatch, commit }, user) {
    commit("loginRequest", { user });
    // submit to user service for login
    const response = loginuser(user)
    if(response){
      commit("loginSuccess", response);
      router.push("/dashboard");
    } else {
      commit("loginFailure", error);
      dispatch("alert/error", error, { root: true });
    }
    // end
  },
   /**
   * @http://localhost:8080/login
   * Confirm function
  */
  confirm({ dispatch, commit }, code) {
  // confirm email
  const response = confirmuseremail(code)
  if(response){
    //
  } else {
    //
  }
},
 /**
   * @http://localhost:8080/login
   * Send code
  */
 sendcode({ dispatch, commit }, email) {
  const response = sendusercode(email)
  if(response){
    //
  } else {
    //
  }
},
 /**
   * @http://localhost:8080/login
   * Change password
  */
 changepassword({ dispatch, commit }, { use }) {
  const response = resetuserpassword(email)
  if(response){
    //
  } else {
    //
  }
},
  /**
   * @http://localhost:8080/dashboard
   * Logout function once success send to login page
  */
  logout({ commit }) {
     logoutuser();
    commit("logout");
    router.push('/') 
  },
  /**
   * @http://localhost:8080/signup
   * Signup function once success send to login page
  */
  register({ dispatch, commit }, user) {
    commit("registerRequest", user);

    // submit to user service for login
    const response = registeruser(user)
    if(response){
      commit("registerSuccess", response);
      router.push("/dashboard");
      setTimeout(() => {
        // display success message after route change completes
        dispatch("alert/success", "Registration successful", { root: true });
      }, 1000);
    } else {
      commit("loginFailure", error);
      dispatch("alert/error", error, { root: true });
    }
    // end
  }
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state, user) {
    state.status = { registering: true };
    state.user = user
  },
  registerSuccess(state, user) {
    state.status = { registered: true};
    state.user = user
  },
  registerFailure(state) {
    state.status = {};
    state.user = null;
  }
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations
};
