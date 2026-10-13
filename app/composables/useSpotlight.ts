type InputMode = 'scroll' | 'pointer'

export function useSpotlight(root: Ref<HTMLElement | undefined>) {
  let io: IntersectionObserver | undefined
  let lastX: number | undefined
  let lastY: number | undefined
  const centered = new Set<Element>()

  function setMode(mode: InputMode) {
    const el = root.value
    if (!el || el.dataset.input === mode) return
    el.dataset.input = mode
    for (const target of el.querySelectorAll('[data-spot]')) {
      target.classList.toggle('is-spot', mode === 'scroll' && centered.has(target))
    }
  }

  function onScroll() {
    setMode('scroll')
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
        entry.target.classList.toggle('is-spot', entry.isIntersecting && el.dataset.input === 'scroll')
      }
    }, { rootMargin: '-38% 0px -38% 0px' })
    el.querySelectorAll('[data-spot]').forEach(target => io!.observe(target))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
  })

  onBeforeUnmount(() => {
    io?.disconnect()
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('pointermove', onPointerMove)
  })
}
