<script setup>

const links = [{
  label: 'Profile',
  to: '/projects'
}, {
  label: 'Installation',
  to: '/'
}, {
  label: 'Horizontal Navigation',
  to: '/'
}, {
  label: 'Command Palette',
  to: '/'
}]
</script>

<template >
  <UHorizontalNavigation :links="links" :ui="{ before: 'before:rounded-none hover:before:bg-transparent dark:hover:before:bg-transparent' }">
    <template #default="{ link, isActive }">
      <span class="group-hover:text-primary hover:rounded-none relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
</template>

