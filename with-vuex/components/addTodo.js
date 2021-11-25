Vue.component('add-todo', {
  data: function () {
    return {
      todoItemName: '',
    };
  },
  template: `
    <div>
      <h5>Add todo</h5>
      <input v-model="todoItemName" />
      <button v-on:click="addItem">Add</button>
    </div>`,
  methods: {
    addItem: function () {
      store.commit(ADD_TODO_ITEM_MUTATION, this.todoItemName);
      this.todoItemName = '';
    }
  }
});
