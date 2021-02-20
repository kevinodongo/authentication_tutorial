<template>
  <div class="home">
    <div
      class="md:h-screen grid grid-cols-1 bg-gray-300 lg:grid-cols-2  overflow-hidden"
    >
      <div
        class="bg-gradient-to-br from-blue-700 via-gray-900 to-gray-900 max-w-7xl mx-auto"
      >
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10">
            <router-link to="/">
              <img
                class="mx-auto h-16 md:ml-7 w-auto"
                src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612296046/IMG-20200910-WA0020_ppnudi-removebg-preview_vqozxz.png"
                alt="Jogevk Group Logo"
            /></router-link>
            <div class="flex">
              <div class="col-span-3 sm:col-span-2 hidden sm:block">
                <div class="mr-2 flex rounded-md shadow-sm">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                  >
                    <box-icon name="search" color="black"></box-icon>
                  </span>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div class="-mr-2 flex items-center justify-end lg:visible">
                <button
                  type="button"
                  @click="menu = !menu"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main_menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open main menu</span>
                  <!-- Heroicon name: outline/menu -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            v-if="menu"
            id="menu_section"
            class="transition transform origin-top-right mt-5 inset-x-0 right-2 left-2 top-0 rounded-xl absolute bg-white"
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612296046/IMG-20200910-WA0020_ppnudi-removebg-preview_vqozxz.png"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <button
                    @click="menu = false"
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close main menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                    >Product</a
                  >

                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                    >Features</a
                  >

                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                    >Marketplace</a
                  >

                  <router-link
                    to="/signup"
                    id="signup_button"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                    >Sign up</router-link
                  >
                </div>
                <div role="none">
                  <router-link
                    id="login_button"
                    to="/login"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Log in
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <main
            class="mt-10 mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline"
                  >AWS Cognito, Node, Vue and AWS SES</span
                >
              </h1>
              <div class="mb-10">
                <p
                  class="mt-5 text-base text-gray-400 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  This is a tutorial about how to configure a Node, Express
                  Application with AWS Cognito and AWS SES. AWS SES will be used
                  to send email's to the users while Cognito will be used for
                  Authentication.
                </p>
              </div>
              <div class="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <router-link
                    to="/signup"
                    id="started_link"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <router-link
                    to="/"
                    id="demo_link"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="mt-0">
        <img
          class="h-56 w-full object-cover sm:h-72 lg:w-full lg:h-full"
          src="/austin-distel-pfmKvWLDGoc-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import "boxicons";
export default {
  name: "Home",
  data() {
    return {
      menu: false
    };
  }
};
</script>
