<script setup lang="ts">
import type { Theme } from '~/data/design-system'

defineProps<{ theme: Theme }>()
</script>

<template>
  <div class="t-card" aria-hidden="true">
    <div class="t-art" :style="{ backgroundImage: `url(${theme.image})` }">
      <span class="t-pill">{{ theme.copy.eyebrow }}</span>
    </div>
    <div class="t-card-body">
      <span class="t-title">{{ theme.copy.title }}</span>
      <span class="t-muted">{{ theme.copy.body }}</span>
      <div class="t-progress"><span /></div>
      <div class="t-actions">
        <span class="t-btn primary">{{ theme.copy.primary }}</span>
        <span class="t-btn secondary">{{ theme.copy.secondary }}</span>
      </div>
    </div>
  </div>
</template>
