<script setup>
import { useFixedHeader } from 'vue-use-fixed-header';

const headerRef = ref(null);

const { styles } = useFixedHeader(headerRef);
</script>

<template>
  <header class="Header" ref="headerRef" :style="styles">
    <UAvatar class="float-start" />
    <UXNavBar class="justify-center" />
    <ColorModeButton />
  </header>
</template>

<style scoped>
.Header {
  @apply flex items-center border-b border-gray-200 dark:border-gray-800 sticky top-0 p-4 gap-4 bg-transparent;
}
</style>