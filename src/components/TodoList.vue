<template>
  <TodoItem
    class="usernameList"
    v-for="({ filmName, year }, index) in vForIndexTestArray"
    :filmName="filmName"
    :year="year"
    :index="index"
  >
  </TodoItem>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  data() {
    return {
      vForIndexTestArray: [
        { filmName: "Области тьмы", year: 2011 },
        { filmName: "Игра на понижение", year: 2015 },
        { filmName: "Такси", year: 1998 },
      ],
    };
  },
  components: { TodoItem },
};
</script>

<style>
.usernameList {
  border: 1px solid darkgreen;
  margin-top: 10px;
}
.usernameList:nth-child(odd) {
  background-color: rgb(235, 255, 219);
}
.usernameList:nth-child(even) {
  background-color: azure;
}usernameList:nth-child(odd) {
  background-color: rgb(235, 255, 219);
}
.usernameList:nth-child(even) {
  background-color: azure;
}
</style>
