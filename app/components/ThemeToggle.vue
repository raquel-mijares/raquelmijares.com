<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const dark = ref<boolean>()
const chosen = ref<'light' | 'dark'>()

useHead({
  meta: computed(() => {
    if (!chosen.value) return []
    const content = chosen.value === 'dark' ? '#0f0f0f' : '#ffffff'
    return ['light', 'dark'].map(scheme => ({ name: 'theme-color', media: `(prefers-color-scheme: ${scheme})`, content }))
  }),
})

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

onMounted(() => {
  const set = document.documentElement.dataset.theme
  dark.value = set ? set === 'dark' : systemDark()
  if (set === 'light' || set === 'dark') chosen.value = set
})

function toggle() {
  dark.value = !dark.value
  const theme = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  chosen.value = theme
  try {
    localStorage.setItem('theme', theme)
  }
  catch {}
}
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    aria-label="Dark mode"
    :aria-pressed="dark"
    @click="toggle"
  >
    <Moon class="icon moon" aria-hidden="true" />
    <Sun class="icon sun" aria-hidden="true" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg);
  color: var(--ink-2);
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s, border-color 0.15s;
}

.theme-toggle:hover {
  color: var(--ink);
  background: var(--hover);
}

.icon {
  grid-area: 1 / 1;
  width: 16px;
  height: 16px;
}
</style>
