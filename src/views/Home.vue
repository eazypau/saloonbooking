<template>
  <div>
    <div class="header">
      <p
        class="
          2xl:text-5xl
          xl:text-4xl
          lg:text-3xl
          md:text-2xl
          sm:text-xl
          font-semibold
          md:mb-2
        "
        data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"
      >
        Hair Cut At Your Door Step
      </p>
      <p
        class="
          2xl:text-8xl
          xl:text-7xl
          lg:text-6xl
          md:text-5xl
          sm:text-4xl
          text-2xl
          md:mb-10
          mb-5
          font-bold
        "
        data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200"
      >
        What are you waiting for?
      </p>
      <p
        class="
          2xl:text-6xl
          xl:text-5xl
          lg:text-4xl
          md:text-3xl
          sm:text-2xl md:mb-7
          mb-2
          font-semibold
        "
        data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400"
      >
        Book your appointment now!
      </p>
      <button data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600" data-aos-once="true" @click="goToSaloon" class="viewBtn">View Available Saloons</button>
    </div>
    <div class="w-screen h-screen flex flex-col" id="ourVision">
      <div class="vision" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <p
          class="
            xl:text-6xl
            lg:text-4xl
            md:text-3xl
            text-lg
            font-bold
            md:mb-5
            mb-3
          "
        >
          Our Vision
        </p>
        <p class="xl:text-2xl lg:text-xl md:w-7/12 text-sm">
          To provide a platform for people to book their door to door hair
          saloon serivce.
        </p>
      </div>
      <div class="aim" id="ourAim" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <p
          class="
            xl:text-6xl
            lg:text-4xl
            md:text-3xl
            text-lg
            font-bold
            md:mb-5
            mb-3
          "
        >
          Our Aim
        </p>
        <p class="xl:text-2xl lg:text-xl text-right md:w-7/12 text-sm">
          To utilize our platform to help others provide their service to the
          customer in a more efficient and covinient way and to overcome the
          struggles that aris during the pandemic
        </p>
      </div>
    </div>
    <div class="location" id="ourOffice">
      <div class="flex flex-col items-start" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div>
          <p class="md:text-4xl text-xl font-bold md:mb-10 mb-4">Our Office</p>
        </div>
        <div class="lg:text-lg mb-5">
          <p>Address:</p>
          <p class="md:w-96">
            Lot 0, Jalan Angkasa ABC, 75350 Batu Ice Kosong, Malacca
          </p>
        </div>
        <div class="lg:text-lg">
          <p>Office Number:</p>
          <p>+6012345678910</p>
        </div>
      </div>
      <div class="h-full flex items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true">
        <!-- <img class="h-1/2 rounded-lg" src="..\assets\location.JPG" alt="" /> -->
        <div class="md:h-80 rounded-lg bg-location bg-cover bg-center md:w-80 h-60 w-60"></div>
      </div>
    </div>
    <div class="md:pl-16 pl-5 py-5">
      <p class="font-semibold">Note: This is a personal project. Not a full working website.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from "../router/router";
AOS.init();

export default defineComponent({
  components: {},
  setup() {
    const goToSaloon = () => router.push('/saloon')

    return {goToSaloon }
  },
});
</script>

<style scoped>
</style>
