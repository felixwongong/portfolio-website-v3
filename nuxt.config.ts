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
    PUBLIC_FIREBASE_API_KEY: "null",
    PUBLIC_FIREBASE_AUTH_DOMAIN: "null",
    PUBLIC_FIREBASE_PROJECT_ID: "null",
    PUBLIC_FIREBASE_STORAGE_BUCKET: "null",
    PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "null",
    PUBLIC_FIREBASE_APP_ID: "null",
    PUBLIC_FIREBASE_MEASUREMENT_ID: "null",
  },

  compatibilityDate: "2024-08-19",
});
