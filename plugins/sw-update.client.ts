// plugins/sw-update.client.ts
import { registerSW } from 'virtual:pwa-register'

export default defineNuxtPlugin(() => {
  const updateSW = registerSW({
    onNeedRefresh() {
      if (confirm('A new version is available. Reload now?')) {
        updateSW(true)
      }
    },
    onOfflineReady() {
      console.log('App is ready to work offline')
    }
  })
})
