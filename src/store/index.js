import { createStore } from "vuex";
import TodoList from "./TodoList";

const store = createStore({
  state: {
    // наш store, тут хранятся данные
    count: 0,
  },
  getters: { // аналог computed методов, то есть это что то, что вычисляется, если произошло изменение. Так же можно просто возвращать state.
    countPlusOne(state) {
      return state.count + 1;
    },
  },
  actions: {     // здесь описываются "дорогие" методы, то есть методы, которые долго идут по времени, например обращения на серверу
                 // однако сами методы не имею прямого доступа к state, они лишь могут вызвать методы из мутации. 
    async save() {
      console.log("Сохранение завершенно - тестовое сообщение");
    },
    saveWithEdit(context) {
      console.log("Сохранение с изменением state");
      context.commit("increment");
    },
  },
  mutation: {  // тут описываются методы для изменения state, эти методы должны быть синхронными
    increment(state) {
      state.count++;
    },
  },
  modules: {
    TodoList,
  },
});

export default store;
