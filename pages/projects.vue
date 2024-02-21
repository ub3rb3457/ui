<script setup lang="ts">
    //const { data } = await useAsyncData('page-data', () => queryContent('/').findOne())
    const toast = useToast()
    const { navigation, page, toc, surround, globals } = useContent()
    
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
      <div id="content-doc" class="col-span-8">
        <ContentDoc />
      </div>
      <div class="col-span-2">
        <UXToc :toc="toc" />
      </div>
    </div>
  </UContainer>
  <UNotifications />
</template>

<style>
  #content-doc{
      h1, h2, h3, h4, h5, h6 {
      margin-top: 30px;
    }
  }
  p {
    margin-top: 30px;
  }
</style>
