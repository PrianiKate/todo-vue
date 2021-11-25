Vue.component('todo-list', {
  template: `
    <ul class="todo-list" id="todo">
      <todo-item
        v-for="item in todoList"
        v-bind:todo="item"
        :key="item.id"
      ></todo-item>
    </ul>`,
  computed: {
    todoList () {
      return store.state.todoList;
    }
  },
});
