<template>
  <header
      class="max-w-screen-lg m-16 mx-auto bg-opacity-20"
  >
    <GameCamvas class="w-full h-full"/>
    <div class="text-wrapper flex flex-row justify-center font-bungee text-3xl font-bold">
      <span style="--i:8">IN</span>
      <span> </span>
      <span style="--i:9">  P</span>
      <span style="--i:10">R</span>
      <span style="--i:11">O</span>
      <span style="--i:12">G</span>
      <span style="--i:13">R</span>
      <span style="--i:14">E</span>
      <span style="--i:15">S</span>
      <span style="--i:16">S</span>
    </div>
  </header>
</template>

<style scoped>

span {
  position: relative;
  display: inline-block;
  letter-spacing: 10px;
  animation: waveAnim 3s infinite;
  animation-delay: calc(.1s * var(--i));
}

@keyframes waveAnim {
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-3rem);
  }
}

</style>
