<template>
  <div class="pt-10 flex justify-center">
    <div class="xl:w-6/12 lg:w-8/12 md:w-10/12 w-11/12">
      <div class="flex sm:flex-row flex-col items-center w-full mb-5">
        <div class="w-56 h-56 border-2 rounded-lg relative mb-5 sm:mb-0">
          <div>
            <img :src="profilePic" />
          </div>
          <div
            v-if="uploading"
            class="flex w-full h-full justify-center items-center animate-pulse"
          >
            <p>Uploading...</p>
          </div>
          <div class="absolute -bottom-2 -right-2">
            <p>
              <input
                class="hidden"
                type="file"
                accept="image/*"
                name="image"
                id="file"
                @change="updateProfilePic($event)"
              />
            </p>
            <p>
              <label
                class="
                  bottom-0
                  border-2 border-gray-500
                  rounded-md
                  p-1
                  bg-gray-200
                  text-xs
                  font-semibold
                "
                for="file"
                style="cursor: pointer"
                >Upload Image</label
              >
            </p>
          </div>
        </div>
        <div class="sm:pl-10 sm:pr-5 px-2 flex-grow sm:w-auto w-full">
          <div class="border-b-2 mb-4">
            <h1
              class="
                sm:text-3xl
                text-lg
                font-semibold
                flex
                items-center
                justify-between
              "
            >
              User Information:
              <button @click="showDeleteWindow = true" class="delBtn" id="del">
                Delete Account
              </button>
            </h1>
          </div>
          <transition name="window">
            <div v-if="showDeleteWindow" class="popOutWindow">
              <div class="cancelWindow">
                <h1 class="mb-3 text-center">
                  Are you sure you want to delete this account?
                </h1>
                <div class="flex justify-around">
                  <button class="yesBtn" @click="deleteAcc">Yes</button>
                  <button class="noBtn" @click="showDeleteWindow = false">
                    No
                  </button>
                </div>
              </div>
            </div>
          </transition>
          <div class="sm:text-base text-sm">
            <div class="mr-3">
              <p>
                Name: <span v-if="!show" class="ml-11">{{ name }}</span>
                <input
                  class="ml-11 mb-1"
                  v-if="show"
                  type="text"
                  v-model="name"
                />
              </p>
              <p>
                Email: <span v-if="!show" class="ml-12">{{ email }}</span>
                <input
                  class="ml-12 mb-1"
                  v-if="show"
                  type="text"
                  v-model="email"
                />
              </p>
              <p class="mb-3">
                HP Number: <span v-if="!show" class="">{{ phoneNumber }}</span
                ><input v-if="show" type="text" v-model="phoneNumber" />
              </p>
            </div>
          </div>
          <div>
            <button v-if="!show" @click="editUserDetails" class="editBtn mr-3">
              Edit
            </button>
            <button
              v-if="show"
              @click="updateUserDetails"
              class="updateBtn mr-3"
            >
              Update
            </button>
            <button v-if="show" @click="show = false" class="cancelBtn">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="text-2xl bg-indigo-300 rounded-lg text-center py-2 mb-2">
          <h1>List of Saloon Appointment:</h1>
        </div>
        <div>
          <div v-for="(item, index) in listOfBooking" :key="index" class="card">
            <div>
              <h1 class="md:text-xl sm:text-base text-sm font-semibold mb-2">
                Saloon Name: {{ item.saloonName }}
              </h1>
              <p class="sm:text-sm text-xs">No. of pax: {{ item.pax }}</p>
              <p class="sm:text-sm text-xs">
                Appointment Time & Date: {{ item.dateOfAppointment }},
                {{ item.timeOfAppointment }}
              </p>
              <p class="sm:text-sm text-xs">
                Your Address: {{ item.userAddress }}
              </p>
            </div>
            <div>
              <button
                @click="visible = true"
                class="
                  py-1
                  md:px-4
                  px-2
                  md:text-base
                  text-sm
                  rounded-md
                  border-2 border-indigo-400
                  bg-indigo-400
                  text-white
                  hover:bg-indigo-100 hover:text-black hover:border-black
                  ease-in-out
                  duration-500
                "
              >
                Cancel
              </button>
            </div>
            <transition name="window">
              <div v-if="visible" class="popOutWindow">
                <div class="cancelWindow">
                  <h1 class="mb-3 text-center">
                    Are you sure you want to cancel the appointment?
                  </h1>
                  <div class="flex justify-around">
                    <button class="yesBtn" @click="cancelAppointment(index)">
                      Yes
                    </button>
                    <button class="noBtn" @click="visible = false">No</button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "@firebase/firestore";
import { db, storage, uploadProfileImg } from "../firebase/firebase";
import { getDownloadURL, ref } from "@firebase/storage";

export default defineComponent({
  data() {
    return {
      show: false,
      visible: false,
      showDeleteWindow: false,
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(payload) {
        this.$store.commit("changedNewName", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(payload) {
        this.$store.commit("changedNewEmail", payload);
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.phoneNum;
      },
      set(payload) {
        this.$store.commit("changedNewAddress", payload);
      },
    },
    listOfBooking: function () {
      return this.$store.state.listOfBooking;
    },
    uploading: function () {
      return this.$store.state.loading;
    },
    profilePic: function () {
      return this.$store.state.imgSrc;
    },
  },
  methods: {
    editUserDetails() {
      this.show = true;
    },
    updateUserDetails() {
      this.$store.dispatch("updateUserProfile");
      this.show = false;
    },
    cancelAppointment(index: number) {
      this.$store.state.deletedId = this.listOfBooking[index].docId;
      this.$store.dispatch("deleteAppointment", index);
      this.visible = false;
    },
    deleteAcc() {
      this.showDeleteWindow = false;
      const auth = getAuth();
      const user: any = auth.currentUser;

      deleteUser(user)
        .then(async () => {
          // User deleted.
          await deleteDoc(doc(db, "Profile", user.uid));
          console.log("Account deleted...");
          alert("Successfully deleted account...");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log("Error Message: ", error);
        });
    },
    updateProfilePic(event: any) {
      this.$store.commit("changeImgSrc", "");
      this.$store.commit("loadingStatus", true);
      uploadProfileImg(event.target.files[0]);
    },
  },
  created() {
    // this.$store.commit("loadingStatus", true);
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        await this.$store.dispatch("getCurrentUser");
        await this.$store.dispatch("getBookingDirectory");
        // getDownloadURL(ref(storage, uid))
        //   .then((url) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.responseType = "blob";
        //     xhr.onload = (event) => {
        //       const blob = xhr.response;
        //     };
        //     xhr.open("GET", url);
        //     xhr.send();

        //     // this.profilePic = url;
        //     this.$store.commit("changeImgSrc", url);
        //     this.$store.commit("loadingStatus", false);
        //   })
        //   .catch((error) => {
        //     // Handle any errors
        //     console.log("Error message: ", error);
        //     this.$store.commit("loadingStatus", false);
        //   });
      } else {
        console.log("User is not logged in...");
        // this.$store.commit("loadingStatus", false);
      }
    });
  },
});
</script>

<style>
.window-enter-active,
.window-leave-active {
  transition: opacity 0.5s ease;
}

.window-enter-from,
.window-leave-to {
  opacity: 0;
}
</style>
