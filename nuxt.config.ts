// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@nuxt/image',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/tailwind.css', 
    'aos/dist/aos.css',
  ],
  plugins: ['@/plugins/toast.client.ts'],
  app: {
    head: {
      title: 'Rubicx E-Commerce',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
  imports: {
    dirs: ['composables', 'components'],
  },
  components: [
    { path: '~/components', pathPrefix: false }, // Register the specific icons folder
  ],
  build: {
    transpile: ['vue-toastification'],
    extractCSS: true,  // Extract CSS into separate files for better caching
    optimization: {
      splitChunks: {
        maxSize: 300000, // Adjust chunk size for optimization
      },
    },
  },
  image: {
    provider: 'static', // Ensure optimized image delivery
    domains: ['cdn.dummyjson.com'], // Add image domains
  },
  buildModules: ['@nuxt/image'],
})
