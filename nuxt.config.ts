// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Overpass|Bebas+Neue&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/styles/index.scss"],
  devtools: { enabled: false },
  modules: ["@vueuse/nuxt"],
});
