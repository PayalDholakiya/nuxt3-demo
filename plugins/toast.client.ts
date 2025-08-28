// plugins/toast.client.ts
import Toast, { type PluginOptions, useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    icon: true,
  }

  // Initialize the Toast plugin
  nuxtApp.vueApp.use(Toast, options)

  // Provide 'useToast' globally via Nuxt app context
  nuxtApp.provide('toast', useToast())  // This is the key step
})
