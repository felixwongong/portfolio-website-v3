<template>
  <section>
    <Tile content="Showcase🔥🔥" />

    <div v-if="pending">
      <div class="flex flex-col items-center">
        <img class="pixelate w-40" :src="catJump" />
        <div>Loading</div>
        <span class="loading loading-bars loading-lg"></span>
      </div>
    </div>
    <TitledSection
      v-else
      title="Works"
      class="text-primary-dark tracking-wide font-semibold text-lg"
      v-motion="{ initial: initial, enter: enter }"
    >
      <div class="w-full flex flex-row flex-wrap gap-x-8 gap-y-10">
        <div class="card w-80 glass" v-for="work in data.works" :key="work.id">
          <figure>
            <img :src="work.imageUrl" alt="workImage" class="w-full" />
          </figure>
          <div class="card-body pt-4">
            <div class="w-full">
              <span
                class="badge badge-outline badge-secondary mr-2"
                v-for="s in work.Stack"
                :key="s"
              >
                {{ s }}
              </span>
            </div>
            <h2 class="card-title">{{ work.name }}</h2>
            <p>{{ work.shortDescription }}</p>
            <div class="card-actions justify-end">
              <div class="tooltip tooltip-top" :data-tip="work.status">
                <nuxt-link :to="work.link" class="btn btn-primary">{{
                  work.linkName
                }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TitledSection>
  </section>
</template>

<script setup>
const { pending, data: data } = await useLazyFetch("/api/works");
import catJump from "~/assets/cat/jump.gif";

const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});
</script>
