<script setup lang="ts">
    const toast = useToast()
</script>

<template>
  <UContainer>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <slot name="header">
          <UXHeader /> 
        </slot>
      </div>
      <div class="col-span-2">
        <slot name="menu">
          <UXMenu />
        </slot>
      </div>
      <div class="col-span-10">
        <slot />
      </div>
    </div>
  </UContainer>
  <UNotifications />
</template>

<style scoped>
</style>