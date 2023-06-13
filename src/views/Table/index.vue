<template>
  <div class="table">
    <div class="row header">
      <div class="cell">Name</div>
      <div class="cell">Age</div>
      <div class="cell">Manager</div>
    </div>
    <div class="row" v-for="person in people" :key="person.id">
      <div class="cell">{{ person.name }}</div>
      <div class="cell">{{ person.age }}</div>
      <div class="cell">{{ person.manager }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const people = reactive([]);

onMounted(() => {
  console.log(people);
  for (let i = 1; i <= 1000; i++) {
    people.push({
      id: i,
      name: `Name ${i}`,
      age: Math.floor(Math.random() * 50) + 20,
      manager: Math.random() >= 0.5,
    });
  }
});
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 1px;
  border-bottom: 1px solid #f5f7fa;
  margin: 10px;

  .header {
    font-weight: bold;
    background-color: #f5f7fa;
  }

  .row {
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(40px, auto);
    line-height: 40px;
    grid-gap: 10px;
    border-bottom: 1px solid #f5f7fa;
    .cell {
      text-align: center;
    }
  }
}
</style>
