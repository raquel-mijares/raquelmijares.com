type InputMode = 'mouse' | 'touch'

let lastMode: InputMode | undefined
let lastTouch = 0
let lastX: number | undefined
let lastY: number | undefined

export function useInputMode(root: Ref<HTMLElement | undefined>) {
  function setMode(mode: InputMode) {
    lastMode = mode
    const el = root.value
    if (el && el.dataset.input !== mode) el.dataset.input = mode
  }

  function onPointer(event: PointerEvent) {
    if (event.pointerType !== 'mouse') {
      lastTouch = event.timeStamp
      setMode('touch')
      return
    }
    const moved = lastX !== undefined && (event.clientX !== lastX || event.clientY !== lastY)
    lastX = event.clientX
    lastY = event.clientY
    if (moved && event.timeStamp - lastTouch > 1000) setMode('mouse')
  }

  function onTouchStart(event: TouchEvent) {
    lastTouch = event.timeStamp
    setMode('touch')
  }

  onMounted(() => {
    lastX = undefined
    lastY = undefined
    setMode(lastMode ?? (window.matchMedia('(hover: hover) and (pointer: fine)').matches ? 'mouse' : 'touch'))
    window.addEventListener('pointerdown', onPointer, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('pointerdown', onPointer)
    window.removeEventListener('pointermove', onPointer)
    document.removeEventListener('touchstart', onTouchStart)
  })
}
