<script setup lang="ts">
const tables = [
  { name: 'Tenant', x: 10, y: 22, fields: ['id', 'name'] },
  { name: 'RevenueCenter', x: 36, y: 44, fields: ['tenantId', 'name', 'isDefault'], key: true },
  { name: 'Event', x: 66, y: 18, fields: ['revenueCenterId', 'date'] },
  { name: 'ProductionSheet', x: 66, y: 60, fields: ['eventId', 'revenueCenterId'] },
]
</script>

<template>
  <div class="v">
    <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 20 38 C 20 52, 28 54, 36 54" />
      <path d="M 60 50 C 64 50, 62 28, 66 28" />
      <path d="M 60 58 C 64 58, 62 70, 66 70" />
      <path d="M 78 37 L 78 60" class="dash" />
    </svg>
    <span class="tag cap">Data model</span>
    <div
      v-for="t in tables"
      :key="t.name"
      class="node tbl"
      :class="{ key: t.key }"
      :style="{ left: `${t.x}%`, top: `${t.y}%` }"
    >
      <div class="n">{{ t.name }}</div>
      <div v-for="f in t.fields" :key="f" class="tag">{{ f }}</div>
    </div>
    <div class="parts">
      <span v-for="n in 9" :key="n" />
      <span class="tag">Shipped in nine parts</span>
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

.tbl {
  position: absolute;
  min-width: 10.5em;
  padding: 0;
}

.tbl > * {
  padding: 0.3em 0.8em;
}

.n {
  font-weight: 600;
  padding-top: 0.55em;
  padding-bottom: 0.45em;
  border-bottom: 1px solid var(--d-line);
}

.tbl .tag:last-child {
  padding-bottom: 0.6em;
}

.parts {
  position: absolute;
  left: 10%;
  bottom: 9%;
  display: flex;
  align-items: center;
  gap: 0.35em;
}

.parts span:not(.tag) {
  width: 1.1em;
  height: 1.1em;
  border-radius: 2px;
  background: var(--d-ink);
}

.parts .tag {
  margin-left: 0.8em;
}
</style>
