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
      <button class="buttonMarginLeft10" @click="activationButton">
        {{ buttonActivationName }}
      </button>
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
      <p>
        В methods: {} добавляются методы для работы с данными компоненты, данные
        лежат в data(), доступ к данным в опции methods осуществляется через
        this.названиеПеременнойИзДата
      </p>
      <p>
        Для записи лучше всего писать сокращенный способ объявления функций.
        Пример: hoverSound() {код который что то делает}
      </p>
    </div>
    <div class="exampleNote">
      <h2>V-if и работа с ним</h2>
      <h3>Синтаксис v-if:</h3>
      <p>
        v-if='переменная' - если переменная будет true, то отобразиться то,
        отобразиться элемент, на котором установлена эта директива
      </p>
      <button @click="switcherBoolean">Показать работу v-if</button>
      <button class="buttonMarginLeft10" @click="showVifElse">
        Показать работу v-else-if
      </button>
      <div v-if="tempNumber == 1" class="vifDiv">
        <p>
          Это текст, который скрыт при помощи директивы v-if. Так же из-за этой
          директивы, если условие не срабатывает, то этот текст не будет
          существовать в DOM дереве.
        </p>
      </div>
      <div v-else-if="tempNumber == 2">
        <p>
          Помимо обычного v-if и v-else, существует еще и
          <strong>v-else-if</strong>. <strong>v-else-if</strong> - применяется
          сразу строго после v-if и обрабатывает другие знанчения условия.
        </p>
        <p>
          Например чтобы увидеть этот пример, был использован v-else-if, который
          проверял значение tempNumber = 2.
        </p>
        <p>
          Таких v-else-if может быть бесконечно большое количество. Самое важное
          условие, чтобы они шли <strong>строго друг за другом</strong>
        </p>
      </div>
      <div v-else>
        <p>
          У директивы есть и продолжение, которое называется v-else. Она
          отработает если условие не сработало.
        </p>
      </div>
    </div>
    <div class="exampleNote">
      <h2>Computed-свойства!</h2>
      <p>
        Нужны для того, чтобы вычислять что то, только в том случае, если
        зависящие данные изменились
      </p>
      <div class="examplecontainer">
        <p>
          Для примера возьмем 3 квадратика. В первом, красном, будут собираться
          числа. В синем будут собираться числа больше 3, а в зеленом числа
          больше 5.
        </p>
        <p>
          В итоге значения в зеленом и синем квадратиках будут собираться только
          тогда, когда будет выполнятся метод из computed свойства.
        </p>
        <p>
          Синтаксически, метод из computed свойства записывается через
          интерполяцию, без круглых скобок.
        </p>
        <p>
          Вообще computed свойства напоимнают ленивую арифметику. Типа мы будем
          считать только тогда, когда это действительно будет нужно, а пока
          отвалите!
        </p>
        <button class="buttonMargin10 buttonMarginLeft10" @click="simpleIncrem">
          Incrementator
        </button>
        <div class="computedExample">
          <div class="red cub">{{ calculatedNumber }}</div>
          <div class="blue cub">{{ singularIncrementatorBlue }}</div>
          <div class="green cub">{{ singularIncrementatorGreen }}</div>
        </div>
      </div>
    </div>
    <div class="exampleNote">
      <h2>Привязка к стилям.</h2>
      <p>
        Привязка к стилям осуществляется через v-bind или через его сокращенную
        форму.
      </p>
      <p>
        Это нужно для того чтобы можно было динамически включать или выключать
        некоторые классы.
      </p>
      <p>
        <strong>Пример:</strong> :class="{классВцсс: переменная}", где :class -
        это непосредственно сам биндинг, классВцсс - это какой то класс CSS и
        переменная - это некоторая переменная, которая содержит значения.
      </p>
      <p>Логика в том, что если в переменной будет значение означающее, <strong>false</strong> (false, 0, '', undefined, null, NaN), тот этот класс <strong>не будет</strong> применяться, в противном случае применится.</p>

      <div class="classCont">
        <button @click="switchColor" class="buttonMarginLeft10, buttonMargin10">
          Добавить к тексту класс цвета
        </button>
        <p :class="{red: colorBoolean}">Пример текста, которому будем менять цвет.</p>
      </div>
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
      tempNumber: 0,
      calculatedNumber: 0,
      blueCalcNumb: 0,
      greenCalcNumb: 0,
      colorBoolean: false,
    };
  },
  computed: {
    singularIncrementatorBlue() {
      if (this.calculatedNumber > 3) {
        this.blueCalcNumb = this.calculatedNumber;
        return this.blueCalcNumb;
      }
    },
    singularIncrementatorGreen() {
      if (this.calculatedNumber > 5) {
        this.greenCalcNumb = this.calculatedNumber;
        return this.greenCalcNumb;
      }
    },
  },
  methods: {
    // это свойство для добавления методов в компонент, обработчики событий, другие вспомогательные функции.
    // Используется сокращенный метот объявления фукнции имяФункции() { то что функция делает}, так же не забываем ставить запятые.
    switchColor() {
      if (this.colorBoolean) {
        this.colorBoolean = false;
      } else {
        this.colorBoolean = true;
      }
    },
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
    switcherBoolean() {
      if (this.tempNumber == 1 || this.tempNumber) {
        this.tempNumber = 0;
      } else {
        this.tempNumber = 1;
      }
    },
    showVifElse() {
      this.tempNumber = 2;
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
    simpleIncrem() {
      this.calculatedNumber++;
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
.computedExample {
  display: flex;
  width: 500px;
  justify-content: space-around;
}
.cub {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.buttonMargin10 {
  margin: 10px 0 10px 0;
}
.buttonMarginLeft10 {
  margin-left: 10px;
}
</style>
