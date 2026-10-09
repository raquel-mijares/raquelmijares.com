<script setup lang="ts">
import { themes, type ThemeId } from '~/data/design-system'
import DsButtons from './ds/Buttons.vue'
import DsCard from './ds/Card.vue'
import DsColors from './ds/Colors.vue'
import DsDialog from './ds/Dialog.vue'
import DsForms from './ds/Forms.vue'
import DsMotion from './ds/Motion.vue'
import DsSpacing from './ds/Spacing.vue'
import DsTokens from './ds/Tokens.vue'
import DsType from './ds/Type.vue'
import './ds/ds.css'

interface Story { id: string, label: string, caption: string, view: Component }

const groups: { label: string, stories: Story[] }[] = [
  {
    label: 'Components',
    stories: [
      { id: 'dialog', label: 'Dialog', caption: 'The dialog I built. Same component, each brand’s colors and font.', view: DsDialog },
      { id: 'card', label: 'Card', caption: 'One card, two brands. Switch brands above to compare.', view: DsCard },
      { id: 'buttons', label: 'Buttons', caption: 'Every button in every state, including loading.', view: DsButtons },
      { id: 'forms', label: 'Forms', caption: 'Type an incomplete email to see the error state.', view: DsForms },
    ],
  },
  {
    label: 'Foundations',
    stories: [
      { id: 'tokens', label: 'Tokens', caption: 'Components only use the names on the left. Each brand fills in its own values.', view: DsTokens },
      { id: 'colors', label: 'Colors', caption: 'Every text color is checked for readability against its background.', view: DsColors },
      { id: 'type', label: 'Type', caption: 'One type scale for both brands. Each brand sets its own font.', view: DsType },
      { id: 'spacing', label: 'Spacing', caption: 'The standard 4px spacing scale used by Tailwind, Material and Polaris.', view: DsSpacing },
      { id: 'motion', label: 'Motion', caption: 'Standard animation speeds and curves. Press Play to compare them.', view: DsMotion },
    ],
  },
]

const stories = groups.flatMap(g => g.stories)

const themeId = ref<ThemeId>('victory')
const storyId = ref('dialog')
const tabs = ref<HTMLButtonElement[]>([])

const theme = computed(() => themes[themeId.value])
const story = computed(() => stories.find(s => s.id === storyId.value)!)

const vars = computed(() => {
  const t = theme.value
  return {
    ...Object.fromEntries(Object.entries(t.colors).map(([k, v]) => [`--t-${k}`, v])),
    '--t-input-radius': t.inputRadius,
    '--t-page': t.page,
    '--t-case': t.caps ? 'uppercase' : 'none',
    '--t-font': t.fontFamily,
  }
})

function onKey(e: KeyboardEvent) {
  const i = stories.findIndex(s => s.id === storyId.value)
  const next: Record<string, number> = {
    ArrowDown: i + 1,
    ArrowRight: i + 1,
    ArrowUp: i - 1,
    ArrowLeft: i - 1,
    Home: 0,
    End: stories.length - 1,
  }
  if (!(e.key in next)) return
  e.preventDefault()
  const n = (next[e.key]! + stories.length) % stories.length
  storyId.value = stories[n]!.id
  tabs.value[n]?.focus()
}
</script>

<template>
  <div class="ds">
    <div class="toolbar">
      <p class="crumb muted">Try a brand</p>
      <div class="themes" role="group" aria-label="Brand">
        <button
          v-for="t in themes"
          :key="t.id"
          type="button"
          class="theme"
          :aria-pressed="themeId === t.id"
          @click="themeId = t.id"
        >
          <span class="dot" :style="{ background: t.colors.primary, boxShadow: `0 0 0 3px ${t.colors.bg}` }" />
          {{ t.label }}
        </button>
      </div>
    </div>

    <div class="body">
      <div class="tree" role="tablist" aria-label="Examples" aria-orientation="vertical" @keydown="onKey">
        <template v-for="g in groups" :key="g.label">
          <p class="group-label" role="presentation">{{ g.label }}</p>
          <button
            v-for="s in g.stories"
            :id="`ds-tab-${s.id}`"
            :key="s.id"
            ref="tabs"
            type="button"
            role="tab"
            class="story"
            :aria-selected="storyId === s.id"
            :tabindex="storyId === s.id ? 0 : -1"
            aria-controls="ds-panel"
            @click="storyId = s.id"
          >
            {{ s.label }}
          </button>
        </template>
      </div>

      <div
        id="ds-panel"
        class="canvas"
        role="tabpanel"
        :aria-labelledby="`ds-tab-${storyId}`"
        :style="vars"
      >
        <Transition name="swap" mode="out-in">
          <div :key="storyId" class="frame">
            <component :is="story.view" :theme="theme" />
          </div>
        </Transition>
      </div>
    </div>

    <p class="addon muted" aria-live="polite">{{ story.caption }}</p>
  </div>
</template>
