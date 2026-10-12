<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { THEME_STORAGE_KEY, themeColor, type ThemeName } from '~/data/theme'

const dark = ref<boolean>()
const chosen = ref<ThemeName>()

useHead({
  meta: computed(() => {
    if (!chosen.value) return []
    const content = themeColor[chosen.value]
    return (['light', 'dark'] as const).map(scheme => ({ name: 'theme-color', media: `(prefers-color-scheme: ${scheme})`, content }))
  }),
})

const root = () => document.documentElement
const sync = () => {
  dark.value = root().dataset.theme === 'dark'
}

let observer: MutationObserver | undefined

onMounted(() => {
  sync()
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') chosen.value = stored
  }
  catch {}
  observer = new MutationObserver(sync)
  observer.observe(root(), { attributes: true, attributeFilter: ['data-theme'] })
})

onBeforeUnmount(() => observer?.disconnect())

function toggle() {
  const theme: ThemeName = dark.value ? 'light' : 'dark'
  root().dataset.theme = theme
  chosen.value = theme
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
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
