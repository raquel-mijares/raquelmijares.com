<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project, size?: 'thumb' | 'hero' }>()

const covers: Record<string, Component> = {
  checkout: resolveComponent('CoversCheckout') as Component,
  consent: resolveComponent('CoversConsent') as Component,
  console: resolveComponent('CoversConsole') as Component,
  dialogs: resolveComponent('CoversDialogs') as Component,
  auth: resolveComponent('CoversAuth') as Component,
  beacons: resolveComponent('CoversBeacons') as Component,
  terminal: resolveComponent('CoversTerminal') as Component,
  schema: resolveComponent('CoversSchema') as Component,
  audit: resolveComponent('CoversAudit') as Component,
}

const style = computed(() => {
  const c = props.project.cover
  return {
    'viewTransitionName': `cover-${props.project.slug}`,
    'viewTransitionClass': 'cover',
    '--from': c.from,
    '--via': c.via,
    '--to': c.to,
  }
})
</script>

<template>
  <div class="cover" :class="[size ?? 'thumb', { dark: project.cover.dark }]" :style="style" aria-hidden="true">
    <div class="grain" />
    <div class="stage">
      <component :is="covers[project.visual]" />
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  aspect-ratio: 4 / 3;
  background:
    radial-gradient(120% 90% at 0% 0%, var(--from) 0%, transparent 60%),
    radial-gradient(90% 90% at 100% 100%, var(--via) 0%, transparent 65%),
    var(--to);
  isolation: isolate;
  container-type: inline-size;
}

.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.05);
  pointer-events: none;
}

.cover.hero {
  aspect-ratio: 16 / 10;
}

.grain {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.22;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}

.dark .grain {
  mix-blend-mode: screen;
  opacity: 0.12;
}

.stage {
  position: absolute;
  inset: 0;
  font-size: 1.62cqw;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  transform-origin: 70% 70%;
}

.hero .stage {
  font-size: 1.3cqw;
}
</style>
