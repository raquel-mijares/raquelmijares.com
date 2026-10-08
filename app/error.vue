<script setup lang="ts">
import type { NuxtError } from '#app'
import { ArrowLeft } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { projects } from '~/data/projects'

const props = defineProps<{ error: NuxtError }>()

const notFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (notFound.value ? 'Page not found · Raquel Mijares' : 'Something went wrong · Raquel Mijares'),
  robots: 'noindex',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="col">
      <p class="code muted">{{ error.statusCode }}</p>
      <h1>{{ notFound ? 'This page doesn’t exist.' : 'Something went wrong.' }}</h1>
      <p class="muted lede">
        {{ notFound
          ? 'The link may be old or mistyped. Everything I’ve built is on the home page.'
          : 'Try again in a moment, or head back to the home page.' }}
      </p>
      <Button class="home" @click="goHome">
        <ArrowLeft aria-hidden="true" />
        Back to Raquel Mijares
      </Button>

      <section v-if="notFound" aria-labelledby="work" class="work">
        <h2 id="work">Case studies</h2>
        <ul>
          <li v-for="p in projects" :key="p.slug">
            <NuxtLink :to="`/work/${p.slug}`" class="link" @click.prevent="clearError({ redirect: `/work/${p.slug}` })">
              {{ p.title }}
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.code {
  margin: 0;
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
}

h1 {
  margin: var(--space-related) 0 0;
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.lede {
  margin: var(--space-item) 0 0;
  max-width: 46ch;
}

.home {
  margin-top: var(--space-block);
}

.work {
  margin-top: var(--space-section);
}

h2 {
  margin: 0 0 var(--space-item);
  font-size: var(--text-lg);
  font-weight: 500;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-related);
}
</style>
