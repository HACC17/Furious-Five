<template lang="pug">
  #interface
    section.section#interfaceTop
      .container
        task-entry(:masterData="masterData")
    section.section#interfaceMain
      .flexWrapper
        .flexChild
          schedule-app(:masterData="masterData")
        .flexChild
          .columns
            .column
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
      focusedTask: [],
      showTaskEdit: false
    }
  },
  mounted: function () {
    // Setup Styling & Animations
    jQuery(".flexWrapper").height((jQuery(window).outerHeight() - (jQuery("#interfaceTop").outerHeight() + jQuery("#nav").outerHeight())) + "px")

    // jQuery Event Listeners
    jQuery(window).resize(() => {
      jQuery(".flexWrapper").height((jQuery(window).outerHeight() - (jQuery("#interfaceTop").outerHeight() + jQuery("#nav").outerHeight())) + "px")
    })

    // Bus Event Listeners
    Bus.$on("taskEditChanged", (isEditing, focusedTask) => {
      this.focusedTask = focusedTask
      this.showTaskEdit = isEditing
    })
  },
  updated: function () {
    // jQuery(".flexWrapper").height((jQuery(window).height() - jQuery("#interfaceTop").height()) + "px")
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

#interfaceMain {
  padding-top: 0px;
  padding-bottom: 0px;
}

.flexWrapper {
  display: flex;
}

.flexChild {
  flex: 1;
  overflow: auto;
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
