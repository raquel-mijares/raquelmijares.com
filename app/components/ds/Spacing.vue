<script setup lang="ts">
import { spacing } from '~/data/design-system'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="spacing">
    <div v-for="sp in spacing" :key="sp.name" class="sp-row">
      <code class="sp-name">{{ sp.name }}</code>
      <span class="sp-px">{{ sp.px }}px</span>
      <span class="sp-bar" :style="{ width: `${sp.px * 3}px` }" />
      <span class="sp-use">{{ sp.use }}</span>
    </div>
  </div>
</template>
