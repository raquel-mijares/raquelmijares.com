<script setup lang="ts">
import { openSourceProjects } from '~/data/projects'
</script>

<template>
  <section aria-labelledby="oss" class="section col">
    <h2 id="oss" class="head">Open source</h2>
    <ul class="list">
      <li v-for="p in openSourceProjects" :key="p.slug">
        <NuxtLink :to="`/work/${p.slug}`" class="row" data-spot>
          <span class="card-head">
            <span class="title">{{ p.title }}</span>
            <span class="meta muted">GitHub, {{ p.years }}</span>
          </span>
          <span class="muted">{{ p.summary }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
