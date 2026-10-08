<script setup lang="ts">
const inputs = ['Camera 1', 'Camera 2', 'SRT feed', 'Graphics']
const ys = [28, 40, 52, 64]
</script>

<template>
  <div class="v">
    <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path v-for="(y, i) in ys" :key="i" :d="`M 32 ${y} C 38 ${y}, 38 46, 44 46`" :class="{ hot: i === 0 }" />
      <path d="M 66 46 L 74 46" class="hot" />
      <path d="M 55 64 L 55 54" class="dash" />
    </svg>
    <span class="tag cap">Signal flow, macOS app</span>
    <span
      v-for="(n, i) in inputs"
      :key="n"
      class="node in"
      :class="{ key: i === 0 }"
      :style="{ top: `${ys[i]}%` }"
    >{{ n }}</span>
    <div class="node key sw">Switcher</div>
    <div class="node ad">Ad break</div>
    <div class="out">
      <div class="node key program"><span class="live" />Program</div>
      <span class="tag">to viewers</span>
    </div>
    <span class="tag foot">Flutter · Dart · used live during games</span>
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

.in {
  position: absolute;
  left: 10%;
  width: 22%;
  transform: translateY(-50%);
}

.sw {
  position: absolute;
  left: 44%;
  top: 46%;
  width: 22%;
  transform: translateY(-50%);
  text-align: center;
  font-weight: 600;
}

.ad {
  position: absolute;
  left: 44%;
  top: 64%;
  width: 22%;
  transform: translateY(-50%);
  text-align: center;
}

.out {
  position: absolute;
  left: 74%;
  top: 46%;
  transform: translateY(-50%);
  display: grid;
  gap: 0.4em;
}

.program {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.live {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background: var(--accent);
}

.foot {
  position: absolute;
  left: 10%;
  bottom: 9%;
}
</style>
