<script setup lang="ts">
import type { Theme } from '~/data/design-system'

defineProps<{ theme: Theme }>()
</script>

<template>
  <div class="d-stage" aria-hidden="true">
    <div class="d-backdrop" :style="{ backgroundImage: `url(${theme.image})` }" />
    <div class="d-overlay" />
    <div class="d-box">
      <span class="d-title">Sign out?</span>
      <span class="d-text">You’ll need to sign in again to keep watching on this device.</span>
      <div class="d-actions">
        <span class="d-btn secondary">Cancel</span>
        <span class="d-btn primary">Sign out</span>
      </div>
    </div>
  </div>
</template>
