<template>
  <div
    class="max-w-lg mx-auto bg-accent py-4 px-2 text-center text-accent-content rounded-md"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>
