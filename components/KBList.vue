<template>
  <div id="app">
    <ul v-if="cards" ref="list">
      <li v-for="card in cards" :key="card.id" class="list-item text-black rounded">
        {{ card }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Sortable } from 'sortablejs';
const list = ref(null);
const cards = ["Task 1", "Task 2", "Task 3", "Task 4"];

onMounted(() => {  
  Sortable.create(list.value, {
    animation: 150,
    onEnd: (evt) => {
      const item = cards.splice(evt.oldIndex, 1)[0];
      cards.splice(evt.newIndex, 0, item);
      console.log(cards)
    },
  });
});
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  cursor: move;
}
</style>


