<script setup lang="ts">
import { recommendations } from '~/data/recommendations'
</script>

<template>
  <section aria-labelledby="recs" class="section col">
    <h2 id="recs" class="head">Recommendations</h2>
    <ExpandableList
      :items="recommendations"
      :visible="3"
      :item-key="r => r.name"
      list-class="quotes"
      more-class="quotes more"
    >
      <template #default="{ item: r }">
        <figure>
          <blockquote>
            <p>{{ r.quote }}</p>
          </blockquote>
          <figcaption>
            <span class="who">{{ r.name }}</span>
            <span class="muted">{{ r.title }}, {{ r.relation }}</span>
          </figcaption>
        </figure>
      </template>
    </ExpandableList>
    <p class="muted after">
      From <a href="https://www.linkedin.com/in/raquelmjrs/" class="link" rel="noopener">recommendations on LinkedIn</a>.
    </p>
  </section>
</template>

<style scoped>
.quotes figure {
  margin: 0;
  padding-left: var(--space-item);
  border-left: 1px solid var(--line);
}

.quotes blockquote {
  margin: 0;
}

.quotes blockquote p {
  margin: 0;
  text-wrap: pretty;
}

.quotes blockquote p::before {
  content: '“';
}

.quotes blockquote p::after {
  content: '”';
}

.quotes figcaption {
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-related);
  margin-top: var(--space-related);
  font-size: var(--text-sm);
}

.who {
  font-weight: 500;
}
</style>
