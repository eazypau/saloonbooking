<template>
  <div>
    <div class="header">
      <div class="flex-1 flex flex-col justify-center sm:w-1/2 px-10 2xl:px-24 py-16">
        <p
          class="xl:text-7xl sm:text-4xl text-2xl mb-3 md:mb-6 font-extrabold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Hair Cut At Your Door Step
        </p>
        <p
          class="xl:text-5xl md:text-3xl sm:text-2xl font-bold md:mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          What are you waiting for?
        </p>
        <p
          class="xl:text-5xl md:text-3xl sm:text-2xl md:mb-7 mb-2 font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          Book your appointment now!
        </p>
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
          data-aos-once="true"
          @click="goToSaloon"
          class="viewBtn"
        >
          View Available Saloons
        </button>
      </div>
      <div class="w-full sm:w-1/2 h-72 sm:h-full">
        <img src="../assets/negative-space-woman-in-window-closeup.jpg" alt="woman peting a cat" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="py-28 flex flex-col" id="ourVision">
      <div class="vision" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <p class="xl:text-6xl lg:text-4xl md:text-3xl text-lg font-extrabold md:mb-5 mb-3">Our Vision</p>
        <p class="max-w-xl xl:text-2xl lg:text-xl md:w-7/12">
          To provide a platform for people to book their door to door hair saloon serivce. Save time and less hassle.
        </p>
      </div>
      <div class="aim mt-28" id="ourAim" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <p class="xl:text-6xl lg:text-4xl md:text-3xl text-lg font-extrabold md:mb-5 mb-3">Our Aim</p>
        <p class="max-w-xl xl:text-2xl lg:text-xl text-right md:w-7/12">
          To utilize our platform to help others provide their service to the customer in a more efficient and covinient way and to overcome
          the struggles that aris during the pandemic
        </p>
      </div>
    </div>
    <Features />
    <div class="py-24">
      <!-- feedbacks from client -->
      <h3 class="xl:text-6xl lg:text-4xl md:text-3xl text-lg font-extrabold text-center mb-8 md:mb-12 xl:mb-20">What others say about us?</h3>
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 max-w-screen-xl mx-auto">
        <!-- quote - start -->
        <div class="flex flex-col items-center bg-gradient-to-br from-indigo-300 via-white to-indigo-100 shadow-md rounded-lg gap-4 md:gap-6 px-8 py-6">
          <div class="max-w-md lg:text-lg text-center">
            “This is a section of some simple filler text, also known as placeholder text.”
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by Radu Florin"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div class="text-sm md:text-base font-bold text-center sm:text-left">John McCulling</div>
              <p class="text-sm md:text-sm text-center sm:text-left">CEO / Datadrift</p>
            </div>
          </div>
        </div>
        <!-- quote - end -->

        <!-- quote - start -->
        <div class="flex flex-col items-center bg-gradient-to-br from-indigo-300 via-white to-indigo-100 shadow-md rounded-lg gap-4 md:gap-6 px-8 py-6">
          <div class="max-w-md lg:text-lg text-center">
            “This is a section of some simple filler text, also known as placeholder text.”
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by christian ferrer"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div class="text-sm md:text-base font-bold text-center sm:text-left">Kate Berg</div>
              <p class="text-sm md:text-sm text-center sm:text-left">CFO / Dashdash</p>
            </div>
          </div>
        </div>
        <!-- quote - end -->
      </div>
    </div>
    <div class="location" id="ourOffice">
      <div
        class="flex flex-col lg:flex-row lg:items-center md:justify-around justify-center bg-white px-7 md:px-16 lg:px-0 py-10 lg:py-20 rounded-3xl md:max-w-6xl mx-auto shadow-lg"
      >
        <div
          class="flex flex-col items-start"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div>
            <p class="md:text-4xl text-xl font-bold md:mb-10 mb-4">Our Office</p>
          </div>
          <div class="mb-4 font-medium">
            <p>Address:</p>
            <p class="md:w-96">Lot 0, Jalan Angkasa ABC, 75350 Batu Ice Kosong, Malacca</p>
          </div>
          <div class="mb-4 font-medium">
            <p>Office Number:</p>
            <p>+6012345678910</p>
          </div>
          <div class="font-medium">
            <p>Fax Number:</p>
            <p>+6012345678910</p>
          </div>
        </div>
        <div class="h-full flex items-center mt-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true">
          <!-- <img class="h-1/2 rounded-lg" src="..\assets\location.JPG" alt="" /> -->
          <div class="md:h-80 rounded-lg bg-location bg-cover bg-center md:w-80 h-60 w-60 shadow-md"></div>
        </div>
      </div>
    </div>
    <!-- <div class="md:pl-16 pl-5 py-5">
      <p class="font-semibold">Note: This is a personal project. Not a full working website.</p>
    </div> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import router from "../router/router";
  import Reviews from "../components/Reviews.vue";
  import Features from "../components/Features.vue";
  AOS.init();

  export default defineComponent({
    setup() {
      const goToSaloon = () => router.push("/saloon");
      return { goToSaloon };
    },
    components: { Reviews, Features },
  });
</script>

<style scoped></style>
