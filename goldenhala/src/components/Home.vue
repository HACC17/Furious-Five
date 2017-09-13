<template lang="pug">
  div#interface
    section.section
      .container
        task-entry
    section.section
      .columns
        .column.is-6
          schedule-app
        .column.is-6
          planner-app
</template>

<script>
/* eslint quotes: ["error", "double"] */
import Vue from "vue"
import TaskEntry from "./TaskEntry.vue"
import Schedule from "./Schedule.vue"
import Planner from "./Planner.vue"

var bus = new Vue()
function doNothing () {}
doNothing(bus)

export default {
  name: "Home",
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
h1, h2 {
  font-weight: normal;
}

ul {
 list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
   margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
