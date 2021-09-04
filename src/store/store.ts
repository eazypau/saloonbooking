import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth";
import {
  doc,
  getDoc,
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// define your typings for the store state
export interface State {
  count: number;
  name: string;
  email: string;
  phoneNum: string;
  listOfSaloon: string[];
  selectedSaloon: object[];
  listOfBooking: object[];
  deletedId: string;
  isLogin: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    name: "",
    email: "",
    phoneNum: "",
    listOfSaloon: [],
    selectedSaloon: [],
    listOfBooking: [],
    deletedId: "",
    isLogin: false,
  },
  getters: {},
  mutations: {
    showUserName(state, payload) {
      state.name = payload;
    },
    showUserEmail(state, payload) {
      state.email = payload;
    },
    showUserAddress(state, payload) {
      state.phoneNum = payload;
    },
    changedNewName(state, payload) {
      state.name = payload;
    },
    changedNewEmail(state, payload) {
      state.email = payload;
    },
    changedNewAddress(state, payload) {
      state.phoneNum = payload;
    },
    loginStatus(state, payload) {
      state.isLogin = payload;
    }
  },
  actions: {
    getCurrentUser({ commit }) {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "Profile", uid);
          const getUser = await getDoc(docRef);
          const userData: any = getUser.data();
          // console.log(userData.name);
          commit("showUserName", userData.name);
          commit("showUserEmail", userData.email);
          commit("showUserAddress", userData.phoneNumber);
          // state.name = userData.name
          // console.log("the state right now is: ",state.name);
        } else {
          console.log("Failed to access user document...");
        }
      });
    },
    updateUserProfile({ state }) {
      const auth = getAuth();
      const userOnline: any = auth.currentUser;
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "Profile", uid);
          const updateUserDoc = await updateDoc(docRef, {
            name: state.name,
            email: state.email,
            phoneNumber: state.phoneNum,
          });
          if (updateUserDoc !== null) {
            // await dispatch("getCurrentUser");
            console.log("Successfully update profile!");
            alert("Successfully update user profile!");
          } else {
            console.log("Failed to update user profile...");
            alert("Failed to update user profile!");
          }
        } else {
          console.log("Failed to update user profile...");
          alert("Failed to update user profile!");
        }
      });
      updateEmail(userOnline, state.email)
        .then(() => {
          console.log("Successfully update user email...");
        })
        .catch((error) => {
          console.log("Error message: ", error);
        });
    },
    async getSaloonDirectory({ state }) {
      state.listOfSaloon = [];
      const querySnapshot = await getDocs(collection(db, "Saloons"));
      querySnapshot.forEach((doc) => {
        let snapShot: object = doc.data();
        state.listOfSaloon.push(snapShot);
      });
      console.log("Successfully read from Saloons collection...");
    },
    async getBookingDirectory({ state }) {
      state.listOfBooking = [];
      const bookingCollection = collection(db, "Bookings");
      // const querySnapshot = await getDocs(collection(db, "Bookings"))
      const auth = getAuth();
      const user: any = auth.currentUser;
      const uid = user.uid;
      const q = query(bookingCollection, where("userId", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let snapShot: object = doc.data();
        state.listOfBooking.push(snapShot);
      });
      console.log("Successfully read from Bookings collection...");
      // console.log(state.listOfBooking);
    },
    async deleteAppointment({ state }, index: number) {
      const deleteAppDoc = await deleteDoc(
        doc(db, "Bookings", state.deletedId)
      );
      if (deleteAppDoc !== null) {
        console.log("Successfully delete appointment...");
        state.listOfBooking.splice(index, 1);
      } else {
        console.log("Failed to delete appointment...Please try again later...");
      }
    },
  },
});
