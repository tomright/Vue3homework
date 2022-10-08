<template>
  <div class="usernameList">
    <p>Порядковый номер фильма: {{ index + 1 }}</p>
    <p>Название фильма: {{ filmName }}</p>
    <p>Год выхода фильма: {{ year }}</p>
    <button @click="deleteFilm">Удалить фильм</button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["filmName", "year", "index"],
  emits: ["deleteFilm"],
  methods: {
    deleteFilm() {
      this.$emit("deleteFilm", this.index);
    },
  },
};
</script>
<style scoped>
.usernameList {
  border: 1px solid darkgreen;
  margin-top: 10px;
}
.usernameList:nth-child(odd) {
  background-color: rgb(235, 255, 219);
}
.usernameList:nth-child(even) {
  background-color: azure;
}
usernameList:nth-child(odd) {
  background-color: rgb(235, 255, 219);
}
.usernameList:nth-child(even) {
  background-color: azure;
}
</style>
