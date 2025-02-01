import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],

  // 🔹 Archivos CSS globales
  css: ['@/assets/reset.scss', '@/assets/variables.css'],

  // 🔹 Configuración de SCSS en Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/mixins.scss" as *;`,
        },
      },
    },
  },
})
