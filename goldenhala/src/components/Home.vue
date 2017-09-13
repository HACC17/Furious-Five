<template lang="pug">
  div#interface
    section.section
      .container
        task-entry(:settings="settings")
    section.section
      .columns
        .column.is-6
          schedule-app
        .column.is-6
          planner-app
</template>

<script>
/* eslint quotes: ["error", "double"] */
import TaskEntry from "./TaskEntry.vue"
import Schedule from "./Schedule.vue"
import Planner from "./Planner.vue"

export default {
  name: "Home",
  props: ["scheduleObject", "settings"],
  components: {
    "task-entry": TaskEntry,
    "schedule-app": Schedule,
    "planner-app": Planner
  },
  data () {
    return {
      msg: "bob"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
