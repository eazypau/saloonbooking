import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    count: number;
    name: string;
    email: string;
    phoneNum: string;
    listOfSaloon: string[];
    selectedSaloon: string[];
    listOfBooking: string[];
    deletedId: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
