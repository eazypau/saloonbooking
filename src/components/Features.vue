<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-4xl lg:text-4xl xl:text-6xl font-extrabold text-center mb-4 md:mb-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          Why choose us?
        </h2>

        <!-- <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          What makes us different than a average hair saloon? Our services 
        </p> -->
      </div>
      <!-- text - end -->

      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
        <!-- feature - start -->
        <div
          v-for="item in features"
          :key="item"
          class="flex flex-col items-center"
          data-aos="fade-up"
          :data-aos-duration="item.animationDuration"
          data-aos-easing="ease-in-out"
        >
          <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
            <component :is="item.icon" class="w-full h-full"></component>
          </div>

          <h3 class="text-lg md:text-xl font-semibold text-center mb-2">{{ item.title }}</h3>
          <p class="text-gray-500 text-center mb-2">
            {{ item.description }}
          </p>
          <!-- <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a> -->
        </div>
        <!-- feature - end -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    props: {
      features: {
        type: Array,
      },
    },
  };
</script>
