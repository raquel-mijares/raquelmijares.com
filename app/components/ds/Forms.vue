<script setup lang="ts">
import type { Theme } from '~/data/design-system'

defineProps<{ theme: Theme }>()

const email = ref('')
const invalid = computed(() => email.value.length > 0 && !/^\S+@\S+\.\S+$/.test(email.value))
</script>

<template>
  <div class="field-story">
    <label class="t-field">
      <span class="t-field-label">{{ theme.copy.field }}</span>
      <input
        v-model="email"
        type="email"
        class="t-input"
        :class="{ invalid }"
        :placeholder="theme.copy.placeholder"
        :aria-invalid="invalid"
        aria-describedby="ds-field-help"
      >
      <span id="ds-field-help" class="t-help" :class="{ err: invalid }">
        {{ invalid ? 'That doesn’t look like an email yet.' : 'Type something to see the error state.' }}
      </span>
    </label>
  </div>
</template>
