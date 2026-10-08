import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  modules: ['shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  features: {
    inlineStyles: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Raquel Mijares · Senior Frontend Developer, Calgary',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Raquel Mijares, senior frontend developer in Calgary. I take products from a rough idea to production, and leave the code easier to work in than I found it.',
        },
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0f0f0f', media: '(prefers-color-scheme: dark)' },
        { property: 'og:title', content: 'Raquel Mijares' },
        { property: 'og:description', content: 'Senior frontend developer in Calgary. I take products from a rough idea to production, and leave the code easier to work in than I found it.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://raquelmijares.com/og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Raquel Mijares, Senior Frontend Developer, Calgary' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://raquelmijares.com/og.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preload', href: '/fonts/hanken.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
    },
  },
  $production: {
    routeRules: {
      '/**': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          'Content-Security-Policy': [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data:",
            "font-src 'self'",
            "connect-src 'self'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            'upgrade-insecure-requests',
          ].join('; '),
        },
      },
      '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400' } },
      '/og.jpg': { headers: { 'Cache-Control': 'public, max-age=86400' } },
      '/apple-touch-icon.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
      '/raquel-mijares-resume.pdf': { headers: { 'Cache-Control': 'public, max-age=3600' } },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://raquelmijares.com',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
      ignore: ['/og'],
    },
  },
})
