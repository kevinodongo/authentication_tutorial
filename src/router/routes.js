import Home from "../views/Home.vue";
const routes = [
  /**
   * Public routes
   * ************************
   * @https://localhost:8080
   * @https://localhost:8080/about
   * @https://localhost:8080/contact
   */
  {
    path: "/",
    name: "Home",
    component: Home
  },

  /**
   * Authentication routes
   * *********************************
   * @https://localhost:8080/login
   * @https://localhost:8080/signup
   * @https://localhost:8080/login-help
   */
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/auth/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../components/auth/Signup.vue")
  },
  {
    path: "/login-help",
    name: "Login-help",
    component: () => import("../components/auth/LoginHelp.vue")
  },

  /**
   * Private routes
   * *********************************
   * @ http://localhost:8080/dashboard
   */
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true }
  },

  /**
   * Otherwise redirect back to the home page
   */
  { path: "*", redirect: "/" }
  // end
];

export default routes;
