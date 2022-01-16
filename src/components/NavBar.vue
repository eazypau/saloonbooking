<template>
  <Popover class="relative bg-white">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/" @click="scrollToTop" class="font-semibold text-xl text-indigo-600 hover:opacity-60 flex items-center fontCourgette">
            <img src="../assets/android-chrome-192x192.png" alt="logo" class="h-11 w-11 mr-2" /> SaloonBooking
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span>About</span>
              <ChevronDownIcon
                :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      v-for="item in abouts"
                      :key="item.name"
                      :href="item.href"
                      @click="homePage"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <router-link to="/saloon" class="text-base font-medium text-gray-500 hover:text-gray-900"> Saloons </router-link>
          <router-link to="/profile" v-if="isLogin" class="text-base font-medium text-gray-500 hover:text-gray-900"> Profile </router-link>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span>More</span>
              <ChevronDownIcon
                :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" v-show="!isLogin">
            Sign in
          </router-link>
          <p v-if="isLogin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Welcome, {{ userName }}</p>
          <router-link
            to="/register"
            v-if="!isLogin"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </router-link>
          <a
            href="#"
            v-if="isLogin"
            @click="logOut"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Log Out
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <router-link to="/" class="font-semibold text-xl text-indigo-600"> SaloonBooking </router-link>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in abouts" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link to="/saloon" class="text-base font-medium text-gray-900 hover:text-gray-700"> Saloons </router-link>

              <router-link v-if="isLogin" to="/profile" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Profile
              </router-link>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <router-link
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                to="/register"
                v-show="!isLogin"
              >
                Sign up
              </router-link>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                @click="logOut"
                v-show="isLogin"
              >
                Log Out
              </a>
              <p v-show="!isLogin" class="mt-6 text-center text-base font-medium text-gray-500">
                Existing user?
                {{ " " }}
                <router-link to="/login" class="text-indigo-600 hover:text-indigo-500"> Sign in </router-link>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
  import { MenuIcon, XIcon } from "@heroicons/vue/outline";
  import { ChevronDownIcon } from "@heroicons/vue/solid";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { key } from "../store/store";
  import { useStore } from "vuex";

  export default defineComponent({
    name: "NavBar",
    components: {
      Popover,
      PopoverButton,
      PopoverGroup,
      PopoverPanel,
      ChevronDownIcon,
      MenuIcon,
      XIcon,
    },
    data() {
      return {
        isLogin: false,
      };
    },
    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.$store.dispatch("getCurrentUser");
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      });
    },
    methods: {
      logOut() {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log("Successfully sign out User...");
            this.isLogin = false;
            this.$router.push("/");
            // location.reload()
            alert("Successfully log out...");
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
      },
    },
    setup: () => {
      const abouts = [
        {
          name: "Our Vision",
          description: "To provide a platform for people to book their door to door hair saloon serivce. Save time and less hassle.",
          href: "/#ourVision",
        },
        {
          name: "Our Aim",
          description:
            "To utilize our platform to help others provide their service to the customer in a more efficient and covinient way and to overcome the struggles that aris during the pandemic",
          href: "/#ourAim",
        },
        {
          name: "Our Office",
          description: "Do visit our office located at Malacca",
          href: "/#ourOffice",
        },
      ];
      const resources = [
        {
          name: "FAQ",
          description: "Frequently asked questions.",
          href: "faq",
        },
        {
          name: "Guides",
          description: "Easy steps to utilize our platform.",
          href: "https://github.com/eazypau/saloonbooking",
        },
      ];
      const store = useStore(key);
      const userName = computed(() => store.state.name);
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      return {
        abouts,
        resources,
        userName,
        scrollToTop,
      };
    },
  });
</script>

<style scoped>
  .fontCourgette {
    font-family: "Courgette", cursive;
  }
</style>
