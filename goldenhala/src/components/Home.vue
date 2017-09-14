<template lang="pug">
  div#interface
    section.section#interfaceTop
      .container
        task-entry(:masterData="masterData")
    section.section#interfaceMain(:style="interfaceMainStyleObj")
      .columns
        .column
          schedule-app
        .column
          .columns
            .column
              planner-app
            transition(
              name="showTaskEditTransition",
              enter-active-class="animated slideInRight",
              leave-active-class="animated slideOutRight"
            )
              .column(v-if="showTaskEdit")
                task-edit
</template>

<script>
/* eslint quotes: ["error", "double"] */
import jQuery from "jQuery"
import { Bus } from "./Bus.js"
import TaskEntry from "./TaskEntry.vue"
import Schedule from "./Schedule.vue"
import Planner from "./Planner.vue"
import TaskEdit from "./TaskEdit.vue"

export default {
  name: "Home",
  props: ["masterData"],
  components: {
    "task-entry": TaskEntry,
    "schedule-app": Schedule,
    "planner-app": Planner,
    "task-edit": TaskEdit
  },
  data () {
    return {
      showTaskEdit: false,
      interfaceMainStyleObj: {}
    }
  },
  mounted: function () {
    // Setup Animations
    this.interfaceMainStyleObj = {marginTop: jQuery("#interfaceTop").height() + "px"}

    // Bus Event Listeners
    Bus.$on("taskEditChanged", (isEditing) => {
      console.log(isEditing)
      this.showTaskEdit = isEditing
    })
  }
}
</script>

<style>
.animated {
  -webkit-animation-duration: 0.3s;
  -moz-animation-duration: 0.3s;
  -o-animation-duration: 0.3s;
  animation-duration: 0.3s;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#interface {
  padding-top: 10px;
}
#interfaceTop {
  position: fixed;
}
</style>
