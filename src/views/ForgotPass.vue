<template>
  <div class="login">
    <Modal
      :open="infoStatus"
      :modalTitle="infoTitle"
      :modalTxt="infoMsg"
      @close-modal="infoStatus = false"
    />
    <div
      v-if="loading"
      class="
        flex
        items-center
        justify-center
        z-40
        inset-0
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
            Request a new password
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
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-md
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              @click="resetPassword"
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
              Request New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { checkForUser } from "../firebase/firebase";
import Modal from "../components/Modal.vue";

export default defineComponent({
  components: { Modal },
  data() {
    return {
      email: "",
      loading: false,
      infoTitle: "",
      infoMsg: "",
      infoStatus: false,
    };
  },
  methods: {
    async resetPassword() {
      if (this.email === "" || this.email === null) {
        this.infoMsg = "Please provide your email address.";
        this.infoTitle = "Information";
        this.infoStatus = true;
        return;
      }
      this.loading = true;
      const checking = await checkForUser(this.email);
      // console.log(checking);
      if (checking === null) {
        // alert("User does not exist...");
        this.infoMsg = "User account does not exist";
        this.infoTitle = "Error!";
        this.infoStatus = true;
        this.loading = false;
        return;
      }
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.infoMsg =
            "We have just send you a new password. Please check your email to continue.";
          this.infoTitle = "Success";
          this.infoStatus = true;
          this.loading = false;
          this.email = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.infoMsg = errorMessage;
          this.infoTitle = errorCode;
          this.infoStatus = true;
          this.loading = false;
          this.email = "";
        });
    },
  },
});
</script>
