<script setup lang="ts">
import type { Theme } from '~/data/design-system'

defineProps<{ theme: Theme }>()

const states = [
  { id: 'default', label: 'Normal' },
  { id: 'hover', label: 'Hover' },
  { id: 'focus', label: 'Keyboard' },
  { id: 'disabled', label: 'Disabled' },
  { id: 'loading', label: 'Loading' },
] as const

const variants = [
  { id: 'primary', label: 'Main' },
  { id: 'secondary', label: 'Second' },
  { id: 'ghost', label: 'Subtle' },
] as const
</script>

<template>
  <div class="matrix" aria-hidden="true">
    <span class="corner" />
    <span v-for="s in states" :key="s.id" class="m-head" :class="`col-${s.id}`">{{ s.label }}</span>
    <template v-for="v in variants" :key="v.id">
      <span class="m-head row-head">{{ v.label }}</span>
      <span v-for="s in states" :key="s.id" class="m-cell" :class="`col-${s.id}`">
        <span class="t-btn" :class="[v.id, `is-${s.id}`]">
          <span class="t-btn-label">{{ v.id === 'primary' ? theme.copy.primary : theme.copy.secondary }}</span>
          <span v-if="s.id === 'loading'" class="spinner" />
        </span>
      </span>
    </template>
  </div>
</template>
