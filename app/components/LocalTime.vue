<script setup lang="ts">
const time = ref('')

const format = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Edmonton',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date())

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  time.value = format()
  timer = setInterval(() => (time.value = format()), 30_000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <span class="t">{{ time }}</span>
</template>

<style scoped>
.t {
  font-variant-numeric: tabular-nums;
}
</style>
