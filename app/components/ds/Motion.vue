<script setup lang="ts">
import { motion } from '~/data/design-system'

defineOptions({ inheritAttrs: false })

const playing = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

function play() {
  playing.value = false
  clearTimeout(timer)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    playing.value = true
    timer = setTimeout(() => {
      playing.value = false
    }, 1400)
  }))
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div class="motion">
    <button type="button" class="t-btn primary play" @click="play">Play</button>
    <div v-for="m in motion" :key="m.name" class="mo-row">
      <div class="mo-text">
        <code class="sp-name">{{ m.name }} · {{ m.ms }}ms</code>
        <span class="sp-use">{{ m.easingName }} easing. {{ m.use }}</span>
      </div>
      <div class="mo-track" aria-hidden="true">
        <span
          class="mo-dot"
          :class="{ go: playing }"
          :style="{ transitionDuration: `${m.ms}ms`, transitionTimingFunction: m.easing }"
        />
      </div>
    </div>
  </div>
</template>
