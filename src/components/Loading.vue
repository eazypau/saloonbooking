<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-200 bg-opacity-60 fixed top-0 z-40">
    <div class="box">
      <div class="coin"></div>
    </div>
  </div>
</template>
<style scoped>
  .box {
    perspective: 120px;
  }

  .coin {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 4px solid #9d43e7;
    animation: spin 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotateY(540deg);
    }
  }
</style>
