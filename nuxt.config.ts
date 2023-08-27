// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt3-leaflet'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800]
    }
  }
})
