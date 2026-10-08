<script setup lang="ts">
const lines = [
  '<span class="tg">&lt;script</span> <span class="p">setup</span> <span class="p">lang</span>=<span class="s">"ts"</span><span class="tg">&gt;</span>',
  '<span class="f">definePageMeta</span>({',
  '  <span class="p">auth</span>: <span class="s">\'registered\'</span>,',
  '  <span class="p">layout</span>: <span class="s">\'account\'</span>,',
  '})',
  '',
  '<span class="k">const</span> { <span class="p">user</span> } = <span class="f">useAuth</span>()',
  '<span class="tg">&lt;/script&gt;</span>',
  '',
  '<span class="tg">&lt;template&gt;</span>',
  '  <span class="tg">&lt;AccountLayout&gt;</span>',
  '    <span class="tg">&lt;ProfileCard</span> <span class="p">:user</span>=<span class="s">"user"</span> <span class="tg">/&gt;</span>',
  '    <span class="tg">&lt;SubscriptionCard</span> <span class="tg">/&gt;</span>',
  '    <span class="tg">&lt;DevicesList</span> <span class="tg">/&gt;</span>',
  '  <span class="tg">&lt;/AccountLayout&gt;</span>',
  '<span class="tg">&lt;/template&gt;</span>',
]
</script>

<template>
  <div class="mock">
    <div class="win dark">
      <div class="bar"><i /><i /><i /><span class="file">pages/account.vue</span></div>
      <div class="ed mono">
        <div v-for="(l, i) in lines" :key="i" class="ln" :class="{ hl: i === 2 }">
          <span class="no">{{ i + 1 }}</span>
          <span v-html="l" />
        </div>
      </div>
    </div>
    <div class="float access">
      <div class="head">Who can open /account</div>
      <div class="kv"><span>Registered</span><span class="pill ok">Allowed</span></div>
      <div class="kv"><span>Guest</span><span class="pill off">Redirect</span></div>
      <div class="kv"><span>Signed out</span><span class="pill off">Sign in</span></div>
    </div>
  </div>
</template>

<style scoped>
.ed {
  padding: 1.2em 0;
  font-size: 0.92em;
  line-height: 1.85;
  color: #e4e4ea;
}

.ln {
  display: grid;
  grid-template-columns: 3.4em 1fr;
  white-space: pre;
}

.ln.hl {
  background: rgb(130 170 255 / 0.1);
  box-shadow: inset 2px 0 0 #82aaff;
}

.no {
  text-align: right;
  padding-right: 1.4em;
  color: #8a8a96;
}

.access {
  left: 4%;
  bottom: 8%;
  width: 17em;
  padding: 0.9em 1em;
  font-size: 0.92em;
}

.head {
  font-weight: 600;
  margin-bottom: 0.5em;
}

.kv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.45em 0;
  border-top: 1px solid #f0f0f2;
}
</style>
