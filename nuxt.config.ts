// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/content'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag),
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Moon Syntax',
      meta: [
        { hid: 'description', name: 'description', content: 'The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.' },
        { hid: 'og:title', property: 'og:title', content: 'Moon Syntax' },
        { hid: 'og:description', property: 'og:description', content: 'The decentralized organization thats shaking up the world of blockchain startups. With a focus on developing, managing, and funding cutting-edge projects, our team of experts delivers unparalleled support and guidance.' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Moon Syntax' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: 'https://moonsyntax.com/banner.png' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://moonsyntax.com/banner.png' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  }
});
