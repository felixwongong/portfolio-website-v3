<template>
  <Card
    class="w-max my-2 py-2 px-5 tracking-wide font-semibold link-card border-secondary"
    id=""
    @mouseover="cardHover = true"
    @mouseleave="cardHover = false"
  >
    <div :class="{ 'animate-bounce': cardHover }">
      <font-awesome class="fa-2x" :icon="fa" />
    </div>
    <div class="w-10"></div>
    <a :href="href" target="_blank" class="my-auto">{{ hrefInfo }}</a>
  </Card>
</template>

<style scoped>
.link-card {
  margin-right: 0.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      cardHover: false,
    };
  },
  props: ["href", "fa", "hrefInfo"],
};
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
