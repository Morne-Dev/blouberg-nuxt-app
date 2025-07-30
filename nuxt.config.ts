export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['@/assets/css/style.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint']
})