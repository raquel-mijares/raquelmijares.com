<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="url">/subscribe</span></div>
      <div class="layout">
        <div class="form">
          <div class="h">Choose your plan</div>
          <div class="sub">Every game, live and on demand.</div>
          <div class="plans">
            <div class="plan">
              <span class="radio" />
              <div>
                <div class="name">Annual</div>
                <div class="sub">Billed once a year</div>
              </div>
              <span class="pill ok">Best value</span>
            </div>
            <div class="plan on">
              <span class="radio" />
              <div>
                <div class="name">Monthly</div>
                <div class="sub">Cancel anytime</div>
              </div>
            </div>
          </div>
          <div class="field">
            <span class="sub">Card</span>
            <span class="mono">•••• •••• •••• 4242</span>
          </div>
          <div class="btn wide">Subscribe</div>
          <div class="secure sub">Payments secured by Stripe</div>
        </div>
        <aside class="summary">
          <div class="pass">
            <div class="pass-top">
              <CoversPhoto src="/images/poster-skater.webp" pos="50% 30%" />
              <span class="pass-shade" />
              <span class="holo" />
              <div class="pass-head">
                <span class="crest">★</span>
                <span class="mono season">2025—26</span>
              </div>
              <div class="pass-title">
                <span class="kicker">Official</span>
                <b>Season Pass</b>
                <span class="small">Every home and away game, live</span>
              </div>
            </div>
            <div class="perf" />
            <div class="pass-bottom">
              <div>
                <span class="plbl">Member</span>
                <span class="pval">Monthly plan</span>
              </div>
              <span class="barcode" />
            </div>
          </div>
          <div class="line"><span class="sub">Plan</span><span class="mono">from config</span></div>
          <div class="line"><span class="sub">Price</span><span class="mono">from API</span></div>
          <div class="line total"><span>Due today</span><span class="mono">—</span></div>
        </aside>
      </div>
    </div>
    <pre class="code snippet"><span class="k">export const</span> <span class="f">plans</span> = {
  <span class="p">monthly</span>: { <span class="p">isDefault</span>: <span class="k">true</span> },
  <span class="p">annual</span>: { <span class="p">interval</span>: <span class="s">'year'</span> },
}</pre>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  height: 100%;
}

.form {
  padding: 1.8em 2em;
}

.plans {
  display: grid;
  gap: 0.6em;
  margin: 1.3em 0 1em;
}

.plan {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.9em;
  padding: 0.85em 1em;
  border: 1px solid #e4e4e7;
  border-radius: 0.7em;
}

.plan.on {
  border-color: #18181b;
  box-shadow: 0 0 0 1px #18181b;
}

.radio {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 1px solid #c4c4cc;
}

.on .radio {
  border: 0.32em solid #18181b;
}

.name {
  font-weight: 600;
}

.field {
  display: flex;
  justify-content: space-between;
  padding: 0.75em 1em;
  border: 1px solid #e4e4e7;
  border-radius: 0.7em;
  margin-bottom: 1em;
}

.wide {
  width: 100%;
}

.secure {
  margin-top: 0.8em;
  text-align: center;
  font-size: 0.8em;
}

.summary {
  padding: 1.8em 1.8em;
  background: #fafafa;
  border-left: 1px solid #f0f0f2;
}

.pass {
  border-radius: 0.9em;
  overflow: hidden;
  background: #0b1f44;
  color: #fff;
  box-shadow:
    0 0.1em 0.2em rgb(11 31 68 / 0.2),
    0 1.2em 2.4em -1em rgb(11 31 68 / 0.55);
  margin-bottom: 1.1em;
}

.pass-top {
  position: relative;
  aspect-ratio: 5 / 4;
}

.pass-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgb(11 31 68 / 0.15) 0%, rgb(11 31 68 / 0.35) 45%, #0b1f44 96%),
    linear-gradient(90deg, rgb(201 42 47 / 0.35), transparent 60%);
}

.holo {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(115deg, transparent 30%, rgb(255 255 255 / 0.22) 45%, rgb(120 200 255 / 0.12) 52%, transparent 62%);
  mix-blend-mode: screen;
}

.pass-head {
  position: absolute;
  left: 1em;
  right: 1em;
  top: 0.9em;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.crest {
  display: grid;
  place-items: center;
  width: 1.9em;
  height: 1.9em;
  border-radius: 50%;
  background: #c92a2f;
  box-shadow: 0 0 0 0.15em #fff;
  font-size: 0.85em;
}

.season {
  padding: 0.15em 0.5em;
  border-radius: 99px;
  background: rgb(255 255 255 / 0.16);
  backdrop-filter: blur(4px);
  font-size: 0.72em;
}

.pass-title {
  position: absolute;
  left: 1em;
  right: 1em;
  bottom: 0.9em;
  z-index: 2;
  display: grid;
}

.kicker {
  font-size: 0.66em;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f8b4b6;
}

.pass-title b {
  font-size: 1.75em;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.small {
  margin-top: 0.35em;
  font-size: 0.75em;
  color: rgb(255 255 255 / 0.78);
}

.perf {
  position: relative;
  height: 1em;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 0.35) 50%, transparent 0) 0.9em 50% / 0.7em 1px repeat-x;
}

.perf::before,
.perf::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: #fafafa;
  transform: translateY(-50%);
}

.perf::before { left: -0.5em; }
.perf::after { right: -0.5em; }

.pass-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 0.5em 1em 0.9em;
}

.pass-bottom > div {
  display: grid;
}

.plbl {
  font-size: 0.62em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.6);
}

.pval {
  font-size: 0.85em;
  font-weight: 600;
}

.barcode {
  width: 6.5em;
  height: 1.9em;
  border-radius: 0.2em;
  background:
    repeating-linear-gradient(90deg, #fff 0 0.12em, transparent 0.12em 0.2em, #fff 0.2em 0.26em, transparent 0.26em 0.42em, #fff 0.42em 0.62em, transparent 0.62em 0.72em) 0 0 / 100% 100%;
  opacity: 0.9;
}

.line {
  display: flex;
  justify-content: space-between;
  padding: 0.6em 0;
  border-top: 1px solid #ececef;
  font-size: 0.9em;
}



.line .mono {
  color: #5b5b64;
  font-size: 0.85em;
}

.total {
  font-weight: 600;
}

.snippet {
  left: 4%;
  bottom: 7%;
}
</style>
