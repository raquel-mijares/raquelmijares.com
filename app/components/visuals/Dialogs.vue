<template>
  <div class="v">
    <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 40 34 C 47 34, 47 50, 54 50" />
      <path d="M 40 50 L 54 50" />
      <path d="M 40 66 C 47 66, 47 50, 54 50" />
    </svg>
    <span class="tag cap">Three modal systems, one foundation</span>
    <span class="node ghost old" style="top: 34%">provide / inject</span>
    <span class="node ghost old" style="top: 50%">Reka UI, first pass</span>
    <span class="node ghost old" style="top: 66%">Store-based</span>
    <div class="node key base">
      <div class="t">BaseDialog</div>
      <div class="row">Focus trap</div>
      <div class="row">Escape to close</div>
      <div class="row">aria-modal</div>
      <div class="row">Returns focus</div>
      <div class="themes">
        <span class="sw a" /><span class="tag">Victory+</span>
        <span class="sw b" /><span class="tag">Kidoodle.TV</span>
      </div>
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

.old {
  position: absolute;
  left: 10%;
  width: 30%;
  transform: translateY(-50%);
}

.base {
  position: absolute;
  left: 54%;
  top: 50%;
  width: 36%;
  transform: translateY(-50%);
  padding: 0.9em 1em;
}

.t {
  font-weight: 600;
  margin-bottom: 0.6em;
}

.row {
  padding: 0.35em 0;
  border-top: 1px solid var(--d-line);
}

.themes {
  display: flex;
  align-items: center;
  gap: 0.4em;
  padding-top: 0.7em;
  border-top: 1px solid var(--d-line);
}

.sw {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
}

.sw.a {
  background: var(--d-ink);
}

.sw.b {
  background: var(--accent);
  margin-left: 0.6em;
}
</style>
