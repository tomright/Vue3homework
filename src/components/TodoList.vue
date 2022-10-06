<template>
  <TodoItem
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

