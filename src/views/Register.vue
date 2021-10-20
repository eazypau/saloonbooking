<template>
  <div class="register">
    <div
      v-if="loading"
      class="
        flex
        items-center
        justify-center
        z-40
        inset-0
        w-screen
        h-screen
        bg-gray-500 bg-opacity-50
        absolute
      "
    >
      <svg class="loadingIcon" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register an account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Have an account?
            <router-link
              :to="{ name: 'Login' }"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </router-link>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="name"
                name="text"
                type="text"
                v-model="userName"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                v-model="email"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                v-model="password"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="retypePassword"
                name="retypePassword"
                type="password"
                autocomplete="current-password"
                v-model="retypePassword"
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-b-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Retype Password"
              />
            </div>
          </div>

          <div>
            <button
              @click="createUser"
              type="button"
              class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { checkForUser, createUserDoc } from "../firebase/firebase";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      retypePassword: "",
      userName: "",
      loading: false,
      alertText: "",
    };
  },
  methods: {
    async createUser() {
      const auth = getAuth();
      if (
        this.email === "" ||
        this.password === "" ||
        this.userName === "" ||
        this.retypePassword === ""
      ) {
        console.log("Please provide all necessary information...");
        alert("Please provide user name, email and password...");
        return;
      }
      const checkingEmail = await checkForUser(this.email);
      if (checkingEmail === true) {
        alert("This email has been used. Please use another email.");
        this.email = "";
        return;
      }
      if (this.password !== this.retypePassword) {
        this.password = "";
        this.retypePassword = "";
        alert(
          "Password and Retype Password must be the same. Please check again..."
        );
        return;
      }
      this.loading = true;
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const createProfile = createUserDoc(
            user.uid,
            this.email,
            this.userName
          );
          console.log("User Profile created...");
          signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/");
          this.loading = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ": " + errorMessage);
          this.loading = false;
        });
    },
  },
});
</script>

<style scoped></style>
