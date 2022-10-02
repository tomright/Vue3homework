<template>
  <div class="content">
    <div class="test">
      Проверка что все работает. Если вы это читаете, значит все работает!
    </div>
    <hr />
    <!-- для вывода данных из data(), используюется интерполяция или "mustache-style", нужно написать двойные фигурные скобки {{переменная из data()}}  -->
    <div class="exampleMustache">
      Привязали при помощи интерполяции переменную count: {{ count }}
    </div>
    <div class="vbind exampleMustache" :id="header">
      Делаем динамическую привязку к атрибуту id через v-bind, но в данном
      случае через : см в инструментах разработчика на это.
    </div>
  </div>
</template>
<script>
export default {
  //есть договоренность что в eport default есть методы data() - который возвращает некоторый объект с данными, methods
  data() {
    // тут можно произвести некоторую обработку данных, перед тем как их вернуть.
    return {
      count: 0, //покскольку возвращается тип Object, то не нужно забывать ставить запятые после объявления поля объекта.
      tagId: "header",
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
.test {
  margin: auto;
}
.exampleMustache {
  margin-top: 20px;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid green;
  margin: 1em 0;
  padding: 0;
}
</style>
