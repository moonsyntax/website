// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/content'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },
});
