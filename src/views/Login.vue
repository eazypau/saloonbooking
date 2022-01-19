<template>
  <div class="login">
    <Loading v-if="loading" />
    <Modal
      :open="modalStatus"
      :modalTitle="warningTxt"
      :modalTxt="warningMsg"
      @close-modal="modalStatus = false"
    />
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Don't have an account?
            <router-link
              :to="{ name: 'Register' }"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register
            </router-link>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
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
                  rounded-t-md
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
                @keydown.enter="logInUser"
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
                  rounded-b-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center"></div>

            <div class="text-sm">
              <router-link
                :to="{ name: 'ForgotPassword' }"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </router-link>
            </div>
          </div>

          <div>
            <button
              @click="logInUser"
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
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { checkForUser } from "../firebase/firebase";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

export default defineComponent({
  components: {
    Modal,
    Loading
},
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      warningTxt: "",
      warningMsg: "",
      modalStatus: false,
    };
  },
  methods: {
    async logInUser() {
      if (this.email === "" || this.password === "") {
        this.warningMsg = "Please provide your email address and password";
        this.warningTxt = "Information";
        this.modalStatus = true;
        return;
      }
      this.loading = true;
      const auth = getAuth();
      const checking = await checkForUser(this.email);
      // console.log(checking);
      if (checking === null) {
        this.warningMsg = "User account does not exist";
        this.warningTxt = "Error!";
        this.modalStatus = true;
        this.loading = false;
        return;
      } else {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            this.$router.push("/");
            console.log("Successfully logged in...");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage);
            // console.log("User does not exist...");
            this.warningMsg = errorMessage;
            this.warningTxt = errorCode;
            this.modalStatus = true;
            this.email = "";
            this.password = "";
            // alert("Email/Password does not match");
          });
        this.loading = false;
      }
    },
  },
  setup() {},
});
</script>

<style scoped></style>
