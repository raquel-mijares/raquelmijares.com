<script setup lang="ts">
import { shortOrg, workProjects } from '~/data/projects'
</script>

<template>
  <section aria-labelledby="work" class="section breakout">
    <div class="col head">
      <h2 id="work">Work</h2>
      <p class="muted">
        This work lives in private repositories, so each project is a short write-up: the problem,
        what I did and what changed.
      </p>
    </div>
    <ul class="gallery wide">
      <li v-for="p in workProjects" :key="p.slug">
        <NuxtLink :to="`/work/${p.slug}`" class="card">
          <ProjectCover :project="p" />
          <span class="card-text">
            <span class="card-head">
              <span class="title">{{ p.title }}</span>
              <span class="meta muted">{{ shortOrg(p.org) }}, {{ p.years.slice(-4) }}</span>
            </span>
            <span class="muted">{{ p.summary }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.gallery {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-group) var(--space-block);
}

.card {
  display: grid;
  gap: var(--space-item);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.home[data-input='mouse'] .card:hover :deep(.stage),
.card:focus-visible :deep(.stage) {
  transform: scale(1.03);
}

@media (hover: hover) and (pointer: fine) {
  .home:not([data-input]) .card:hover :deep(.stage) {
    transform: scale(1.03);
  }
}

.home[data-input] .card:active :deep(.stage),
.card:active :deep(.stage) {
  transform: scale(0.985);
  transition-duration: 0.12s;
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .gallery > li {
      animation: card-in linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 55%;
    }
  }
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

.card-text {
  display: grid;
  gap: var(--space-pair);
}

.card-text > .muted {
  max-width: 52ch;
}

@media (max-width: 720px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
