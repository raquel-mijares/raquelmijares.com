<script setup lang="ts">
import { deliveryFlow } from '~/data/design-system'
</script>

<template>
  <section aria-labelledby="system" class="section breakout">
    <div class="col head">
      <h2 id="system">Design system</h2>
      <p class="muted">
        Victory+ and Kidoodle.TV shared one codebase. Buttons, dialogs and forms were the same
        components; each brand only changed the colors, fonts and corners. Switch brands below to
        see it. I built the dialog system both apps used,
        <NuxtLink to="/work/dialog-system" class="link">here’s how</NuxtLink>.
      </p>
    </div>
    <div class="wide">
      <DesignSystem />
    </div>
    <ol class="flow wide">
      <li v-for="(f, i) in deliveryFlow" :key="f.title">
        <span class="step">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="title">{{ f.title }}</span>
        <span class="muted">{{ f.text }}</span>
      </li>
    </ol>
    <p class="col muted note">
      Colors and sizes are the brands’ real tokens, taken from the live Kidoodle.TV site and the
      last public build of Victory+.
    </p>
  </section>
</template>

<style scoped>
.flow {
  list-style: none;
  padding: 0;
  margin: var(--space-group) auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-block);
}

.flow li {
  display: grid;
  align-content: start;
  gap: var(--space-pair);
  padding-top: var(--space-item);
  border-top: 1px solid var(--line);
}

.flow .muted {
  font-size: var(--text-sm);
  text-wrap: pretty;
}

.step {
  color: var(--accent);
  font-family: var(--mono);
  font-size: 12px;
}

.note {
  margin-top: var(--space-block);
  margin-bottom: 0;
  font-size: var(--text-sm);
}

@media (max-width: 720px) {
  .flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
