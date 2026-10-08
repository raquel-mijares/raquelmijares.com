<script setup lang="ts">
const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

const url = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [{ rel: 'canonical', href: url }],
  meta: [{ property: 'og:url', content: url }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
