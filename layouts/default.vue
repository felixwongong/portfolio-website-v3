<template>
  <SpeedInsights />
  <div class="transition ease-in-out font-rain">
    <Header />
    <Hero v-if="heroState" />
    <div v-else class="h-16" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const { heroState } = useHeroState();
</script>
