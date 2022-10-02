<template>
  <div class="content">
    <div class="test">
      Проверка что все работает. Если вы это читаете, значит все работает!
    </div>
    <!-- для вывода данных из data(), используюется интерполяция или "mustache-style", нужно написать двойные фигурные скобки {{переменная из data()}}  -->
    <div class="exampleMustache">Count: {{ count }}</div>
  </div>
</template>
<script>
export default {
  //есть договоренность что в eport default есть методы data() - который возвращает некоторый объект с данными, methods
  data() {
    // тут можно произвести некоторую обработку данных, перед тем как их вернуть.
    return {
      count: 0, //покскольку возвращается тип Object, то не нужно забывать ставить запятые после объявления поля объекта.
    };
  },
};
</script>
<style>
.content {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.test{
  margin: auto;
}
.exampleMustache{
margin-top: 20px;
}
</style>
