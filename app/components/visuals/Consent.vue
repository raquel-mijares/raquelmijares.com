<script setup lang="ts">
const steps: [string, string, boolean?][] = [
  ['HTML', 'Consent defaults set to denied', true],
  ['GTM', 'Tag Manager loads'],
  ['GTM', 'Checks defaults, fires nothing'],
  ['CMP', 'Banner asks the user'],
  ['USER', 'Accepts or rejects'],
  ['CMP', 'Sends the choice to gtag'],
  ['GTM', 'Fires only what was allowed'],
]
</script>

<template>
  <div class="v">
    <span class="tag cap">Page load, in order</span>
    <ol>
      <li v-for="([who, what, hot], i) in steps" :key="i" :class="{ hot }">
        <span class="tag who">{{ who }}</span>
        <span class="dot" />
        <span class="what">{{ what }}</span>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.v {
  position: absolute;
  inset: 0;
  padding: 9% 10%;
  display: flex;
  flex-direction: column;
}

ol {
  position: relative;
  list-style: none;
  margin: auto 0;
  padding: 0;
  display: grid;
  gap: 1.15em;
}

ol::before {
  content: '';
  position: absolute;
  left: calc(4.2em + 0.3em);
  top: 0.7em;
  bottom: 0.7em;
  width: 1px;
  background: var(--d-line);
}

li {
  display: grid;
  grid-template-columns: 4.2em 0.6em 1fr;
  gap: 0 1.1em;
  align-items: center;
}

.dot {
  position: relative;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background: var(--d-bg);
  border: 1px solid var(--d-ink);
}

.hot .dot {
  background: var(--accent);
  border-color: var(--accent);
}

.hot .what {
  color: var(--accent);
}

.what {
  font-size: 1.05em;
}
</style>
