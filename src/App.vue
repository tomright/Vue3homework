<template>
  <div class="content">
    <div class="test">
      Проверка что все работает. Если вы это читаете, значит все работает!
    </div>
    <hr />
    <!-- для вывода данных из data(), используюется интерполяция или "mustache-style", нужно написать двойные фигурные скобки {{переменная из data()}}  -->
    <div class="exampleNote">
      Привязали при помощи интерполяции переменную count: {{ count }}
    </div>
    <hr />
    <div class="vbind exampleNote" :id="tagId">
      Делаем динамическую привязку к атрибуту id через v-bind, но в данном
      случае через : см в инструментах разработчика на это.
    </div>
    <hr />
    <div class="exampleNote">
      <h2>Логические атрибуты</h2>
      <p>
        К атрибутам disabled так же можно забиндиться\привязаться, для примера
        ниже есть 2 кнопки, одна кнопка привязана к значению переменной
      </p>
      <button :disabled="isButtonDisabled" @click="alertMsgActivButton">
        Чтобы активировать нажмите на кнопку активации
      </button>
      <button @click="activationButton">{{ buttonActivationName }}</button>
    </div>
    <hr />
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
      isButtonDisabled: true,
      buttonActivationName: "Активация кнопки",
    };
  },
  methods: {
    activationButton() {
      if (this.isButtonDisabled) {
        this.isButtonDisabled = false;
        this.buttonActivationName = "Деактивация кнопки";
      } else {
        this.isButtonDisabled = true;
        this.buttonActivationName = "Активация кнопки";
      }
    },
    alertMsgActivButton() {
      alert("Вы молодец!");
    },
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
.exampleNote {
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
