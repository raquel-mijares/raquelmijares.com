<script setup lang="ts">
import { Check, Copy } from 'lucide-vue-next'
import { colorTokens, contrast, contrastPairs, grade, type Theme } from '~/data/design-system'

const props = defineProps<{ theme: Theme }>()

const copied = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

const pairs = computed(() =>
  contrastPairs.map((p) => {
    const ratio = contrast(props.theme.colors[p.fg]!, props.theme.colors[p.bg]!)
    return { ...p, ratio: ratio.toFixed(2), grade: grade(ratio) }
  }),
)

async function copy(name: string) {
  try {
    await navigator.clipboard.writeText(props.theme.colors[name]!)
    copied.value = name
    clearTimeout(timer)
    timer = setTimeout(() => {
      copied.value = ''
    }, 1400)
  }
  catch {
    copied.value = ''
  }
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div class="colors">
    <ul class="swatches">
      <li v-for="c in colorTokens" :key="c.name">
        <button type="button" class="swatch" :aria-label="`${c.role}, ${theme.colors[c.name]}. Copy`" @click="copy(c.name)">
          <span class="chip" :style="{ background: c.name === 'bg' ? theme.page : theme.colors[c.name] }" />
          <span class="sw-text">
            <span class="sw-name">{{ c.role }}</span>
            <span class="sw-meta">{{ c.name === 'bg' ? theme.pageLabel : theme.colors[c.name] }}</span>
          </span>
          <Check v-if="copied === c.name" class="sw-icon" aria-hidden="true" />
          <Copy v-else class="sw-icon" aria-hidden="true" />
        </button>
      </li>
    </ul>
    <ul class="pairs">
      <li v-for="p in pairs" :key="p.label">
        <span class="sample" :style="{ background: `var(--t-${p.bg})`, color: `var(--t-${p.fg})` }">Aa</span>
        <span class="pair-label">{{ p.label }}</span>
        <span class="ratio">{{ p.ratio }}:1</span>
        <span class="grade" :class="{ fail: p.grade === 'Fail' }">{{ p.grade }}</span>
      </li>
    </ul>
    <p class="note" aria-live="polite">{{ copied ? `Copied ${theme.colors[copied]}` : 'Click a color to copy it.' }}</p>
  </div>
</template>
