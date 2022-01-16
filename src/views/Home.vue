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
          data-aos-easing="ease-in"
          data-aos-delay="200"
        >
          What are you waiting for?
        </p>
        <p
          class="xl:text-5xl md:text-3xl sm:text-2xl md:mb-7 mb-2 font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-delay="400"
        >
          Book your appointment now!
        </p>
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-delay="600"
          data-aos-once="true"
          @click="goToSaloon"
          class="viewBtn"
        >
          View Available Saloons
        </button>
      </div>
      <div
        class="w-full sm:w-1/2 h-72 sm:h-full"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <img src="../assets/negative-space-woman-in-window-closeup.jpg" alt="woman peting a cat" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="py-28 flex flex-col" id="ourVision">
      <div class="vision" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <p class="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-extrabold md:mb-5 mb-3">Our Vision</p>
        <p class="max-w-xl xl:text-2xl lg:text-xl md:w-7/12" id="ourAim">
          To provide a platform for people to book their door to door hair saloon serivce. Save time and less hassle.
        </p>
      </div>
      <div class="aim mt-28" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <p class="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-extrabold md:mb-5 mb-3">Our Aim</p>
        <p class="max-w-xl xl:text-2xl lg:text-xl text-right md:w-7/12">
          To utilize our platform to help others provide their service to the customer in a more efficient and covinient way and to overcome
          the struggles that aris during the pandemic
        </p>
      </div>
    </div>
    <Features :features="features" />
    <Feedback :card-details="feedbacks" />
    <div class="location" id="ourOffice">
      <div
        class="flex flex-col lg:flex-row lg:items-center md:justify-around justify-center bg-white px-7 md:px-16 lg:px-0 py-10 lg:py-20 rounded-3xl md:max-w-6xl mx-auto shadow-lg"
      >
        <div
          class="flex flex-col items-start"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
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
        <div
          class="h-full flex justify-center lg:justify-start items-center mt-10 lg:mt-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
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
  import Feedback from "../components/Feedback.vue";
  import peopleCoffee from "../assets/negative-space-man-coffee-sun.jpg";
  import girlWithGlass from "../assets/negative-space-womans-steampunk-sunglasses.jpg";
  import { BookmarkIcon, CalendarIcon, ShieldCheckIcon, TrendingUpIcon, LightningBoltIcon, UserIcon } from "@heroicons/vue/outline";
  AOS.init();

  export default defineComponent({
    setup() {
      const goToSaloon = () => router.push("/saloon");
      const feedbacks = [
        {
          imageUrl: peopleCoffee,
          heading: "Don't need to queue and wait at the store",
          subheading:
            "Getting my hair done without leaving my doorstep! I have always wanted to have this kind of experience. The hairstylist are very professional and they also keep the SOP due to the pandemic. Keeping customer safe while providing their services.",
          name: "John Doe",
          animationDuration: 1000,
        },
        {
          imageUrl: girlWithGlass,
          heading: "Comfortable and clean",
          subheading:
            "I had a great time having my hair done. They brought all their equipments required to your doorstep and provide door-to-door service. How cool is that! The hairstylists are really professional and friendly and they give great advice and tips. Definitely will book again!",
          name: "Elise Megan",
          animationDuration: 1200,
        },
      ];
      const features = [
        {
          icon: BookmarkIcon,
          title: "Easy to book",
          description: "You can make your booking anytime within your fingertips.",
          animationDuration: 1000,
        },
        {
          icon: CalendarIcon,
          title: "Choose your date",
          description: "You can choose your prefer date and time!",
          animationDuration: 1300,
        },
        {
          icon: ShieldCheckIcon,
          title: "Safer Option",
          description: "Nowadays the pandemic is getting worse and people are afraid to go out.",
          animationDuration: 1600,
        },
        {
          icon: TrendingUpIcon,
          title: "High demand",
          description: "This is the future trend of saloon operation.",
          animationDuration: 1900,
        },
        {
          icon: LightningBoltIcon,
          title: "Saves time",
          description: "You don't need to drive and queue. How cool is that!",
          animationDuration: 2100,
        },
        {
          icon: UserIcon,
          title: "Services",
          description: "We provide all kind of services same as what we have in our saloon.",
          animationDuration: 2400,
        },
      ];
      return { goToSaloon, feedbacks, features };
    },
    components: { Reviews, Features, Feedback },
  });
</script>

<style scoped></style>
