<template>
  <p>{{ json }}</p>
  <section>
    <Tile content="Showcase🔥🔥" />
    <TitledSection
      title="Works"
      class="text-primary-dark tracking-wide font-semibold text-lg"
    >
      <Container
        width="max-w-screen-sm"
        class="flex flex-row justify-evenly flex-wrap gap-x-6 gap-y-14"
      >
      </Container>
    </TitledSection>
  </section>
</template>

<script>
const json = ref("Hello World");
</script>
