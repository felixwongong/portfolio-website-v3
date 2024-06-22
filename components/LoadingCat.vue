<template>
  <div class="flex flex-col items-center">
    <img class="pixelate w-40" :src="catJump" />
    <div>Loading</div>
    <span class="loading loading-bars loading-lg"></span>
  </div>
</template>

<script setup>
import catJump from "~/assets/cat/jump.gif";
</script>
