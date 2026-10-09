<template>
  <div class="mock">
    <div class="win">
      <div class="bar"><i /><i /><i /><span class="url">/kids</span></div>
      <div class="page">
        <div class="tiles">
          <CoversKidsTile src="/images/kids-panda.webp" title="Panda Pals" />
          <CoversKidsTile src="/images/kids-frog.webp" title="Froggy Friends" />
          <CoversKidsTile src="/images/kids-narwhal.webp" title="Narwhal Bay" />
          <CoversKidsTile src="/images/kids-giraffe.webp" title="Tall Tales" />
          <CoversKidsTile src="/images/kids-bear.webp" title="Honey Bear" />
          <CoversKidsTile src="/images/kids-cats.webp" title="Kitty Corner" />
        </div>
        <div class="scrim" />
        <div class="dialog" role="presentation">
          <div class="top">
            <div class="h">Enter your passcode</div>
            <span class="x">×</span>
          </div>
          <div class="sub">Grown-ups only. Enter the 4-digit code.</div>
          <div class="digits"><b class="f">•</b><b class="f">•</b><b class="cur" /><b /></div>
          <div class="btn wide">Continue</div>
        </div>
      </div>
    </div>
    <pre class="code snippet"><span class="tg">&lt;BaseDialog</span>
  <span class="p">v-model:open</span>=<span class="s">"open"</span>
  <span class="p">size</span>=<span class="s">"sm"</span>
<span class="tg">/&gt;</span></pre>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  height: 100%;
  padding: 1.4em;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8em;
}

.scrim {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgb(15 15 20 / 0.45);
}

.dialog {
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  width: 21em;
  padding: 1.4em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 1.6em 3.2em -1em rgb(0 0 0 / 0.45);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.x {
  color: #6b6b74;
  font-size: 1.3em;
  line-height: 1;
}

.digits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6em;
  margin: 1.1em 0;
}

.digits b {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 0.6em;
  border: 1px solid #e4e4e7;
  font-size: 1.4em;
}

.digits .cur {
  border-color: #2630f9;
  box-shadow: 0 0 0 3px rgb(38 48 249 / 0.18);
}

.wide {
  width: 100%;
  background: #2630f9;
}

.snippet {
  left: 4%;
  bottom: 7%;
}
</style>
