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

  modules: [
    "@vueuse/motion/nuxt",
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "@nuxtjs/mdc",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fontawesome: {
    icons: {
      solid: ["hand-lizard"],
      brands: [
        "github",
        "instagram",
        "youtube",
        "itch-io",
        "node-js",
        "linkedin",
      ],
    },
  },

  build: {
    transpile: ["kontra", "daisyui"],
  },

  runtimeConfig: {
    FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
  },

  compatibilityDate: "2024-08-19",
});
