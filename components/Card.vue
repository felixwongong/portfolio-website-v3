<template>
  <div
    class="card"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  @apply rounded-2xl border-dashed border-2 flex flex-row justify-between self-center shadow-2xl;
}
</style>
