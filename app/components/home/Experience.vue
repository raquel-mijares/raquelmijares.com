<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { experience } from '~/data/experience'
</script>

<template>
  <section aria-labelledby="experience" class="section col">
    <h2 id="experience" class="head">Experience</h2>
    <ul class="jobs">
      <li v-for="(e, i) in experience" :key="e.org">
        <Separator v-if="i > 0" />
        <div class="job">
          <span class="org">{{ e.org }}</span>
          <span class="muted">{{ e.role }}</span>
          <span class="muted yr">{{ e.years }}</span>
        </div>
      </li>
    </ul>
    <p class="muted after">
      At APMC, from September 2024 to September 2026, I opened 1,112 pull requests and reviewed
      502 from teammates.
    </p>
    <p class="muted after">
      Before software I worked in project coordination, procurement and inventory. BSc in
      Production Engineering, Universidad Metropolitana.
    </p>
  </section>
</template>

<style scoped>
.jobs {
  list-style: none;
  margin: 0;
  padding: 0;
}

.job {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: var(--space-block);
  row-gap: var(--space-pair);
  padding-block: var(--space-item);
}

.jobs li:first-child .job {
  padding-top: 0;
}

.org {
  font-weight: 500;
}

.job > .muted {
  grid-column: 1;
}

.job .yr {
  grid-column: 2;
  grid-row: 1;
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 420px) {
  .job {
    grid-template-columns: 1fr;
  }

  .job .yr {
    grid-column: 1;
    grid-row: auto;
    text-align: left;
  }
}
</style>
