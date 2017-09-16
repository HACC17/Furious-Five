<template lang="pug">
  #interface
    section.section#interfaceTop
      .container
        task-entry(:masterData="masterData")
    section.section#interfaceMain(:style="interfaceMainStyleObj")
      .columns
        .column
          schedule-app(:masterData="masterData")
        .column
          .columns
            .column
              div.scrollContain
                planner-app(:masterData="masterData")
            transition(
              name="showTaskEditTransition",
              enter-active-class="animated slideInRight",
              leave-active-class="animated slideOutRight"
            )
              .column(v-if="showTaskEdit")
                task-edit(:masterData="masterData", :task="focusedTask")
</template>

<script>
/* eslint quotes: ["error", "double"] */
// import jQuery from "jQuery"
// JQUERY NEEDED FOR ANIMATIONS TODO
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
      focusedTask: [],
      showTaskEdit: false,
      interfaceMainStyleObj: {}
    }
  },
  mounted: function () {
    // Setup Animations
    // TODO
    // this.interfaceMainStyleObj = {marginTop: jQuery("#interfaceTop").height() + "px"}

    // Bus Event Listeners
    Bus.$on("taskEditChanged", (isEditing, focusedTask) => {
      this.focusedTask = focusedTask
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
  /* TODO */
  /*position: fixed;*/
  padding-bottom: 0px;
}

.scrollContain {
  border: 1px solid red;
  top: 0px;
  bottom: 0px;
  height: 100%;
  /*max-height: 100px;*/
  overflow: scroll;
  text-overflow: ellipsis;
  white-space: pre-line;
  /*overflow:hidden;*/
}
</style>
