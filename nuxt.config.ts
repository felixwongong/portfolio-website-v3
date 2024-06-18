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
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          integrity:
            "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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