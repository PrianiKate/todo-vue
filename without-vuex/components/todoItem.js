Vue.component("todo-item", {
  props: ["todo"],
  template: `
    <div class="todo-item">
      <input type="checkbox" v-on:change="removeItem" />
      <li>{{ todo.text }}</li>
    </div>`,
  methods: {
    removeItem: function () {
      this.$emit('remove-todo', this.todo.id);
    },
  },
});
