<script setup lang="ts">
import { smallWidths } from '~/data/photos'

const props = defineProps<{ src: string, pos?: string }>()

const el = ref<HTMLElement>()
const eager = inject('eagerPhotos', false)
const near = ref(eager)
const loaded = ref(eager)

let io: IntersectionObserver | undefined
let idle: ReturnType<typeof setTimeout> | undefined

const chosen = ref(props.src)

const pick = () => {
  const small = smallWidths[props.src]
  const needed = (el.value?.clientWidth ?? Infinity) * (window.devicePixelRatio || 1)
  chosen.value = small && needed <= small ? props.src.replace('.webp', '-sm.webp') : props.src
}

const reveal = () => {
  pick()
  near.value = true
  io?.disconnect()
}

const afterLoad = () => {
  idle = setTimeout(reveal, 1500)
}

onMounted(() => {
  if (document.readyState === 'complete') afterLoad()
  else window.addEventListener('load', afterLoad, { once: true })
  io = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) reveal()
  }, { rootMargin: '400px' })
  if (el.value) io.observe(el.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
  clearTimeout(idle)
  window.removeEventListener('load', afterLoad)
})
</script>

<template>
  <span ref="el" class="frame">
    <img
      :src="near ? chosen : undefined"
      alt=""
      decoding="async"
      class="photo"
      :class="{ in: loaded }"
      :style="{ objectPosition: pos ?? 'center' }"
      @load="loaded = true"
    >
  </span>
</template>

<style scoped>
.frame {
  position: absolute;
  inset: 0;
  background: #1a1d26;
}

.photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.photo.in {
  opacity: 1;
}
</style>
