const { createApp } = Vue;
createApp({
  created() {},
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },
      tasks: [
        {
          text: "task 1",
          done: false,
        },
        {
          text: "task 2",
          done: false,
        },
        {
          text: "task 3",
          done: false,
        },
      ],
    };
  },

  methods: {
    addTask() {
      if (this.newTask.text.length > 0) {
        this.tasks.push(this.newTask);
      }

      this.newTask = {
        text: "",
        done: false,
      };
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    isDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
}).mount("#app");
