<template>
  <Container>
    <section>
      <div class="mx-auto my-8 md:my-4 md:block flex justify-start">
        <h2 class="title">{{ title }}</h2>
      </div>
      <slot />
    </section>
  </Container>
</template>

<script>

export default {
  props: ["title"],
};
</script>

