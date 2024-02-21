<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'

const el = ref<HTMLElement | null>(null)
const list = ref([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

const { option } = useSortable(el, list, {
  animation: 150,
})
</script>

<template>
  <UButton @click="option('animation', 150)">
    on animation
  </UButton>
  <UButton @click="option('animation', 0)">
    off animation
  </UButton>
  <div 
    ref="el" 
    class="flex flex-col gap-2 p-4 w-300px h-200px m-auto bg-gray-500/5 rounded"
  >
    <div 
      v-for="item in list" 
      :key="item.id"
      class="h20 bg-gray-500/5 rounded p-3"
    >
      {{ item.name }}
    </div>
  </div>
  <div class="text-center">
    {{ JSON.stringify(list) }}
  </div>
</template>