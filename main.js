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
          text: "task 2",
          done: false,
        },
      ],
    };
  },

  methods: {},
}).mount("#app");
