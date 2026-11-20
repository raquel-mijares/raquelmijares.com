<script setup lang="ts">
import { openSourceProjects, openSourceRepos } from '~/data/projects'
</script>

<template>
  <section aria-labelledby="oss" class="section col">
    <h2 id="oss" class="head">Open source</h2>
    <ul class="list">
      <li v-for="p in openSourceProjects" :key="p.slug">
        <NuxtLink :to="`/work/${p.slug}`" class="row">
          <span class="card-head">
            <span class="title">{{ p.title }}</span>
            <span class="meta muted">GitHub, {{ p.years }}</span>
          </span>
          <span class="muted">{{ p.summary }}</span>
        </NuxtLink>
      </li>
      <li v-for="r in openSourceRepos" :key="r.href">
        <a :href="r.href" class="row" rel="noopener">
          <span class="card-head">
            <span class="title">{{ r.title }}</span>
            <span class="meta muted">GitHub, {{ r.years }}</span>
          </span>
          <span class="muted">{{ r.summary }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>
