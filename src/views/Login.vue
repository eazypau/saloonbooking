<template>
  <div class="login">
    <div class="max-w-max sm:p-14 p-4 rounded-lg bg-indigo-700">
      <p class="mb-10 font-bold text-3xl text-center text-white">Login</p>
      <div class="flex flex-col items-center mb-5">
        <label class="text-lg font-semibold mb-1 text-white" for="email"
          >Email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
          required
          autofocus
        />
      </div>
      <div class="flex flex-col items-center mb-9">
        <label class="text-lg font-semibold mb-1 text-white" for="password"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          v-model="password"
          @keypress.enter="logInUser"
        />
      </div>
      <div class="flex justify-center mb-3">
        <button class="loginBtn flex items-center" @click="logInUser">
          <img class="w-7" v-if="loading" src="../assets/334-loader-5.gif" />
          Sign In
        </button>
      </div>
      <div class="flex justify-center w-56 text-sm">
        <p class="text-white">
          For new user, kindly register a new account.
          <router-link to="/register" class="underline">Click Here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { checkForUser } from "../firebase/firebase";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async logInUser() {
      this.loading = true;
      if (this.email === "" || this.password === "") {
        alert("Please key in user email and password...");
        return;
      }
      const auth = getAuth();
      const checking = await checkForUser(this.email);
      // console.log(checking);
      if (checking === null) {
        alert("User does not exist...");
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
            console.log("User does not exist...");
            this.email = "";
            this.password = "";
            alert("Email/Password does not match");
          });
        this.loading = false;
      }
    },
  },
  setup() {},
});
</script>

<style></style>
