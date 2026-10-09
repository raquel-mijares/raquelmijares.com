<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { sharedTokens, type Theme } from '~/data/design-system'

defineProps<{ theme: Theme }>()
</script>

<template>
  <div class="tokens">
    <div class="tk-head" aria-hidden="true">
      <span>Used by the component</span>
      <span />
      <span>Set by {{ theme.label }}</span>
      <span />
      <span>Value</span>
    </div>
    <ul class="tk-rows">
      <li v-for="c in theme.chain" :key="c.component" class="tk-row">
        <code class="tk-code">{{ c.component }}</code>
        <ArrowRight class="tk-arrow" aria-label="points to" />
        <code class="tk-code brand">{{ c.brand }}</code>
        <ArrowRight class="tk-arrow" aria-label="which is" />
        <span class="tk-value">
          <span v-if="c.swatch" class="tk-swatch" :style="{ background: c.swatch }" />
          {{ c.value }}
        </span>
      </li>
    </ul>
    <p class="tk-shared-label">Shared by both brands</p>
    <ul class="tk-rows">
      <li v-for="t in sharedTokens" :key="t.name" class="tk-row shared">
        <code class="tk-code">{{ t.name }}</code>
        <span class="tk-value">{{ t.px }}px</span>
      </li>
    </ul>
  </div>
</template>
