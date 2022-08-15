import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  treeshakeClientOnly: true,
  router: {
    prefetchLinks: false,
  },
  vite: {
    server: {
      proxy: {
        '/api/': 'https://jsonplaceholder.typicode.com/',
      },
    },
  }
})
