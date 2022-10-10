<template>
  <!-- добавили слот -->
  <slot>
    <p style="color: red">
      Что то сломалось и мы не получили данные для вставки
    </p></slot
  >
  <TodoItem
    v-for="({ filmName, year }, index) in vForIndexTestArray"
    :filmName="filmName"
    :year="year"
    :index="index"
    @deleteFilm="deleteFilm1"
  >
  </TodoItem>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  data() {
    return {
      vForIndexTestArray: this.$store.getters['TodoList/todoItems'],
      // vForIndexTestArray: [
      //   { filmName: "Области тьмы", year: 2011 },
      //   { filmName: "Игра на понижение", year: 2015 },
      //   { filmName: "Такси", year: 1998 },
      // ],
    };
  },
  components: { TodoItem },
  methods: {
    deleteFilm1(event) {
      console.log("asdf", event);
      this.vForIndexTestArray.splice(event, 1);
    },
  },
};
</script>
