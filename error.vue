<template>
  <NuxtLayout>
    <Tile :content="error.statusMessage" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
const { characterState, setState } = useCharacterState();

const props = defineProps({
  error: Object as () => NuxtError,
});

setState("Sit");
</script>
