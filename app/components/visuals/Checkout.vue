<script setup lang="ts">
const entries = ['Home banner', 'Team page', 'Player paywall', 'Promo link', 'Deep link', 'Account']
const ys = entries.map((_, i) => 22 + i * 11.2)
</script>

<template>
  <div class="v">
    <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path v-for="(y, i) in ys" :key="i" :d="`M 40 ${y} C 50 ${y}, 50 50, 60 50`" />
    </svg>
    <span class="tag cap">Before: six ways in</span>
    <span
      v-for="(e, i) in entries"
      :key="e"
      class="node entry"
      :style="{ top: `${ys[i]}%` }"
    >{{ e }}</span>
    <div class="node key target">
      <div class="t">Checkout</div>
      <div class="row"><span>plans</span><span class="tag">config</span></div>
      <div class="row"><span>prices</span><span class="tag">API</span></div>
      <div class="row"><span>payment</span><span class="tag">Stripe</span></div>
    </div>
  </div>
</template>

<style scoped>
.v {
  position: absolute;
  inset: 0;
}

.cap {
  position: absolute;
  left: 10%;
  top: 9%;
}

.entry {
  position: absolute;
  left: 10%;
  width: 30%;
  transform: translateY(-50%);
}

.target {
  position: absolute;
  left: 60%;
  top: 50%;
  width: 30%;
  transform: translateY(-50%);
  padding: 0.9em 1em;
}

.t {
  font-weight: 600;
  margin-bottom: 0.6em;
}

.row {
  display: flex;
  justify-content: space-between;
  padding: 0.35em 0;
  border-top: 1px solid var(--d-line);
}
</style>
