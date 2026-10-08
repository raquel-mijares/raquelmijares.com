<script setup lang="ts">
defineProps<{ src: string, title: string }>()
</script>

<template>
  <div class="kt">
    <CoversPhoto :src="src" />
    <span class="shade" />
    <span class="name">{{ title }}</span>
  </div>
</template>

<style scoped>
.kt {
  isolation: isolate;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  aspect-ratio: 16 / 10;
  background: #eef2ff;
}

.kt :deep(.frame) {
  background: #eef2ff;
}

.shade {
  position: absolute;
  inset: 55% 0 0 0;
  z-index: 1;
  background: linear-gradient(180deg, transparent, rgb(15 23 42 / 0.4));
}

.name {
  position: absolute;
  left: 0.6em;
  bottom: 0.5em;
  z-index: 2;
  color: #fff;
  font-weight: 800;
  font-size: 0.85em;
  letter-spacing: -0.01em;
  text-shadow: 0 0.1em 0.3em rgb(0 0 0 / 0.35);
}
</style>
