<script setup lang="ts">
/* 
a kanban board consists of a collection of lists (columns) and cards (tasks).
Each list has a name and a collection of cards.
Each card has a content property that represents the task.


*/
    const columns = ref([
        {
        name: 'To Do',
        cards: [
            { content: 'Task 1' },
            { content: 'Task 2' },
            // Add more cards as needed
        ],
        },
        {
        name: 'In Progress',
        cards: [
            { content: 'Task 3' },
            // Add more cards as needed
        ],
        },
        {
        name: 'Done',
        cards: [
            { content: 'Task 4' },
            // Add more cards as needed
        ],
        },
        // Add more columns as needed
    ])
</script>
  <template>
    <div class="kanban-board">
      <draggable v-model="columns" class="dragArea" :animation="200">
        <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="kanban-column">
          <h2>{{ column.name }}</h2>
          <draggable v-model="column.cards" class="dragArea" :group="{ name: 'people', pull: 'clone' }" :animation="200">
            <div v-for="(card, cardIndex) in column.cards" :key="cardIndex" class="kanban-card">
              <p>{{ card.content }}</p>
            </div>
          </draggable>
        </div>
      </draggable>
    </div>
  </template>
  

  
  <style scoped>
  .kanban-board {
    display: flex;
    gap: 1rem;
  }
  
  .kanban-column {
    flex: 1;
    border: 1px solid #;
    border-radius: 0.5rem;
    padding: 1rem;
}
  </style>
  