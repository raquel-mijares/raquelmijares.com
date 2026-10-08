<script setup lang="ts">
const meters = [0.82, 0.74, 0.58, 0.36]
const spark = [6, 7, 6, 8, 7, 9, 8, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 12, 12]
const points = spark.map((v, i) => `${(i / (spark.length - 1)) * 100},${24 - v * 1.6}`).join(' ')
</script>

<template>
  <div class="mock">
    <div class="glow" />
    <div class="win dark">
      <div class="bar">
        <i /><i /><i />
        <span class="ttl">Operator console</span>
        <span class="tc mono">LIVE 01:42:17</span>
        <span class="air"><span class="rec" />On air</span>
      </div>

      <div class="deck">
        <div class="mon pvw">
          <CoversPhoto src="/images/preview-faceoff.webp" pos="50% 40%" />
          <span class="lab mono"><b class="g" />Preview · Cam 2</span>
        </div>
        <div class="mon pgm">
          <CoversPhoto src="/images/program-wide.webp" />
          <span class="lab mono"><b class="r" />Program · Cam 1</span>
          <div class="bug">
            <span class="team h">HOM</span><b>2</b>
            <span class="team a">AWY</span><b>1</b>
            <em>2nd · 14:32</em>
          </div>
        </div>

        <div class="side">
          <div class="meters">
            <span v-for="(m, i) in meters" :key="i" class="m"><i :style="{ height: `${m * 100}%` }" /></span>
          </div>
          <div class="route">
            <span class="rlbl mono">Route group</span>
            <span class="key on">Main</span>
            <span class="key">Backup</span>
            <span class="confirm">Confirm switch</span>
          </div>
        </div>

        <div class="inputs">
          <div class="in live">
            <CoversPhoto src="/images/program-wide.webp" />
            <span class="tag mono"><b class="r" />1 · Cam 1</span>
          </div>
          <div class="in next">
            <CoversPhoto src="/images/preview-faceoff.webp" pos="50% 40%" />
            <span class="tag mono"><b class="g" />2 · Cam 2</span>
          </div>
          <div class="in">
            <div class="bars"><i /><i /><i /><i /><i /><i /><i /></div>
            <span class="tag mono">3 · SRT</span>
          </div>
          <div class="in gfx">
            <div class="score"><span>HOM 2</span><span>AWY 1</span></div>
            <span class="tag mono">4 · GFX</span>
          </div>
        </div>
      </div>

      <div class="status mono">
        <span><b class="g" />SRT 12.4 Mbps</span>
        <span>RTT 38 ms</span>
        <span>Dropped 0</span>
        <svg class="spark" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
          <polyline :points="points" />
        </svg>
      </div>
    </div>

    <div class="float toast">
      <div class="timer"><span>0:30</span></div>
      <div>
        <div class="t">Ad break</div>
        <div class="sub">Back to Cam 1 after the break</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow {
  position: absolute;
  right: 6%;
  top: 4%;
  width: 60%;
  height: 50%;
  background: radial-gradient(closest-side, rgb(201 42 47 / 0.35), transparent);
  filter: blur(2em);
}

.win.dark {
  background: #111216;
}

.ttl {
  margin-left: 1.2em;
  color: #b4b4bf;
  font-size: 0.82em;
}

.tc {
  margin-left: auto;
  margin-right: 1em;
  color: #e4e4ea;
  font-size: 0.78em;
  font-variant-numeric: tabular-nums;
}

.air {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.2em 0.6em;
  border-radius: 0.35em;
  background: #c92a2f;
  color: #fff;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 0 1.2em rgb(201 42 47 / 0.6);
}

.rec {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background: #fff;
}

.deck {
  display: grid;
  grid-template-columns: 1fr 1fr 5.4em;
  gap: 0.8em;
  padding: 0.9em;
}

.mon {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 0.45em;
  overflow: hidden;
}

.pvw {
  box-shadow: 0 0 0 2px #1f9d55;
}

.pgm {
  box-shadow: 0 0 0 2px #c92a2f, 0 0 1.6em rgb(201 42 47 / 0.35);
}

.lab {
  position: absolute;
  left: 0.6em;
  top: 0.6em;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.2em 0.5em;
  border-radius: 0.3em;
  background: rgb(0 0 0 / 0.65);
  color: #fff;
  font-size: 0.66em;
}

.g,
.r {
  display: inline-block;
  width: 0.55em;
  height: 0.55em;
  border-radius: 50%;
}

.g { background: #2fbf71; }
.r { background: #e5484d; }

.bug {
  position: absolute;
  left: 0.6em;
  bottom: 0.6em;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.35em;
  padding: 0.25em 0.3em 0.25em 0.25em;
  border-radius: 0.3em;
  background: rgb(10 10 14 / 0.88);
  color: #fff;
  font-size: 0.68em;
  font-weight: 700;
}

.team {
  padding: 0.1em 0.35em;
  border-radius: 0.2em;
  font-size: 0.85em;
  letter-spacing: 0.04em;
}

.team.h { background: #c92a2f; }
.team.a { background: #1e3a8a; }

.bug b {
  min-width: 0.9em;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.bug em {
  margin-left: 0.3em;
  font-style: normal;
  font-weight: 500;
  color: #b4b4bf;
}

.side {
  grid-row: span 2;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 0.6em;
}

.meters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25em;
  padding: 0.4em;
  border-radius: 0.45em;
  background: #18191f;
}

.m {
  position: relative;
  border-radius: 0.15em;
  background: #23242b;
  overflow: hidden;
}

.m i {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, #2fbf71 0 60%, #f5c518 75%, #e5484d 92%);
  background-size: 100% 8.5em;
  background-position: bottom;
}

.route {
  display: grid;
  gap: 0.35em;
}

.rlbl {
  color: #a9a9b4;
  font-size: 0.58em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.key {
  display: grid;
  place-items: center;
  height: 2em;
  border-radius: 0.4em;
  background: #23242b;
  color: #c9c9d1;
  font-size: 0.7em;
  font-weight: 600;
}

.key.on {
  background: #2a1a1c;
  color: #fff;
  box-shadow: inset 0 0 0 1px #c92a2f;
}

.confirm {
  display: grid;
  place-items: center;
  height: 2.1em;
  border-radius: 0.4em;
  background: #146c3b;
  color: #fff;
  font-size: 0.66em;
  font-weight: 700;
}

.inputs {
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6em;
}

.in {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 0.35em;
  overflow: hidden;
  background: #18191f;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 0.08);
}

.in.live { box-shadow: 0 0 0 2px #c92a2f; }
.in.next { box-shadow: 0 0 0 2px #1f9d55; }

.tag {
  position: absolute;
  left: 0.4em;
  bottom: 0.35em;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  padding: 0.1em 0.4em;
  border-radius: 0.25em;
  background: rgb(0 0 0 / 0.65);
  color: #fff;
  font-size: 0.58em;
}

.bars {
  position: absolute;
  inset: 0 0 30% 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.bars i:nth-child(1) { background: #c0c0c0; }
.bars i:nth-child(2) { background: #c0c000; }
.bars i:nth-child(3) { background: #00c0c0; }
.bars i:nth-child(4) { background: #00c000; }
.bars i:nth-child(5) { background: #c000c0; }
.bars i:nth-child(6) { background: #c00000; }
.bars i:nth-child(7) { background: #0000c0; }

.gfx {
  background:
    radial-gradient(70% 90% at 30% 0%, rgb(201 42 47 / 0.35), transparent 60%),
    #0b0d14;
}

.score {
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.2em;
  font-size: 0.62em;
  font-weight: 700;
  color: #fff;
}

.score span {
  padding: 0.25em 0.45em;
  border-radius: 0.2em;
  background: #c92a2f;
}

.score span + span {
  background: #1e3a8a;
}

.status {
  display: flex;
  align-items: center;
  gap: 1.4em;
  padding: 0.55em 1em;
  border-top: 1px solid rgb(255 255 255 / 0.06);
  color: #b4b4bf;
  font-size: 0.7em;
}

.status span {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
}

.spark {
  flex: 1;
  height: 1.6em;
  max-width: 14em;
  margin-left: auto;
}

.spark polyline {
  fill: none;
  stroke: #2fbf71;
  stroke-width: 1.5;
  vector-effect: non-scaling-stroke;
}

.toast {
  left: 5%;
  bottom: 5%;
  display: flex;
  align-items: center;
  gap: 0.9em;
  padding: 0.9em 1.2em 0.9em 0.9em;
}

.toast .t {
  font-weight: 600;
}

.timer {
  display: grid;
  place-items: center;
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  background: conic-gradient(#f5a524 0 70%, #f1f1f3 70% 100%);
}

.timer span {
  display: grid;
  place-items: center;
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  background: #fff;
  font-size: 0.72em;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
</style>
