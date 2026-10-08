<script setup lang="ts">
const controls: [string, string, 'ok' | 'warn'][] = [
  ['Access reviews', 'CC6.2', 'ok'],
  ['Encryption at rest', 'CC6.7', 'ok'],
  ['Vendor risk assessment', 'CC9.2', 'warn'],
  ['Incident response plan', 'CC7.4', 'ok'],
  ['Change management', 'CC8.1', 'ok'],
  ['Security awareness training', 'CC1.4', 'ok'],
  ['Data retention policy', 'CC6.5', 'warn'],
]
</script>

<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="url">/audits/soc-2</span></div>
      <div class="body">
        <div class="tabs">
          <span class="on">SOC 2</span><span>ISO 27001</span><span>GDPR</span><span>HIPAA</span>
        </div>
        <div class="h">Audit readiness</div>
        <div class="meter"><i /></div>
        <div v-for="c in controls" :key="c[0]" class="tr">
          <span>{{ c[0] }}</span>
          <span class="mono ref">{{ c[1] }}</span>
          <span :class="['pill', c[2]]">{{ c[2] === 'ok' ? 'Ready' : 'Needs evidence' }}</span>
        </div>
      </div>
    </div>
    <div class="float diff">
      <div class="t">Compared with last audit</div>
      <div class="kv"><span>Evidence updated</span><span class="up">+ new</span></div>
      <div class="kv"><span>Evidence expired</span><span class="down">− stale</span></div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 0.4em;
  margin-bottom: 1.2em;
}

.tabs span {
  padding: 0.3em 0.75em;
  border-radius: 99px;
  font-size: 0.82em;
  color: #5b5b64;
}

.tabs .on {
  background: #18181b;
  color: #fff;
}

.meter {
  height: 0.5em;
  margin: 0.8em 0 1.2em;
  border-radius: 99px;
  background: #f0f0f2;
  overflow: hidden;
}

.meter i {
  display: block;
  width: 78%;
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, #b46a62, #d39b8f);
}

.tr {
  display: grid;
  grid-template-columns: 1.7fr 0.6fr auto;
  align-items: center;
  gap: 1em;
  padding: 0.62em 0;
  border-top: 1px solid #f0f0f2;
}

.ref {
  color: #6b6b74;
  font-size: 0.8em;
}

.diff {
  left: 4%;
  bottom: 8%;
  width: 16em;
  padding: 0.9em 1em;
  font-size: 0.92em;
}

.diff .t {
  font-weight: 600;
  margin-bottom: 0.5em;
}

.kv {
  display: flex;
  justify-content: space-between;
  padding: 0.4em 0;
  border-top: 1px solid #f0f0f2;
}

.up {
  color: #0f6a30;
  font-weight: 500;
}

.down {
  color: #874a03;
  font-weight: 500;
}
</style>
