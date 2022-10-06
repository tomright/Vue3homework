<template>
  <p>Порядковый номер фильма: {{ index + 1 }}</p>
  <p>Название фильма: {{ filmName }}</p>
  <p>Год выхода фильма: {{ year }}</p>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["filmName", "year", "index"],
};
</script>
<style></style>
