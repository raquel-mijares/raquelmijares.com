export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach((to, from) => {
    const fromHistory = window.history.state?.current === to.fullPath
    const leavingCaseForTop = to.path === '/' && from.path.startsWith('/work/') && !fromHistory
    document.documentElement.toggleAttribute('data-vt-name-only', leavingCaseForTop)
  })
})
