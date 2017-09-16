<template lang="pug">
- var debug = false
#taskEdit
  section.section
    .level: .level-left
      .level-item: a.button.is-warning(:class="importantBtnStyle") Important
      .level-item: a.button.is-danger(:class="urgentBtnStyle") Urgent
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
    taskChanged () {
      //
    }
  },
  mounted: function () {
    console.log(this.task);
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
