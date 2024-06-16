<template>
  <SpeedInsights />
  <div class="transition ease-in-out font-rain">
    <Header />
    <Hero />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
