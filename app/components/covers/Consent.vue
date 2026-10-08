<script setup lang="ts">
const posters = [
  { title: 'Matchday', src: '/images/poster-soccer-duel.webp', tag: 'Live' },
  { title: 'Highlights', src: '/images/poster-soccer-run.webp', tag: 'New' },
  { title: 'Opening Day', src: '/images/poster-ballpark.webp', tag: '' },
  { title: 'Fan zone', src: '/images/poster-fans.webp', tag: '' },
  { title: 'Rivals', src: '/images/poster-soccer-team.webp', tag: '' },
]
</script>

<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="url">/watch</span></div>
      <div class="page">
        <div class="hero">
          <CoversPhoto src="/images/hero-ballpark.webp" pos="50% 60%" />
          <span class="hero-shade" />
          <div class="copy">
            <span class="live">Live</span>
            <div class="title">First pitch</div>
            <div class="meta">Tonight · 7:05 PM</div>
          </div>
        </div>
        <div class="row-title">Soccer, baseball and more</div>
        <div class="rows">
          <div v-for="p in posters" :key="p.title" class="poster">
            <CoversPhoto :src="p.src" />
            <span class="shade" />
            <span v-if="p.tag" class="ptag" :class="{ red: p.tag === 'Live' }">{{ p.tag }}</span>
            <span class="pt">{{ p.title }}</span>
          </div>
        </div>
      </div>
      <div class="banner">
        <div>
          <div class="ttl">Your privacy choices</div>
          <div class="sub">We use cookies for analytics and personalised ads. You can change this at any time.</div>
        </div>
        <div class="actions">
          <span class="btn ghost">Reject all</span>
          <span class="btn">Accept all</span>
        </div>
      </div>
    </div>
    <div class="float state">
      <div class="mono head">consent, before a choice</div>
      <div class="kv"><span class="mono">ad_storage</span><span class="pill off">denied</span></div>
      <div class="kv"><span class="mono">analytics_storage</span><span class="pill off">denied</span></div>
      <div class="kv"><span class="mono">set in</span><span class="pill ok">SSR HTML</span></div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 1.4em 1.6em;
}

.hero {
  position: relative;
  height: 10em;
  border-radius: 0.8em;
  overflow: hidden;
  background:
    radial-gradient(70% 120% at 85% 30%, rgb(96 165 250 / 0.55), transparent 60%),
    linear-gradient(120deg, #0b1220 30%, #1e3a8a);
}

.hero-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(90deg, rgb(5 7 13 / 0.92) 0%, rgb(5 7 13 / 0.5) 45%, transparent 75%);
}

.copy {
  z-index: 2;
  position: absolute;
  left: 1.4em;
  bottom: 1.2em;
  color: #fff;
}

.live {
  display: inline-block;
  padding: 0.15em 0.5em;
  border-radius: 0.3em;
  background: #c92a2f;
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.title {
  margin-top: 0.4em;
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.meta {
  color: rgb(255 255 255 / 0.7);
  font-size: 0.85em;
}

.row-title {
  margin: 1.1em 0 0.6em;
  font-weight: 600;
  font-size: 0.95em;
}

.rows {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.6em;
}

.poster {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 0.5em;
  overflow: hidden;
}

.shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, transparent 45%, rgb(5 7 13 / 0.9));
}

.pt {
  position: absolute;
  left: 0.6em;
  right: 0.6em;
  bottom: 0.55em;
  z-index: 2;
  color: #fff;
  font-weight: 700;
  font-size: 0.8em;
  line-height: 1.15;
}

.ptag {
  position: absolute;
  left: 0.55em;
  top: 0.55em;
  z-index: 2;
  padding: 0.1em 0.4em;
  border-radius: 0.25em;
  background: #fff;
  color: #18181b;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.ptag.red {
  background: #c92a2f;
  color: #fff;
}

.banner {
  position: absolute;
  left: 1.4em;
  right: 1.4em;
  bottom: 1.4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4em;
  padding: 1.1em 1.3em;
  border-radius: 0.9em;
  background: #fff;
  border: 1px solid #ececef;
  box-shadow: 0 1em 2.4em -1em rgb(20 20 30 / 0.3);
}

.ttl {
  font-weight: 600;
  margin-bottom: 0.2em;
}

.banner .sub {
  max-width: 28em;
}

.actions {
  display: flex;
  gap: 0.5em;
  flex-shrink: 0;
}

.state {
  left: 4%;
  top: 46%;
  width: 17em;
  padding: 0.9em 1em;
  font-size: 0.92em;
}

.head {
  font-size: 0.78em;
  color: #5b5b64;
  margin-bottom: 0.5em;
}

.kv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em 0;
  border-top: 1px solid #f0f0f2;
  font-size: 0.88em;
}
</style>
