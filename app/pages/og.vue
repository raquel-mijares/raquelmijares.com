<script setup lang="ts">
import { projects } from '~/data/projects'

definePageMeta({ layout: false })

if (!import.meta.dev) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
useSeoMeta({ robots: 'noindex' })
provide('eagerPhotos', true)

const console = projects.find(p => p.slug === 'broadcast-console')!
const checkout = projects.find(p => p.slug === 'subscription-checkout')!
</script>

<template>
  <div class="og">
    <div class="text">
      <div class="id">
        <img src="/images/raquel.webp" alt="" class="avatar">
        <div>
          <div class="name">Raquel Mijares</div>
          <div class="role">Senior Frontend Developer, Calgary</div>
        </div>
      </div>
      <p class="headline">I take products from a rough idea to production, and leave the code easier to work in than I found it.</p>
      <p class="url">raquelmijares.com</p>
    </div>
    <div class="art">
      <div class="back"><ProjectCover :project="checkout" /></div>
      <div class="front"><ProjectCover :project="console" /></div>
    </div>
  </div>
</template>

<style scoped>
.og {
  width: 1200px;
  height: 630px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 560px 1fr;
  align-items: center;
  gap: 32px;
  padding: 0 0 0 72px;
  background: #ffffff;
  color: #111111;
  font-family: var(--sans);
}

.id {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #ebebeb;
}

.name {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.role {
  margin-top: 4px;
  font-size: 20px;
  color: #5c5c5c;
}

.headline {
  margin: 48px 0 0;
  font-size: 40px;
  font-weight: 500;
  text-wrap: balance;
  line-height: 1.12;
  letter-spacing: -0.025em;
}

.url {
  margin: 40px 0 0;
  font-size: 20px;
  color: #5c5c5c;
}

.art {
  position: relative;
  height: 100%;
}

.back,
.front {
  position: absolute;
  width: 560px;
}

.back {
  top: 40px;
  left: 120px;
  opacity: 0.95;
}

.front {
  top: 250px;
  left: 20px;
  box-shadow: 0 30px 60px -20px rgb(0 0 0 / 0.35);
  border-radius: 14px;
}
</style>
