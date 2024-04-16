// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "./assets/meta/favicon.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap",
        },
      ],
    },
  },
  components: ["~/components/", "~/components/app", "~/components/content", "~/components/widgets"],
  css: ["~/assets/styles/index.scss"],
  devtools: { enabled: false },
  modules: ["@vueuse/nuxt"],
});
