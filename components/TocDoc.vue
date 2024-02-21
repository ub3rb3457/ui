<script lang="ts" setup>
  const { data } = await useAsyncData(() => queryContent('test').findOne());
</script>

<template>
  <div>
    <ContentRendererMarkdown :value="data" :data="mdcVars"/>
  </div>
</template>

<style scoped></style>




<template>
  <div>
    <ContentRendererMarkdown :value="data" :data="mdcVars"/>
    <button type="button" v-on:click="mdcVars.name = 'Hugo'">Change name</button>
  </div>
</template>

<script setup lang="ts">

const mdcVars = ref({ name: 'Maxime'});
</script>
