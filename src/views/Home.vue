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
      <h2>Директива v-show</h2>
      <p>
        Директива <strong>v-show</strong> тоже скрывает элемент, но он
        помечается как display: none.
      </p>
      <button @click="switchShow">{{ textShowButton }}</button>
      <div class="vshow" v-show="vShowBoolean">Тсссс.... Скрытый текст!</div>
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
      <p>
        Логика в том, что если в переменной будет значение означающее,
        <strong>false</strong> (false, 0, '', undefined, null, NaN), тот этот
        класс <strong>не будет</strong> применяться, в противном случае
        применится.
      </p>

      <div class="classCont">
        <button @click="switchColor" class="buttonMarginLeft10, buttonMargin10">
          Добавить к тексту класс цвета
        </button>
        <p :class="{ redText: colorBoolean }">
          Пример текста, которому будем менять цвет.
        </p>
      </div>
    </div>
    <div class="exampleNote">
      <h2>Директива v-for</h2>
      <p>
        Тот же самый for что и в JS, только нужно указывать по какому ключу
        нужно итерироваться.
      </p>
      <p><strong>Синтаксис: </strong> v-for="item in iterable" key="item.id"</p>
      <div class="ulfor">
        <p><strong>Пример:</strong></p>
        <ul>
          <li v-for="{ id, name, age, profession } in objectArray" key="id">
            Username is: {{ name }}, age: {{ age }}, profession:
            {{ profession }}.
          </li>
        </ul>
      </div>
      <div class="divfor">
        <p><strong>Пример с повторением div через v-for:</strong></p>
        <button @click="divForSwitcher">{{ usernameListShowButton }}</button>
        <div
          v-show="usernameBooleanSwitcher"
          class="usernameList"
          v-for="{ id, name, username, email } in vForDivArray"
          key="id"
        >
          <p>Name: {{ name }}</p>
          <p>Username: {{ username }}</p>
          <p>E-mail: {{ email }}</p>
        </div>
      </div>
      <div class="divfor">
        <p>
          <strong
            >Пример с повторением div через v-for, но добавляя индексы:</strong
          >
        </p>
        <div
          class="usernameList"
          v-for="({ filmName, year }, index) in vForIndexTestArray"
        >
          <p>Порядковый номер фильма: {{ index + 1 }}</p>
          <p>Название фильма: {{ filmName }}</p>
          <p>Год выхода фильма: {{ year }}</p>
        </div>
      </div>
    </div>
    <div class="exampleNote">
      <h2>Жизненный цикл компонента во VueJS. Хуки.</h2>
      <div class="flexcolumn">
        <button class="flexColumnButton" @click="simpleSwitcher">
          {{ imgButton }}
        </button>
        <br />
        <a
          href="https://habr.com/ru/company/vk/blog/350962/?ysclid=l8udmnc49n759197539"
          target="_blank"
        >
          Отличная статья на Хабре по хукам</a
        >
        <br />
        <img
          v-show="imgSwitcher"
          src="@/assets/lifecycle.svg"
          alt="Жизненный цикл приложения"
        />
      </div>
      <h3>Краткое описание хуков, которые нужно писать в export default:</h3>
      <p>
        <strong>beforeCreate()</strong> - хук выполняется прямо после
        инициализации, данные еще не реактивны, события не раскиданы.
      </p>
      <p>
        <strong>created()</strong> - можно получить доступ к
        <s>ректальным</s> реактивным данным и активным событиям.
      </p>
      <p>
        <strong>beforeMount()</strong> - выполняется до первичной отрисовки, но
        после компилирования шаблона или функции отрисовки.
      </p>
      <p>
        <strong>mounted()</strong> - выполняется сразу после инициализации DOM
        дерева, имеет полный доступ к реактивным компонентам, шаблонам и
        отрисованному DOM дереву(через this.$el)
      </p>
      <p>
        <strong>beforeUpdate()</strong> - срабатывает после изменения данных, но
        перед началом переисовки DOM. Можно получить новые данные перед тем как
        они перерисуются.
      </p>
      <p>
        <strong>update()</strong> - вызывается после изменения в DOM дереве.
        Самое безопасное место чтобы получить доступ к DOM после изменения.
      </p>
      <p>
        <strong>beforeDestroy()</strong> - срабатывает перед уничтожение
        приложения. Приложение все еще работает, но его дни сочтены и можно
        прибраться, отвязавшись от ненужных событий или рекативных подписей.
      </p>
      <p><strong>destroyed()</strong> - ну тут уже все уничтоженно.</p>
      <p>
        Работа хуков описана в коде, а так же можно посмотреть логи в консле по
        каждому хуку. Хуки beforeDestroy и destroyed не удалось показать на этой
        странице...
      </p>
    </div>
    <div class="exampleNote">
      <h2>Опция watch</h2>
      <p>Необходима для слежения за каким нибудь полем в data или props.</p>
      <p>
        Пишется, для Options API в export default, там объявляется функция с
        таким же именем что и поле в data\props и пишется тело функции.
      </p>
      <p><strong>Пример:</strong></p>
      <p>watch: {</p>
      <p>
        watchSwitcher(){ // так же принимает аргументы: первый аргумент новое
        значение, второй аргумент старое значение
      </p>
      <p>console.log('Изменилась переменная watchSwitcher')</p>
      <p>}</p>
      <p>},</p>
      <p>Нажми на кнопку ниже и открой консоль браузера</p>
      <button @click="watchSwitcherForButton">Нажми на меня</button>
    </div>
    <div class="exampleNote">
      <h2 ref="h2Refs">Параметр refs</h2>
      <p>
        Параметр refs нужен для прямой работы с некоторым объектами DOM дерева,
        причем работать с ними можно будет как будто они получены из JS.
        Например можно получать свойство оъекта innerText.
      </p>
      <p>Применение: добавляем атрибут тега rel="Какое нибудь имя"</p>
      <p>Пример смотри в коде, тут будет только кнопка</p>
      <button ref="ButtonRefs" @click="refsShow">
        Нажми и смотри в консоль разработчика или тут!
      </button>
      <div class="refsData">
        Список того, что сейчас находится в refs:
        <div class="usernameList" v-for="item in refsArray">
          Название ref: {{ item }}, значение: {{ this.$refs[item] }}
        </div>
      </div>
    </div>
    <!-- Добавил анимацию подсветки -->
    <div
      :class="{ animGreen: boolAnimGreen }"
      class="exampleNote"
      id="animWhite"
    >
      <h2>
        Создание и добавление компонентов <a name="CreateAndAddComponent"></a>
      </h2>
      <p>
        Для создания компоненты, по договоренности, нужно в папке components,
        создать файл <strong> НазваниеКомпонента.vue</strong>.
      </p>
      <p>
        Внутри файла воссоздать стандартную структуру Vue3 шаблона(template,
        script, style). В секцию script, в export default, добавить свойство
        name: 'ИмяКомпонента'
      </p>
      <p>Далее необходимо добавить:</p>
      <ul>
        <li>
          App.vue импорт этого компонента. Добавить в секцию script,
          <strong>
            import 'ИмяИзПоляDataNameКомпонента' from
            './components/НазваниеКомпонента.vue'</strong
          >
        </li>
        <li>
          Создать в export default свойство components и добавить в него
          ИмяИзПоляDataNameКомпонента
        </li>
        <li>объвить в template этот компонент</li>
      </ul>

      <div class="exampAddComponents">
        <h3>Пример добавления:</h3>
        <TodoList>
          <h4>Список фильмов:</h4>
        </TodoList>
      </div>
    </div>
    <div class="exampleNote">
      <h2>props</h2>
      <p>
        props - это свойство, которе необходимо для передачи некоторых данных в
        компоненту, извне. Пример: педеача в компоненту значений полученных
        через v-for, передача некоторых полей родительского компонента.
      </p>
      <h3>Синтаксис:</h3>
      <p>
        Прописываются в export default {components: НазваниеКомпонента},
        компоненты, в которую нужно передать некоторые значения из родительского
        компонента. В объявлении дочерней компо ненты, нужно прописать какие
        данные передаем: :filmName="filmName" :year="year" :index="index"
      </p>
      <p>
        Так же есть механизм, когда в объявлении ставится v-bind на объект с
        данными, в результате дочерний компонент получает объект, поля которого
        буду сопоставляться с props.
      </p>

      <p>
        Пример работы пропсов смотри в исходном коде
        <a @click="illuminationGreen" href="#CreateAndAddComponent"
          >этой записи</a
        >
      </p>
    </div>
    <div class="exampleNote">
      <h2>
        Передача данных из дочернего компонента в родительский. this.$emit
      </h2>
      <p>
        Прописываем в дочернем компоненте, в каком нибудь методе, который нужно
        передать, следующий код:
      </p>
      <p>
        <strong> this.$emit('названиеСобытия', какаятоПолезнаяНагрузка)</strong>
      </p>
      <p>
        Так же в дочернем компоненете, добавляем свойство emits: ['название
        события'], в export default
      </p>
      <p>
        Далее в родительском компоненте, в объявлении дочернего компонента,
        нужно прослушать это событие на переданные данные(событие) выше, то есть
        нам нужно засунуть в какой то метод, событие, которое мы получили.
      </p>
      <p>
        И далее уже описываем метод, то есть, то что он будет делать с
        полученным событием.
      </p>
      <p>
        Пример работы emit смотри в исходном коде
        <a @click="illuminationGreen" href="#CreateAndAddComponent"
          >этой записи</a
        >
      </p>
    </div>
    <div class="exampleNote">
      <h2>Работа со слотами.</h2>
      <p>
        слоты используются для параметризации отображения дочернего компонента.
      </p>
      <p>
        В дочернем элементе пишем <strong> &lt;slot&gt;</strong> "тут можно
        ввести значение по умолчанию" <strong>&lt;/slot&gt;</strong>
      </p>
      <p>В объявлении дочернего элемета добавляем данные для передчи в слот:</p>
      <p>
        <strong>&lt;TodoList&gt;</strong> Этот текст передасться в слот, который
        находится в дочернем компоненте TodoList
        <strong>&lt;/TodoList&gt;</strong>
      </p>
      <p>
        Пример работы слотов смотри в исходном коде
        <a @click="illuminationGreen" href="#CreateAndAddComponent"
          >этой записи</a
        >
      </p>
    </div>
    <div class="exampleNote">
      <h2>v-model - двухсторонее связывание.</h2>
      <p>
        Для двухсторонней привязки используют директиву
        <strong>v-mode="переменная"</strong>
      </p>
      <p>
        <strong>v-mode</strong> - можно применять только для &lt;input&gt;,
        &lt;select&gt;, &lt;textarea&gt; и компонентов Vue.
      </p>
      <h3>Пример:</h3>
      <input
        type="text"
        v-model="vmodelTest"
        placeholder="Напиши что нибудь!"
      />
      <p>{{ vmodelTest }}</p>
    </div>
    <div class="exampleNote">
      <h2>Vue Router</h2>
      <button class="buttonMargin10" @click="programJump">
        Тестирование программного перехода
      </button>
      <br />
      <router-link to="/aboutus">Тестовая ссылка о нас.</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import TodoList from "./components/TodoList.vue";
import TodoList from "@/components/TodoList.vue";
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
      vShowBoolean: false,
      textShowButton: "Показать скрытый текст",
      usernameListShowButton: "Много текста, нажми если хочешь увидеть",
      objectArray: [
        { id: 1, name: "Alex", age: "196", profession: "demon" },
        { id: 2, name: "Xela", age: "19", profession: "student" },
        { id: 3, name: "Exal", age: "6", profession: "children" },
        { id: 4, name: "Lexa", age: "16", profession: "sportsmen" },
        { id: 5, name: "Laxe", age: "96", profession: "old fart" },
        { id: 6, name: "Aelx", age: "69", profession: "pensioner" },
        {
          id: 7,
          name: "Exla",
          age: "39",
          profession: "It seems to be the new son of Elon Musk",
        },
      ],
      vForDivArray: [],
      usernameBooleanSwitcher: false,
      vForIndexTestArray: [
        { filmName: "Области тьмы", year: 2011 },
        { filmName: "Игра на понижение", year: 2015 },
        { filmName: "Такси", year: 1998 },
      ],
      imgButton: "Показать",
      imgSwitcher: false,
      watchSwitcher: true,
      refsArray: [],
      props: ["filmName", "year", "index"],
      boolAnimGreen: false,
      vmodelTest: "",
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
    switchShow() {
      if (this.vShowBoolean) {
        this.vShowBoolean = false;
        this.textShowButton = "Показать скрытый текст";
      } else {
        this.vShowBoolean = true;
        this.textShowButton = "Скрыть текст...";
      }
    },
    switchColor() {
      this.colorBoolean = !this.colorBoolean;
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
      alert("РЕЗУЛЬТАТ!!!");
    },
    hoverSound() {
      if (this.timeOut) {
        let sound = new Audio();
        sound.src = "./src/assets/najmi.mp3";
        sound.autoplay = true;
        this.timeOut = false;
        setTimeout(() => {
          this.timeOut = true;
        }, 4500);
      } else {
        console.log(`Время еще не вышло: ${this.timeOut}`);
      }
    },
    simpleIncrem() {
      this.calculatedNumber++;
    },
    async getUsers() {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.vForDivArray = users.data;
        console.log(users);
      } catch (e) {
        alert(`Произошла ошибка ${e}`);
      }
    },
    divForSwitcher() {
      if (this.usernameBooleanSwitcher) {
        this.usernameBooleanSwitcher = false;
        this.usernameListShowButton = "Много текста, нажми если хочешь увидеть";
      } else {
        this.usernameBooleanSwitcher = true;
        this.usernameListShowButton = "Много текста, нажми если хочешь скрыть";
      }
    },
    simpleSwitcher() {
      if (this.imgSwitcher) {
        this.imgSwitcher = false;
        this.imgButton = "Показать";
      } else {
        this.imgSwitcher = true;
        this.imgButton = "Скрыть";
      }
    },
    watchSwitcherForButton() {
      this.watchSwitcher = !this.watchSwitcher;
    },
    refsShow() {
      console.log(
        `Объекты которые находятся в refs: `,
        Object.keys(this.$refs)
      );

      this.refsArray = Object.keys(this.$refs);
    },
    illuminationGreen() {
      this.boolAnimGreen = true;
      setTimeout(() => {
        this.boolAnimGreen = false;
      }, 1000);
    },
    programJump() {
      console.log(
        "Программый переход, типа какая то логика работы тут описана."
      );
      this.$router.push("/aboutus");
    },
  },
  components: {
    TodoList,
  },
  watch: {
    watchSwitcher(newVal, old) {
      console.log(
        `Изменилась переменная watchSwitcher, новое значение: ${newVal}, старое значение: ${old}`
      );
    },
  },
  beforeCreate() {
    console.log("Работа хука beforeCreate");
  },
  created() {
    console.log("Работа хука created");
    console.log(`Объекты которые находятся в refs: `, this.$refs);
  },
  beforeMount() {
    console.log("Работа хука beforeMount");
  },

  mounted() {
    this.getUsers();
    console.log("Работа хука mounted");
    console.log(`Объекты которые находятся в refs: ${this.$refs}`);
  },
  beforeUpdate() {
    console.log("Работа хука beforeUpdate");
  },
  updated() {
    console.log("Работа хука update");
  },
  beforeDestroy() {
    console.log("Работа хука beforeDestroy");
  },
  destroyed() {
    console.log("Работа хука destroyed");
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
.redText {
  color: red;
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
.vshow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: darkseagreen;
  font-size: 20px;
  text-align: center;
  margin: auto;
}
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
.flexcolumn {
  display: flex;
  flex-direction: column;
}
.flexcolumn a {
  margin: 15px;
}
.flexColumnButton {
  position: sticky;
  top: 20px;
  width: 100px;
  height: 30px;
}
.animGreen {
  background-color: rgba(44, 228, 44, 0.438);
}
#animWhite {
  transition-duration: 1s;
}
</style>
