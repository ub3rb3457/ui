// https://nuxt.com/docs/api/configuration/nuxt-config
import plugins from './vueI18n.vitePlugin'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/content"],
  content: {
    documentDriven: {
      injectPage: false
    }
  },
  vite: {
    plugins: plugins
  }
})