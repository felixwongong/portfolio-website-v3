<template>
  <div
    class="flex flex-col space-y-2 items-center py-6 text-primary-dark font-thin"
  >
    <div>
      <NuxtLink
        to="/"
        class="text-primary-dark font-bold text-lg antialiased flex flex-row items-center dark:bg-darkSecondary px-2 rounded-md"
      >
        <div class="w-8">
          <img
            src="/img/coffee.gif"
            class="object object-scale-down my-auto dark:invert-[.75]"
          />
        </div>
        <h2>Felix Wong</h2>
      </NuxtLink>
    </div>
    <NuxtLink to="/credit">Credit</NuxtLink>
    <div>Created by Felix, Wong Yuen Lam</div>
  </div>
</template>
<script>
import Container from "./Container.vue";
export default {
  components: { Container },
};
</script>
