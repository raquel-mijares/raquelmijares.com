type InputMode = 'scroll' | 'pointer'

export function useSpotlight(root: Ref<HTMLElement | undefined>) {
  let io: IntersectionObserver | undefined
  let frame = 0
  let lastX: number | undefined
  let lastY: number | undefined
  const centered = new Set<Element>()

  function update() {
    frame = 0
    const el = root.value
    if (!el) return
    const middle = window.innerHeight / 2
    let nearest = Infinity
    const distances = new Map<Element, number>()
    if (el.dataset.input === 'scroll') {
      for (const target of centered) {
        const rect = target.getBoundingClientRect()
        const distance = Math.abs(rect.top + rect.height / 2 - middle)
        distances.set(target, distance)
        nearest = Math.min(nearest, distance)
      }
    }
    for (const target of el.querySelectorAll('[data-spot]')) {
      const distance = distances.get(target)
      target.classList.toggle('is-spot', distance !== undefined && distance - nearest < 1)
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  function setMode(mode: InputMode) {
    const el = root.value
    if (!el || el.dataset.input === mode) return
    el.dataset.input = mode
    schedule()
  }

  function onScroll() {
    setMode('scroll')
    schedule()
  }

  function onPointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse') return
    const moved = lastX !== undefined && (event.clientX !== lastX || event.clientY !== lastY)
    lastX = event.clientX
    lastY = event.clientY
    if (moved) setMode('pointer')
  }

  onMounted(() => {
    const el = root.value
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) el.dataset.input = 'scroll'
    io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) centered.add(entry.target)
        else centered.delete(entry.target)
      }
      schedule()
    }, { rootMargin: '-38% 0px -38% 0px' })
    el.querySelectorAll('[data-spot]').forEach(target => io!.observe(target))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
  })

  onBeforeUnmount(() => {
    io?.disconnect()
    cancelAnimationFrame(frame)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('pointermove', onPointerMove)
  })
}
