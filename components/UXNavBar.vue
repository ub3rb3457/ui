<script setup>

const links = [{
  label: 'Profile',
  to: '/'
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

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

