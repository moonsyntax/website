// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },
});