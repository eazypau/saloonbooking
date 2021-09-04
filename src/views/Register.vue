<template>
  <div class="register">
    <div class="max-w-max sm:px-20 px-10 py-8 rounded-lg bg-indigo-700">
      <p class="mb-10 font-bold text-3xl text-center text-white">Register</p>
      <div class="flex flex-col items-center mb-5">
        <label class="text-lg font-semibold mb-1 text-white" for="user"
          >User Name</label
        >
        <input
          type="text"
          name="user"
          id="user"
          placeholder="User Name"
          v-model="userName"
        />
      </div>
      <div class="flex flex-col items-center mb-5">
        <label class="text-lg font-semibold mb-1 text-white" for="email"
          >Email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autofocus
          v-model="email"
        />
      </div>
      <div class="flex flex-col items-center mb-5">
        <label class="text-lg font-semibold mb-1 text-white" for="password"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="flex flex-col items-center mb-9">
        <label class="text-lg font-semibold mb-1 text-white" for="password"
          >Retype Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          v-model="retypePassword"
          @keypress.enter="createUser"
        />
      </div>
      <div class="flex justify-center mb-3">
        <button class="registerBtn" @click="createUser">Register</button>
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
    };
  },
  methods: {
    async createUser() {
      const auth = getAuth();
      if (this.email === "" || this.password === "" || this.userName === "" || this.retypePassword === "") {
        console.log("Please provide all necessary information...");
        alert("Please provide user name, email and password...")
        return
      }
      const checkingEmail = await checkForUser(this.email)
      if (checkingEmail === true) {
        alert("This email has been used. Please use another email.")
        this.email = ""
        return
      }
      if (this.password !== this.retypePassword) {
        this.password = "";
        this.retypePassword = "";
        alert(
          "Password and Retype Password must be the same. Please check again..."
        );
        return;
      }
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ": " + errorMessage);
        });
    },
  },
  setup() {},
});
</script>

<style></style>
