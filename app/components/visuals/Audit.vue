<script setup lang="ts">
const rows = [
  { name: 'Access review', a: 0.5, b: 0.9 },
  { name: 'Encryption at rest', a: 0.8, b: 0.8 },
  { name: 'Vendor risk', a: 0.3, b: 0.7 },
  { name: 'Incident response', a: 0.6, b: 0.85 },
  { name: 'Change management', a: 0.45, b: 0.75 },
]
</script>

<template>
  <div class="v">
    <span class="tag">SOC 2 · ISO 27001 · GDPR · HIPAA</span>
    <div class="grid">
      <span />
      <span class="tag">Last audit</span>
      <span class="tag">This audit</span>
      <template v-for="r in rows" :key="r.name">
        <span class="n">{{ r.name }}</span>
        <span class="bar"><i :style="{ width: `${r.a * 100}%` }" /></span>
        <span class="bar now"><i :style="{ width: `${r.b * 100}%` }" /></span>
      </template>
    </div>
    <span class="tag">Evidence compared between audit cycles</span>
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

.grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 1.15em 1.4em;
  align-items: center;
}

.bar {
  height: 0.45em;
  background: var(--d-line);
}

.bar i {
  display: block;
  height: 100%;
  background: var(--d-muted);
}

.bar.now i {
  background: var(--d-ink);
}
</style>
