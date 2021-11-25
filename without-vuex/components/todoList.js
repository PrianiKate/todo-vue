Vue.component("todo-list", {
  props: ["todoList", "removeTodoItem"],
  template: `
    <ul class="todo-list">
      <todo-item
        v-for="item in todoList"
        v-bind:todo="item"
        :key="item.id"
        @remove-todo="removeTodoItem"
      ></todo-item>
    </ul>`,
});
