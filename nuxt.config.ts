import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  ssr: false,
  imports: {
    autoImport: true,
  },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],
  runtimeConfig: {
    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID || '',
      twitchClientSecret: process.env.TWITCH_CLIENT_SECRET || '',
      twitchApiUrl: process.env.TWITCH_API_URL || 'https://api.twitch.tv/helix',
    },
  },
  css: ['@/assets/reset.scss', '@/assets/variables.css'],
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
