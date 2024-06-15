<template>
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
        <div class="card w-96 glass" v-for="work in workData" :key="work.id">
          <figure>
            <img :src="work.imageUrl" alt="car!" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ work.name }}</h2>
            <p>{{ work.shortDescription }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Play Now!</button>
            </div>
          </div>
        </div>
      </Container>
      <WorkTimeline />
    </TitledSection>
  </section>
</template>

<script setup>
import { ref } from "vue";
import workJson from "~/assets/devdata/works.json";

const workData = ref(workJson);
console.log(workData.value);
</script>
