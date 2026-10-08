<script setup lang="ts">
const rows: [string, string, 'ok' | 'dup', number][] = [
  ['impression', '204', 'ok', 2],
  ['start', '204', 'ok', 6],
  ['firstQuartile', '204', 'ok', 24],
  ['firstQuartile', '—', 'dup', 25],
  ['midpoint', '204', 'ok', 46],
  ['thirdQuartile', '204', 'ok', 68],
  ['complete', '204', 'ok', 90],
  ['complete', '—', 'dup', 91],
]
</script>

<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="tabs"><span class="on">Network</span><span>Console</span></span></div>
      <div class="search mono">beacon</div>
      <div class="net">
        <div class="tr th"><span>Name</span><span>Status</span><span>Type</span><span>Waterfall</span></div>
        <div v-for="(r, i) in rows" :key="i" class="tr" :class="r[2]">
          <span class="mono">{{ r[0] }}</span>
          <span class="mono">{{ r[1] }}</span>
          <span>
            <span v-if="r[2] === 'dup'" class="pill warn">Deduplicated</span>
            <span v-else class="type">ping</span>
          </span>
          <span class="wf"><i :style="{ left: `${r[3]}%` }" /></span>
        </div>
      </div>
      <div class="foot mono">8 requests · 6 sent · 2 deduplicated</div>
    </div>
    <div class="float chip">
      <span class="dot" />
      <div>
        <div class="t">One ad session</div>
        <div class="sub mono">2 tabs · BroadcastChannel</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 1.2em;
  margin-left: 1.4em;
  font-size: 0.82em;
  color: #5b5b64;
}

.tabs .on {
  color: #18181b;
  font-weight: 600;
}

.search {
  margin: 0.8em 1em;
  padding: 0.35em 0.7em;
  width: 12em;
  border-radius: 0.4em;
  background: #f4f4f5;
  color: #52525b;
  font-size: 0.8em;
}

.tr {
  display: grid;
  grid-template-columns: 1.3fr 0.6fr 1fr 1.6fr;
  align-items: center;
  padding: 0.5em 1em;
  border-top: 1px solid #f0f0f2;
  font-size: 0.88em;
}

.th {
  color: #5b5b64;
  font-size: 0.78em;
  background: #fafafa;
}

.tr.dup {
  color: #6b6b74;
  background: #fffbf3;
}

.tr.dup .mono:first-child {
  text-decoration: line-through;
}

.type {
  color: #5b5b64;
}

.wf {
  position: relative;
  height: 0.5em;
}

.wf i {
  position: absolute;
  top: 0;
  width: 6%;
  height: 100%;
  border-radius: 99px;
  background: #3b82f6;
}

.dup .wf i {
  background: #f5a524;
  opacity: 0.6;
}

.foot {
  padding: 0.7em 1em;
  border-top: 1px solid #f0f0f2;
  background: #fafafa;
  color: #5b5b64;
  font-size: 0.78em;
}

.chip {
  left: 4%;
  bottom: 9%;
  display: flex;
  align-items: center;
  gap: 0.8em;
  padding: 0.85em 1.1em;
}

.chip .t {
  font-weight: 600;
}

.chip .sub {
  font-size: 0.78em;
}

.dot {
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  background: #0f6a30;
  box-shadow: 0 0 0 0.3em #e7f6ec;
}
</style>
