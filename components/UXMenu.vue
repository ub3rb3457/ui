<script setup lang="ts">
const items = [{
  label: 'Getting Started',
  defaultOpen: true,
  slot: 'menu-links'
}, {
  label: 'Installation',
  slot: 'menu-links'
}, {
  label: 'Theming',
  slot: 'menu-links'
}, {
  label: 'Layouts',
  slot: 'menu-links'
}, {
  label: 'Components',
  slot: 'menu-links'
}, {
  label: 'Utilities',
  slot: 'menu-links'
}]
</script>

<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="black" variant="ghost" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <span class="truncate">{{ item.label }}</span>
        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
    <template #menu-links>
      <UXMenuLinks />
    </template>
  </UAccordion>
</template>

