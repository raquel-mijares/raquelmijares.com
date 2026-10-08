import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) return
  inject({ mode: 'production' })
})
