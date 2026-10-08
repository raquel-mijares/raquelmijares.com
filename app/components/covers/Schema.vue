<script setup lang="ts">
const rows = [
  ['Ticketing', '42', true],
  ['Concessions', '38', false],
  ['Merchandise', '17', false],
  ['Sponsorship', '9', false],
  ['Parking', '6', false],
  ['Hospitality', '5', false],
  ['Streaming', '3', false],
] as const
</script>

<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="url">/settings/revenue-centers</span></div>
      <div class="app">
        <nav class="nav">
          <b class="logo" />
          <span />
          <span class="on" />
          <span />
          <span />
        </nav>
        <div class="main">
          <div class="head">
            <div>
              <div class="h">Revenue centers</div>
              <div class="sub">Assign revenue to events and production sheets.</div>
            </div>
            <span class="btn">New center</span>
          </div>
          <div class="tr th"><span>Name</span><span>Events</span><span>Share of revenue</span><span /></div>
          <div v-for="(r, i) in rows" :key="r[0]" class="tr" :class="{ sel: i === 0 }">
            <span class="name">{{ r[0] }}</span>
            <span class="num">{{ r[1] }}</span>
            <span class="share"><i :style="{ width: `${(Number(r[1]) / 42) * 100}%` }" /></span>
            <span><span v-if="r[2]" class="pill">Default</span></span>
          </div>
        </div>
      </div>
    </div>
    <pre class="code snippet"><span class="k">query</span> {
  <span class="f">revenueCenters</span> {
    <span class="p">name</span>
    <span class="p">events</span> { <span class="p">id</span> }
  }
}</pre>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 3.4em 1fr;
  height: 100%;
}

.nav {
  display: grid;
  align-content: start;
  justify-items: center;
  gap: 1em;
  padding-top: 1.1em;
  border-right: 1px solid #f0f0f2;
  background: #fafafa;
}

.logo {
  width: 1.5em;
  height: 1.5em;
  border-radius: 0.4em;
  background: #18181b;
  margin-bottom: 0.4em;
}

.nav span {
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.35em;
  background: #e4e4e7;
}

.nav .on {
  background: #c9a227;
}

.main {
  padding: 1.5em 1.6em;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
  margin-bottom: 1.2em;
}

.tr {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr 1.4fr 0.8fr;
  gap: 1em;
  align-items: center;
  padding: 0.65em 0;
  border-top: 1px solid #f0f0f2;
}

.th {
  color: #5b5b64;
  font-size: 0.8em;
}

.name {
  font-weight: 500;
}

.tr.sel {
  margin: 0 -0.8em;
  padding-inline: 0.8em;
  border-radius: 0.5em;
  background: #fbf6e6;
  border-top-color: transparent;
}

.share {
  height: 0.5em;
  border-radius: 99px;
  background: #f4f4f5;
  overflow: hidden;
}

.share i {
  display: block;
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, #d4a72c, #c9a227);
}

.num {
  font-variant-numeric: tabular-nums;
  color: #52525b;
}

.snippet {
  left: 4%;
  bottom: 7%;
}
</style>
