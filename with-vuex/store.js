const store = new Vuex.Store({
  state: {
    todoList: [
      { id: 0, text: 'Read Vue documentation' },
      { id: 1, text: 'Make Todo example' },
      { id: 2, text: 'Read other Vue tutorials' },
    ]
  },

  mutations: {
    addTodoItem (state, newItemText) {
      const newId = state.todoList.length ? state.todoList[state.todoList.length - 1]?.id + 1 : 0;
      state.todoList.push({ id: newId, text: newItemText });
    },

    deleteTodoItem (state, itemId) {
      state.todoList = state.todoList.filter(({ id }) => id !== itemId);
    }
  },
});

Vue.use(store);
