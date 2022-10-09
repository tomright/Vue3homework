<template>
  Выводим данные переданные в URL: {{ id }}
  <br>
  <RouterLink to="/">Домой</RouterLink>
</template>
<script>
export default {
  name: "ItemDetails",
  props: ["id"],
};
</script>
