<template>
  <div class="py-24 px-2">
    <!-- feedbacks from client -->
    <h3
      class="xl:text-6xl lg:text-4xl text-3xl font-extrabold text-center mb-8 md:mb-12 xl:mb-20"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      What others say about us?
    </h3>
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 max-w-screen-xl mx-auto">
      <!-- quote - start -->
      <div
        v-for="item in cardDetails"
        :key="item"
        class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        data-aos="fade-up"
        :data-aos-duration="item.animationDuration"
        data-aos-easing="linear"
      >
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            :src="item.imageUrl"
          />
        </div>

        <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{{ item.heading }}</h2>

        <p class="mt-2 text-gray-600 dark:text-gray-200">
          {{ item.subheading }}
        </p>

        <div class="flex justify-end mt-4">
          <a class="text-xl font-medium text-blue-500 dark:text-blue-300">{{ item.name }}</a>
        </div>
      </div>
      <!-- <div
        class="flex flex-col items-center bg-gradient-to-br from-indigo-300 via-white to-indigo-100 shadow-md rounded-lg gap-4 md:gap-6 px-8 py-6"
      >
        <div class="max-w-md lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

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
      </div> -->
      <!-- quote - end -->

      <!-- quote - start -->
      <!-- <div
        class="flex flex-col items-center bg-gradient-to-br from-indigo-300 via-white to-indigo-100 shadow-md rounded-lg gap-4 md:gap-6 px-8 py-6"
      >
        <div class="max-w-md lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

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
      </div> -->
      <!-- quote - end -->
    </div>
  </div>
</template>
<script lang="ts">
  import peopleCoffee from "../assets/negative-space-man-coffee-sun.jpg";
  export default {
    props: {
      cardDetails: {
        type: Array,
        default: [
          {
            imageUrl: peopleCoffee,
            heading: "I don't need to queue and wait at the store",
            subheading:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
            name: "John Doe",
          },
          {
            imageUrl: peopleCoffee,
            heading: "Safer option as it is less expose to the crowd",
            subheading:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
            name: "John Doe",
          },
        ],
      },
    },
  };
</script>
