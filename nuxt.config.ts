import { inject } from "@vercel/analytics";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  imports: {
    dirs: ["composables", "composables/**/kontra"],
  },
  modules: ["@vueuse/motion/nuxt", "@vesp/nuxt-fontawesome", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fontawesome: {
    icons: {
      solid: ["hand-lizard"],
      brands: ["github", "instagram", "youtube", "itch-io", "node-js"],
    },
  },
  build: {
    transpile: ["kontra", "daisyui"],
  },
  runtimeConfig: {
    FIREBASE_API_KEY: "null",
    FIREBASE_AUTH_DOMAIN: "null",
    FIREBASE_PROJECT_ID: "null",
    FIREBASE_STORAGE_BUCKET: "null",
    FIREBASE_MESSAGING_SENDER_ID: "null",
    FIREBASE_APP_ID: "null",
    FIREBASE_MEASUREMENT_ID: "null",
  },
});
