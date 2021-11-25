Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <div class="todo-item">
      <input type="checkbox" v-on:change="removeItem" />
      <li>{{ todo.text }}</li>
    </div>`,
  methods: {
    removeItem: function () {
      store.commit(DELETE_TODO_ITEM_MUTATION, this.todo.id);
    }
  }
});
