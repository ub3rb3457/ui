<script setup lang="ts">
const links = [{
  label: 'Introduction',
  to: '/'
}, {
  label: 'Installation',
  to: '/'
}, {
  label: 'Theming',
  to: '/'
}, {
  label: 'Shortcuts',
  to: '/'
}]
</script>

<template>
  <UVerticalNavigation
    :links="links"
    :ui="{
      wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-1 ml-4',
      base: 'group block border-s -ms-px lg:leading-6 before:hidden',
      padding: 'p-0 ps-4',
      rounded: '',
      font: '',
      ring: '',
      active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
      inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
    }"
  />
</template>

