<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { projects } from '~/data/projects'

const route = useRoute()
const index = computed(() => projects.findIndex(p => p.slug === route.params.slug))
const project = computed(() => projects[index.value])

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const next = computed(() => projects[(index.value + 1) % projects.length]!)

useSeoMeta({
  title: () => `${project.value!.title} · Raquel Mijares`,
  description: () => project.value!.summary,
  ogTitle: () => project.value!.title,
  ogDescription: () => project.value!.summary,
})
</script>

<template>
  <article v-if="project">
    <nav aria-label="Breadcrumb" class="crumb col">
      <NuxtLink to="/" class="link">Raquel Mijares</NuxtLink>
    </nav>

    <header class="head col">
      <h1>{{ project.title }}</h1>
      <p class="muted">{{ project.org }}, {{ project.years }}</p>
    </header>

    <p class="lede col">{{ project.summary }}</p>

    <div class="fig wide">
      <ProjectCover :project="project" size="hero" />
    </div>

    <section aria-labelledby="context" class="col">
      <h2 id="context">Context</h2>
      <p>{{ project.context }}</p>
    </section>

    <section aria-labelledby="problem" class="col">
      <h2 id="problem">Problem</h2>
      <p>{{ project.problem }}</p>
    </section>

    <figure class="diagram col">
      <ProjectTile :project="project" />
      <figcaption class="muted">{{ project.caption }}</figcaption>
    </figure>

    <section aria-labelledby="did" class="col">
      <h2 id="did">What I did</h2>
      <ol>
        <li v-for="a in project.approach" :key="a">{{ a }}</li>
      </ol>
    </section>

    <section aria-labelledby="outcome" class="col">
      <h2 id="outcome">Outcome</h2>
      <ul>
        <li v-for="o in project.outcome" :key="o">{{ o }}</li>
      </ul>
      <p v-if="project.link">
        Source: <a :href="project.link.href" class="link" rel="noopener">{{ project.link.label }}</a>
      </p>
    </section>

    <figure v-if="project.quote" class="pull col">
      <blockquote>
        <p>{{ project.quote.text }}</p>
      </blockquote>
      <figcaption>
        <span class="who">{{ project.quote.name }}</span>
        <span class="muted">{{ project.quote.title }}</span>
      </figcaption>
    </figure>

    <section aria-labelledby="stack" class="col">
      <h2 id="stack">Stack</h2>
      <p class="muted">{{ project.stack.join(', ') }}</p>
    </section>

    <Separator class="col sep" />
    <footer class="foot col">
      <NuxtLink to="/" class="link">All work</NuxtLink>
      <NuxtLink :to="`/work/${next.slug}`" class="link">Next: {{ next.title }}</NuxtLink>
    </footer>
  </article>
</template>

<style scoped>
.crumb {
  margin-bottom: var(--space-group);
}

.head h1 {
  margin: 0;
  font-size: var(--text-xl);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.head p {
  margin: var(--space-pair) 0 0;
}

.lede {
  margin-block: var(--space-block) 0;
  font-size: var(--text-lg);
  line-height: 1.5;
  letter-spacing: -0.005em;
}

.fig {
  margin-block: var(--space-group) 0;
}

section,
.diagram,
.pull {
  margin-block-start: var(--space-group);
}

.diagram :deep(.tile) {
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.diagram figcaption {
  margin-top: var(--space-related);
  font-size: var(--text-sm);
}

h2 {
  margin: 0 0 var(--space-related);
  font-size: var(--text-base);
  font-weight: 500;
}

section p {
  margin: 0;
}

section p + p,
section ul + p {
  margin-top: var(--space-item);
}

ol,
ul {
  margin: 0;
  padding: 0 0 0 1.2em;
  display: grid;
  gap: var(--space-related);
}

ol {
  list-style: decimal;
}

ol li::marker {
  color: var(--ink-2);
  font-variant-numeric: tabular-nums;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  position: relative;
  padding-left: 1.2em;
}

ul li::before {
  content: '';
  position: absolute;
  left: 0.15em;
  top: 0.75em;
  width: 5px;
  height: 1px;
  background: var(--ink);
}

.pull {
  padding-left: var(--space-item);
  border-left: 1px solid var(--line);
}

.pull blockquote {
  margin: 0;
}

.pull p {
  margin: 0;
  font-size: var(--text-lg);
  line-height: 1.55;
  text-wrap: pretty;
}

.pull p::before {
  content: '“';
}

.pull p::after {
  content: '”';
}

.pull figcaption {
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-related);
  margin-top: var(--space-related);
  font-size: var(--text-sm);
}

.pull .who {
  font-weight: 500;
}

.sep {
  margin-block-start: var(--space-section);
}

.foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-item) var(--space-block);
  padding-top: var(--space-block);
}
</style>
