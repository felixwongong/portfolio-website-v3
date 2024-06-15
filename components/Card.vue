<template>
  <div
    class="card"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  @apply bg-light dark:bg-darkPrimary rounded-2xl border-dashed border-2 border-dark flex flex-row justify-between self-center shadow-2xl;
}
</style>
