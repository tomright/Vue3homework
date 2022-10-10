export default {
  namespaced: true,
  state: {
    items: [
      { filmName: "Области тьмы", year: 2011 },
      { filmName: "Игра на понижение", year: 2015 },
      { filmName: "Такси", year: 1998 },
    ],
  },
  getters: {
    todoItems(state) {
      return state.items;
    },
  },
};
