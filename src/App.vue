<template>
  <div class="content">
    <p>Проверка что все работает. Если вы это читаете, значит все работает!</p>
  </div>
</template>
<script>
export default {
  //есть договоренность что в eport default есть методы data() - который возвращает некоторый объект с данными, methods
  data() {
    // тут можно произвести некоторую обработку данных, перед тем как их вернуть.
    return {
       count: 0, //покскольку возвращается тип Object, то не нужно забывать ставить запятые после объявления поля объекта. 
       }
    }
  }
</script>
<style>
.content {
  display: flex;
  justify-content: center;
}
</style>
