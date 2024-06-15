<template>
  <p>{{json}}</p>
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
<!--        <WorkCard-->
<!--          v-for="(work, i) in works"-->
<!--          :key="i"-->
<!--          :id="work.id"-->
<!--          :imageUrl="work.image"-->
<!--          :workName="work.name"-->
<!--          :description="work.shortDescription"-->
<!--          :workLinkName="work.linkName"-->
<!--          :workLink="work.link"-->
<!--          :slug="work.slug"-->
<!--        />-->
      </Container>
    </TitledSection>
  </section>
</template>

<script>
const json = ref("Hello World");


</script>
