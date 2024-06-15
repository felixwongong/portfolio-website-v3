<template>
  <section>
    <Tile content="Showcase🔥🔥" />
    <TitledSection
      title="Works"
      class="text-primary-dark tracking-wide font-semibold text-lg"
    >
      <div class="w-full flex flex-row flex-wrap gap-x-8">
        <div class="card w-80 glass" v-for="work in workData" :key="work.id">
          <figure>
            <img :src="work.imageUrl" alt="workImage" class="w-full" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ work.name }}</h2>
            <p>{{ work.shortDescription }}</p>
            <div class="card-actions justify-end">
              <nuxt-link :to="work.link" class="btn btn-primary"
                >Play Now!</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </TitledSection>
  </section>
</template>

<script setup>
import { ref } from "vue";
import workJson from "~/assets/devdata/works.json";

const workData = ref(workJson);
console.log(workData.value);
</script>
