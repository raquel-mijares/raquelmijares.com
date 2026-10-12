<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { reading } from '~/data/reading'
</script>

<template>
  <section aria-labelledby="reading" class="section col">
    <div class="head">
      <h2 id="reading">Reading</h2>
      <p class="muted">Articles I keep coming back to, and where they show up in my work.</p>
    </div>
    <ExpandableList
      :items="reading"
      :visible="3"
      :item-key="a => a.href"
      list-class="list reading"
    >
      <template #default="{ item: a, extra }">
        <a :href="a.href" class="row read" rel="noopener" :data-spot="extra ? undefined : ''">
          <span class="title">
            {{ a.title }}
            <ArrowUpRight aria-hidden="true" class="ext" />
          </span>
          <span class="by">{{ a.author }}</span>
          <span class="muted note-line">{{ a.note }}</span>
        </a>
      </template>
    </ExpandableList>
  </section>
</template>

<style scoped>
.row.read {
  gap: 2px;
  padding-block: 12px;
}

.by {
  color: var(--ink-2);
  font-size: var(--text-sm);
}

.note-line {
  margin-top: 4px;
}

.ext {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 2px;
  vertical-align: -1px;
  color: var(--ink-2);
  transition: transform 0.15s, color 0.15s;
}

.row:hover .ext,
.row.is-spot .ext {
  color: var(--ink);
  transform: translate(1px, -1px);
}
</style>
