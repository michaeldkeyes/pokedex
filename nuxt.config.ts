// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
