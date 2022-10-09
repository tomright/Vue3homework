import { createStore } from "vuex";
import TodoList from "./TodoList";

const store = createStore({
  state: {
    // наш store, тут хранятся данные
    count: 0,
  },
  getters: {
    countPlusOne(state) {
      return state.count + 1;
    },
  },
  actions: {
    async save() {
      console.log("Сохранение завершенно - тестовое сообщение");
    },
    saveWithEdit(context) {
      console.log("Сохранение с изменением state");
      context.commit("increment");
    },
  },
  mutation: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    TodoList,
  },
});

export default store;
