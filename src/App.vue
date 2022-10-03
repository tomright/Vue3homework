<template>
  <div class="content">
    <div class="test">
      Проверка что все работает. Если вы это читаете, значит все работает!
    </div>
    <hr />
    <!-- для вывода данных из data(), используюется интерполяция или "mustache-style", нужно написать двойные фигурные скобки {{переменная из data()}}  -->
    <div class="exampleNote">
      <h2>Интерполяция и привязка переменных</h2>
      <p>Привязали при помощи интерполяции переменную count: {{ count }}</p>
    </div>
    <div class="vbind exampleNote" :id="tagId">
      <h2>Привязка к атрибуту через v-bind</h2>
      <p>
        Делаем динамическую привязку к атрибуту id через v-bind, но в данном
        случае через : см в инструментах разработчика на это.
      </p>
    </div>
    <div class="exampleNote">
      <h2>Логические атрибуты</h2>
      <p>
        К атрибутам disabled так же можно забиндиться\привязаться, для примера
        ниже есть 2 кнопки, у кнопки под названием "Чтобы активировать нажмите
        на кнопку активации" привязка к логической переменной isButtonDisabled и
        в методе activationButton() происходит смена значения.
      </p>
      <p>
        У кнопки Активации\Деактивации, имя кнопки выведено в перменную и есть
        событие при клике, которое вызывает activationButton()
      </p>
      <button :disabled="isButtonDisabled" @click="alertMsgActivButton">
        Чтобы активировать нажмите на кнопку активации
      </button>
      <button @click="activationButton">{{ buttonActivationName }}</button>
    </div>
    <div class="exampleNote">
      <h2>Директива v-on</h2>
      <p>
        Директива v-on, нужна для того чтобы можно было повесить отбработчик
        событий на элемент. Например на кнопке слушать событие клика: button
        v-on:click="функцияОбработчик"
      </p>
      <p>
        Но поскольку лишний раз нажимать на клавиатуру лениво, то есть
        сокращенная запись: @click="функцияОбработчик" - все будет работать так
        же.
      </p>
      <p>
        Ниже кнопка, в которой применен и v-on: и @: (провзаимодействуй со
        страницей, чтобы что то изменилось ;) )
      </p>
      <button v-on:mouseover="hoverSound" @click="alertMsgActivButton">
        Нажми на кнопку, получишь результат
      </button>
    </div>
    <div class="exampleNote">
      <h2>Methods: и this</h2>
      <p>В methods: {} добавляются методы для работы с данными компоненты, данные лежат в data(), доступ к данным в опции methods осуществляется через this.названиеПеременнойИзДата</p>
      <P>Для записи лучше всего писать сокращенный способ объявления функций. Пример: hoverSound() {код который что то делает}</P>
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
      isButtonDisabled: true,
      buttonActivationName: "Активация кнопки",
      timeOut: true,
    };
  },
  methods: {
    // это свойство для добавления методов в компонент, обработчики событий, другие вспомогательные функции.
    // Используется сокращенный метот объявления фукнции имяФункции() { то что функция делает}, так же не забываем ставить запятые.
    activationButton() {
      if (this.isButtonDisabled) {
        // получаем доступ к возвращаемому объекту функции дата через this. Пример на этой строчке
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
    hoverSound() {
      if (this.timeOut) {
        let sound = new Audio();
        sound.src = "./src/assets/najmi.mp3";
        sound.autoplay = true;
        this.timeOut = false;
        setTimeout(() => {
          this.timeOut = true;
        }, 15000);
      } else {
        console.log(`Время еще не вышло: ${this.timeOut}`);
      }
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
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid green;
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
