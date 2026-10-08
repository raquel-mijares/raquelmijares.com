<template>
  <div class="mock">
    <div class="win dark">
      <div class="bar"><i /><i /><i /><span class="ttl mono">frontend-compliance</span></div>
      <pre class="out mono"><span class="c">$</span> npm test

<span class="ok">✓</span> tests/consent.test.ts <span class="c">(9)</span>
<span class="ok">✓</span> tests/contexts.test.ts <span class="c">(5)</span>
<span class="ok">✓</span> tests/events.test.ts <span class="c">(7)</span>
<span class="ok">✓</span> tests/hash.test.ts <span class="c">(8)</span>

  <span class="ok">29 passed</span>

<span class="c">$</span> npm run test:e2e

<span class="ok">✓</span> contacts no tracker before a decision
<span class="ok">✓</span> accepting does load analytics
<span class="ok">✓</span> rejecting costs the same as accepting
<span class="ok">✓</span> loads no third-party tags even after accepting
<span class="ok">✓</span> sends no PII to third parties in the signup flow

  <span class="ok">18 passed</span></pre>
    </div>
    <div class="float checks">
      <div class="t"><span class="tick">✓</span>All checks have passed</div>
      <div class="kv"><span class="mono">test</span><span class="pill ok">29 passed</span></div>
      <div class="kv"><span class="mono">e2e</span><span class="pill ok">18 passed</span></div>
      <div class="kv"><span class="mono">audit</span><span class="pill ok">0 vulnerabilities</span></div>
    </div>
  </div>
</template>

<style scoped>
.ttl {
  margin-left: 1.2em;
  color: #a9a9b4;
  font-size: 0.8em;
}

.out {
  margin: 0;
  padding: 1.3em 1.5em;
  font-size: 0.88em;
  line-height: 1.75;
  color: #d4d4dc;
  white-space: pre;
}

.ok {
  color: #4ade80;
}

.c {
  color: #8f8f9b;
}

.checks {
  left: 4%;
  bottom: 8%;
  width: 17.5em;
  padding: 0.9em 1em;
  font-size: 0.92em;
}

.t {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: 600;
  margin-bottom: 0.5em;
}

.tick {
  display: grid;
  place-items: center;
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  background: #0f6a30;
  color: #fff;
  font-size: 0.75em;
}

.kv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em 0;
  border-top: 1px solid #f0f0f2;
}
</style>
