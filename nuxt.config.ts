// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','@nuxt/image' ,'@vite-pwa/nuxt'],
  css: ['../assets/css/tailwind.css'],
  plugins: ['~/plugins/toast.client.ts'],
  app: {
    head: {
      title: 'Rubicx E-Commerce',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Shop App',
      short_name: 'Shop',
      description: 'A fast, offline-ready shopping app',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
    },
    devOptions: {
      enabled: true, // enables PWA in dev mode
    },
  },
})
