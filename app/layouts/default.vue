<template>
  <div class="page">
    <a href="#main" class="skip">Skip to content</a>
    <div class="top wide">
      <ThemeToggle />
    </div>
    <main id="main">
      <slot />
    </main>
    <footer class="site-foot col">
      <span>© 2026 Raquel Mijares</span>
      <span>
        Built with Nuxt and shadcn-vue.
        <a href="https://github.com/raquel-mijares/raquelmijares.com" class="link" rel="noopener">View the source</a>
      </span>
    </footer>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  padding: var(--space-page) var(--gutter);
}

.top {
  position: absolute;
  top: 20px;
  left: var(--gutter);
  right: var(--gutter);
  display: flex;
  justify-content: flex-end;
}

.site-foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-related) var(--space-block);
  margin-top: var(--space-section);
  padding-top: var(--space-block);
  border-top: 1px solid var(--line);
  color: var(--ink-2);
  font-size: var(--text-sm);
}
</style>
