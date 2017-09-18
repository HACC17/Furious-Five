<template lang="pug">
- var debug = false
#taskEdit
  p(style="margin: 10px")
    strong Task:&nbsp;
    span {{ task.name }}
  section.section
    .level: .level-left
      .level-item: a.button.is-warning(:class="importantBtnStyle", @click="changeTask('xor', 'labels', ['important'])") Important
      .level-item: a.button.is-danger(:class="urgentBtnStyle", @click="changeTask('xor', 'labels', ['urgent'])") Urgent
    textarea.textarea(v-model="task.notes", @keyup="changed", @change="changed")
  section.section
    button.button.is-primary(@click="changed(); stopEditing();") Save
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import { Bus } from "./Bus.js"

export default {
  name: "TaskEdit",
  props: ["masterData", "task"],
  data () {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },
  computed: {
    importantBtnStyle () {
      return (this.task.labels.indexOf("important") > -1) ? "" : "is-outlined";
    },
    urgentBtnStyle () {
      return (this.task.labels.indexOf("urgent") > -1) ? "" : "is-outlined";
    }
  },
  methods: {
    changed () {
      Bus.$emit("updateTasksRequest");
    },
    stopEditing () {
      this.task.editing = false;
      Bus.$emit("setPrevEditingTaskID", (this.task.editing) ? this.task.id : null);
    },
    changeTask (changeFunction, ...args) {
      switch (changeFunction) {
        case "xor":
          this.task[args[0]] = _.xor(this.task[args[0]], args[1]);
      }
      this.changed();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#taskEdit {
  border: 1px solid black;
  height: 100%;
}
</style>
