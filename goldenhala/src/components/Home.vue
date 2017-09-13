<template lang="pug">
  div#interface
    section.section#interfaceTop
      .container
        task-entry(:masterData="masterData")
    section.section#interfaceMain(:style="interfaceMainStyleObj")
      .columns
        .column.is-6
          schedule-app
        .column.is-6
          planner-app
</template>

<script>
/* eslint quotes: ["error", "double"] */
import jQuery from "jQuery"
import TaskEntry from "./TaskEntry.vue"
import Schedule from "./Schedule.vue"
import Planner from "./Planner.vue"

export default {
  name: "Home",
  props: ["masterData"],
  components: {
    "task-entry": TaskEntry,
    "schedule-app": Schedule,
    "planner-app": Planner
  },
  data () {
    return {
      interfaceMainStyleObj: {}
    }
  },
  mounted: function () {
    this.interfaceMainStyleObj = {marginTop: jQuery("#interfaceTop").height() + "px"}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#interface {
  padding-top: 10px;
}
#interfaceTop {
  position: fixed;
}
</style>
