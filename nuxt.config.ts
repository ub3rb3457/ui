// https://nuxt.com/docs/api/configuration/nuxt-config
import plugins from './vueI18n.vitePlugin'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@vueuse/nuxt"],
  content: {
    documentDriven: {
      injectPage: false
    },
    markdown: {
      anchorLinks: true
    }
  },
  vite: {
    plugins
  }
})