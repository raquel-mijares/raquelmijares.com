import tailwindcss from '@tailwindcss/vite'
import { themeBootScript, themeColor } from './app/data/theme'

export default defineNuxtConfig({
  modules: ['shadcn-nuxt', '@nuxt/eslint'],
  $production: {
    routeRules: {
      '/**': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          'Content-Security-Policy': [
            'default-src \'self\'',
            'script-src \'self\' \'unsafe-inline\'',
            'style-src \'self\' \'unsafe-inline\'',
            'img-src \'self\' data:',
            'font-src \'self\'',
            'connect-src \'self\'',
            'object-src \'none\'',
            'base-uri \'self\'',
            'form-action \'self\'',
            'frame-ancestors \'none\'',
            'upgrade-insecure-requests',
          ].join('; '),
        },
      },
      '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400' } },
      '/og.jpg': { headers: { 'Cache-Control': 'public, max-age=86400' } },
      '/apple-touch-icon.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    },
  },
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Raquel Mijares · Senior Software Developer, Calgary',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Senior software developer in Calgary: payments, privacy and the screens people use every day.',
        },
        { name: 'theme-color', content: themeColor.light, media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: themeColor.dark, media: '(prefers-color-scheme: dark)' },
        { property: 'og:title', content: 'Raquel Mijares' },
        { property: 'og:description', content: 'Senior software developer in Calgary: payments, privacy and the screens people use every day.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://raquelmijares.com/og.jpg?v=2' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Raquel Mijares, Senior Software Developer, Calgary' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://raquelmijares.com/og.jpg?v=2' },
      ],
      script: [
        {
          innerHTML: themeBootScript,
          tagPosition: 'head',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preload', href: '/fonts/hanken.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
    },
  },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://raquelmijares.com',
    },
  },
  features: {
    inlineStyles: true,
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2026-10-01',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
      ignore: ['/og'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
