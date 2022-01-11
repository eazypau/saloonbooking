<template>
  <div class="flex flex-col min-h-screen">
    <NavBar class="sticky top-0 z-20" />
    <router-view class="flex-1" v-slot="{ Component }">
      <transition appear name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import NavBar from "../components/NavBar.vue";
  import Footer from "../components/Footer.vue";
  export default defineComponent({
    components: { NavBar, Footer },
  });
</script>
