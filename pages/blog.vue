<template>
  <TitledSection
    title="Blogs"
    class="text-primary-dark tracking-wide font-semibold text-lg"
    v-motion="{ initial: initial, enter: enter }"
  ></TitledSection>
</template>

<script setup>
const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});
</script>
