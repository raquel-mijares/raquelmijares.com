<script setup lang="ts">
import { typeScale, type Theme } from '~/data/design-system'

const props = defineProps<{ theme: Theme }>()

const sample = computed<Record<string, string>>(() => ({
  display: props.theme.copy.title,
  title: 'Tonight at 7:05 PM',
  body: props.theme.copy.body,
  label: `${props.theme.copy.eyebrow} · ${props.theme.brand}`,
}))
</script>

<template>
  <div class="type">
    <p class="type-font">Font: {{ theme.fontNote }}</p>
    <div v-for="t in typeScale" :key="t.id" class="spec">
      <span class="spec-label">
        {{ t.label }}
        <span class="spec-meta">{{ t.spec }}</span>
      </span>
      <span :class="`t-${t.id}`">{{ sample[t.id] }}</span>
    </div>
  </div>
</template>
