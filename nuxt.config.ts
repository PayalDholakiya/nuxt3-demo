// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','@nuxt/image'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/tailwind.css', 'aos/dist/aos.css'],
  plugins: ['@/plugins/toast.client.ts'],
  app: {
    head: {
      title: 'Rubicx E-Commerce',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
})
