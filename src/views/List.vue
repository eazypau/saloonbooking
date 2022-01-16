<template>
  <div class="flex justify-center">
    <Loading v-if="isLoading" />
    <transition name="window">
      <div v-if="needUser" class="popOutWindow">
        <div class="cancelWindow">
          <div class="absolute right-2 top-2">
            <button @click="needUser = false">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-square h-6" viewBox="0 0 16 16">
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <h1 class="mb-3 text-center">Please log in to continue:</h1>
          <div class="flex justify-around">
            <router-link class="loginBtn" to="/login">Login</router-link>
            <router-link class="registerBtn" to="/register">Register</router-link>
          </div>
        </div>
      </div>
    </transition>
    <div class="my-10 lg:w-5/12 md:w-8/12 w-10/12">
      <div class="md:text-3xl text-2xl font-bold border-b-2 pb-2 mb-3">
        <h1>List of Saloon Available</h1>
      </div>
      <div>
        <div v-for="(item, index) in saloonList" :key="index" class="card">
          <SaloonCard :saloonName="item.name" :saloonWorkingHour="item.workingHour" :saloonAddress="item.shopAddress" />
          <div>
            <button
              @click="isLogin ? (visible = true) : (needUser = true), (indexOfDoc = index)"
              class="py-1 md:px-4 px-2 md:text-base text-sm rounded-md border-2 border-indigo-400 bg-indigo-400 text-white hover:bg-indigo-100 hover:text-black hover:border-black ease-in-out duration-500"
            >
              Book Now
            </button>
          </div>
          <transition name="window">
            <div v-if="visible" class="popOutWindow">
              <div class="bookingWindow">
                <div class="absolute right-2 top-2">
                  <button @click="clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-square h-6" viewBox="0 0 16 16">
                      <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mb-5">
                  <h1 class="sm:text-2xl text-xl font-bold pb-2 border-b-2 border-black mb-2">
                    {{ saloonList[indexOfDoc].name }}
                  </h1>
                  <p class="text-sm">
                    {{ saloonList[indexOfDoc].workingHour }}
                  </p>
                  <p class="text-sm">
                    {{ saloonList[indexOfDoc].shopAddress }}
                  </p>
                </div>
                <div class="border-2 border-black py-2 px-4 rounded-md md:text-base text-sm">
                  <div class="font-semibold underline mb-3">
                    <h1>HairCut Appointment Booking</h1>
                  </div>
                  <div class="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 mb-2 overflow-scroll md:h-auto h-40">
                    <div class="flex flex-col items-start md:col-span-1">
                      <div class="flex flex-col mb-1">
                        <label for="pax">No. of people:</label>
                        <select class="border rounded-md p-1 bg-white border-black" name="pax" id="pax" v-model="pax" required>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div class="flex flex-col">
                        <label for="type">Type of Service</label>
                        <select class="border rounded-md p-1 bg-white border-black" name="type" id="type" v-model="type" required>
                          <option value="Hair Cut">Hair Cut</option>
                          <option value="Dye Hair">Dye Hair</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex flex-col md:col-span-2 md:justify-self-center justify-self-start">
                      <div class="flex flex-col">
                        <label for="date">Date:</label>
                        <input class="border-black rounded-md md:w-max w-36" type="date" v-model="date" required />
                      </div>
                      <div class="flex flex-col">
                        <label for="time">Time:</label>
                        <input class="bg-white border-black rounded-md max-w-max" type="time" name="time" v-model="time" required />
                      </div>
                    </div>
                    <div class="flex flex-col sm:col-span-2">
                      <label for="address">Address:</label>
                      <textarea
                        class="border rounded-md p-1 bg-white border-black"
                        name="address"
                        id="address"
                        cols="25"
                        rows="3"
                        placeholder="Please enter your address"
                        v-model="address"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      @click="
                        completeBooking(
                          saloonList[indexOfDoc].id,
                          saloonList[indexOfDoc].name,
                          saloonList[indexOfDoc].startTime,
                          saloonList[indexOfDoc].endTime
                        )
                      "
                      class="bookBtn"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
  import { key } from "../store/store";
  import { useStore } from "vuex";
  import { getAuth, onAuthStateChanged } from "@firebase/auth";
  import { saveUserBooking } from "../firebase/firebase";
  import Loading from "../components/Loading.vue";

  const SaloonCard = defineAsyncComponent({
    loader: () => import("../components/SaloonCard.vue"),
    loadingComponent: Loading,
    delay: 200,
  });

  export default defineComponent({
    components: { SaloonCard, Loading },
    async created() {
      this.isLoading = true
      await this.$store.dispatch("getSaloonDirectory");
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      });
      this.isLoading = false
    },
    data() {
      return {
        pax: 1,
        type: "Hair Cut",
        time: "",
        date: "",
        address: "",
        isLogin: false,
        needUser: false,
        isLoading: false,
      };
    },
    methods: {
      clear() {
        this.visible = false;
        this.pax = 1;
        this.type = "Hair Cut";
        this.date = "";
        this.time = "";
        this.address = "";
      },
      completeBooking(saloonBookedId: string, saloonBookedName: string, saloonStartTime: string, saloonEndTime: string) {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            const userEmail = user.email;

            const timeArr = this.time.split(":");
            const frtTimeArr = Number(timeArr[0]);
            const sndTimeArr = Number(timeArr[1]);
            const startArr = saloonStartTime.split(":");
            const frtStartArr = Number(startArr[0]);
            const sndStartArr = Number(startArr[1]);
            const endArr = saloonEndTime.split(":");
            const frtEndArr = Number(endArr[0]);
            const sndEndArr = Number(endArr[1]);
            // console.log(frtEndArr, sndEndArr);
            // console.log("Start at: ", startArr);
            // console.log("End at: ", endArr);
            // console.log("this is the booked time: ", timeArr);

            const dateArr = this.date.split("-");
            const dateArrYear = Number(dateArr[0]);
            const dateArrMonth = Number(dateArr[1]);
            const dateArrDay = Number(dateArr[2]);
            // console.log(dateArrDay + "-" + dateArrMonth + "-" + dateArrYear);
            const ts = new Date();
            const day = Number(ts.getDay());
            const month = Number(ts.getMonth());
            const year = Number(ts.getFullYear());
            // console.log(day + "-" + month + "-" + year);

            if (this.date === "" || this.address === "" || this.time === "") {
              alert("Please provide the time, date and address...");
              return;
            }
            if (dateArrYear > year) {
              alert("Please choose the correct year...");
              return;
            }
            if (dateArrMonth < month) {
              alert("Please choose the correct month...");
              return;
            }
            if (dateArrMonth === month && dateArrDay < day) {
              alert("Please choose the correct day...");
              return;
            }
            if (frtTimeArr < frtStartArr || frtTimeArr > frtEndArr) {
              alert("Please choose the appointment time within working hour...");
              return;
            }
            if (frtTimeArr === frtStartArr && sndTimeArr < sndStartArr) {
              alert("Please choose the appointment time within working hour...");
              return;
            }
            if (frtTimeArr === frtEndArr && sndTimeArr > sndEndArr) {
              alert("Please choose the appointment time within working hour...");
              return;
            }
            const addBookingDetails = saveUserBooking(
              uid,
              userEmail,
              this.pax,
              this.type,
              this.date,
              this.time,
              this.address,
              saloonBookedId,
              saloonBookedName
            );
            this.visible = false;
            this.pax = 1;
            this.type = "Hair Cut";
            this.date = "";
            this.time = "";
            this.address = "";
            alert("Successfully Booked Appointment...");
          } else {
            console.log("Failed to save booking...");
          }
        });
      },
    },
    setup() {
      const store = useStore(key);
      const saloonList = computed(() => store.state.listOfSaloon);
      let visible = ref(false);

      return { saloonList, visible };
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
