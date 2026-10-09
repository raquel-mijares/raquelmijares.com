export function useSpotlight(root: Ref<HTMLElement | undefined>) {
  let io: IntersectionObserver | undefined

  onMounted(() => {
    if (!root.value || !window.matchMedia('(hover: none)').matches) return
    io = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.classList.toggle('is-spot', entry.isIntersecting)
    }, { rootMargin: '-38% 0px -38% 0px' })
    root.value.querySelectorAll('[data-spot]').forEach(el => io!.observe(el))
  })

  onBeforeUnmount(() => io?.disconnect())
}
