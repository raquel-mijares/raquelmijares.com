<script setup lang="ts" generic="T">
import { ChevronDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const props = defineProps<{
  items: T[]
  visible: number
  itemKey: (item: T) => string
  listClass: string
  moreClass?: string
}>()

defineSlots<{ default(props: { item: T, extra: boolean }): unknown }>()

const open = ref(false)
const first = computed(() => props.items.slice(0, props.visible))
const rest = computed(() => props.items.slice(props.visible))
</script>

<template>
  <ul :class="listClass">
    <li v-for="item in first" :key="itemKey(item)">
      <slot :item="item" :extra="false" />
    </li>
  </ul>
  <Collapsible v-if="rest.length" v-model:open="open">
    <CollapsibleContent>
      <ul :class="moreClass ?? listClass">
        <li v-for="item in rest" :key="itemKey(item)">
          <slot :item="item" :extra="true" />
        </li>
      </ul>
    </CollapsibleContent>
    <CollapsibleTrigger as-child>
      <Button variant="ghost" size="sm" class="toggle">
        {{ open ? 'Show fewer' : `Show ${rest.length} more` }}
        <ChevronDown aria-hidden="true" class="chev" :class="{ up: open }" />
      </Button>
    </CollapsibleTrigger>
  </Collapsible>
</template>

<style scoped>
.toggle {
  margin: var(--space-item) 0 0 calc(var(--space-item) * -0.75);
}

.chev {
  transition: transform 0.2s;
}

.chev.up {
  transform: rotate(180deg);
}
</style>
