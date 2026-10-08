<script setup lang="ts">
const marks = ['Start', '25%', '50%', '75%', 'End']
const dupes = [0, 2, 4]
</script>

<template>
  <div class="v">
    <span class="tag">Ad beacons per ad</span>

    <div class="lanes">
      <div class="lane">
        <span class="tag lbl">Before</span>
        <div class="axis">
          <span v-for="(m, i) in marks" :key="m" class="pt" :style="{ left: `${i * 25}%` }">
            <b class="dot" />
            <b v-if="dupes.includes(i)" class="dot dup" />
          </span>
        </div>
      </div>
      <div class="lane">
        <span class="tag lbl">After</span>
        <div class="axis">
          <span v-for="(m, i) in marks" :key="m" class="pt" :style="{ left: `${i * 25}%` }">
            <b class="dot ok" />
          </span>
        </div>
      </div>
      <div class="lane">
        <span />
        <div class="axis bare">
          <span v-for="(m, i) in marks" :key="m" class="tag mk" :style="{ left: `${i * 25}%` }">{{ m }}</span>
        </div>
      </div>
    </div>

    <div class="tabs">
      <span class="node">Tab A</span>
      <span class="bc"><span class="tag">BroadcastChannel, one session id</span></span>
      <span class="node">Tab B</span>
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

.lanes {
  display: grid;
  gap: 2.2em;
}

.lane {
  display: grid;
  grid-template-columns: 4.5em 1fr;
  align-items: center;
}

.axis {
  position: relative;
  height: 1px;
  margin-right: 1.2em;
  background: var(--d-line);
}

.axis.bare {
  background: none;
}

.pt {
  position: absolute;
  top: 0;
}

.dot {
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: var(--d-muted);
}

.dot.dup {
  left: 0.85em;
  background: var(--d-bg);
  border: 1px solid var(--accent);
}

.dot.ok {
  background: var(--d-ink);
}

.mk {
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
}

.tabs {
  display: flex;
  align-items: center;
}

.bc {
  flex: 1;
  position: relative;
  text-align: center;
  padding: 0 0.6em;
}

.bc::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 1px dashed var(--d-muted);
}

.bc .tag {
  position: relative;
  padding: 0 0.6em;
  background: var(--d-bg);
}
</style>
