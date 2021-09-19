<template>
  <div>
    <h1 class="md:text-xl sm:text-base text-sm font-semibold mb-2">
      Name: {{ saloonName }}
    </h1>
    <p class="sm:text-sm text-xs">Working Hour: {{ saloonWorkingHour }}</p>
    <p class="sm:text-sm text-xs">Location: {{ saloonAddress }}</p>
  </div>
</template>

<script>
export default {
  props: {
    saloonName: String,
    saloonWorkingHour: String,
    saloonAddress: String,
  },
};
</script>

<style></style>
