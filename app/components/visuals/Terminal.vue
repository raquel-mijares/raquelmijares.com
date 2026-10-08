<script setup lang="ts">
const specs = [
  'contacts no tracker before a decision',
  'writes no non-essential cookies before a decision',
  'rejecting keeps everything off',
  'accepting does load analytics',
  'rejecting costs the same as accepting',
  'loads no third-party tags even after accepting',
  'sends no PII to third parties in the signup flow',
  'the URL carries no identifiers',
]
</script>

<template>
  <div class="v">
    <span class="tag">npm run test:e2e</span>
    <ul>
      <li v-for="s in specs" :key="s"><span class="ok">✓</span>{{ s }}</li>
    </ul>
    <div class="sum">
      <span><b>29</b> <span class="tag">unit</span></span>
      <span><b>18</b> <span class="tag">end to end</span></span>
      <span class="tag">passing in CI</span>
    </div>
  </div>
</template>

<style scoped>
.v {
  position: absolute;
  inset: 0;
  padding: 9% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.55em;
  font-family: var(--mono);
  font-size: 0.88em;
}

.ok {
  display: inline-block;
  width: 1.6em;
  color: var(--accent);
}

.sum {
  display: flex;
  align-items: baseline;
  gap: 1.6em;
  padding-top: 1em;
  border-top: 1px solid var(--d-line);
}

.sum b {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 2.2em;
  line-height: 1;
}

.sum > .tag {
  margin-left: auto;
}
</style>
