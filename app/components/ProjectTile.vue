<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()

const visuals: Record<string, Component> = {
  checkout: resolveComponent('VisualsCheckout') as Component,
  consent: resolveComponent('VisualsConsent') as Component,
  console: resolveComponent('VisualsConsole') as Component,
  dialogs: resolveComponent('VisualsDialogs') as Component,
  auth: resolveComponent('VisualsAuth') as Component,
  beacons: resolveComponent('VisualsBeacons') as Component,
  terminal: resolveComponent('VisualsTerminal') as Component,
  schema: resolveComponent('VisualsSchema') as Component,
  audit: resolveComponent('VisualsAudit') as Component,
}
</script>

<template>
  <div class="tile" aria-hidden="true">
    <div class="art">
      <component :is="visuals[project.visual]" />
    </div>
  </div>
</template>

<style scoped>
.tile {
  position: relative;
  aspect-ratio: 5 / 4;
  overflow: hidden;
  background: var(--d-bg);
  color: var(--d-ink);
  container-type: inline-size;
}

.art {
  position: absolute;
  inset: 0;
  font-size: 2.3cqw;
}
</style>
