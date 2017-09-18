<template lang="pug">
- var debug = false
.task-item.card(
  :class="{noSelection: task.editing}",
  @dblclick="onEdit"
)
  //-  @dblclick.stop="openSidebar(task)"
  .card-content: .level(style="overflow: hidden")
    .level-left
      .level-item.dragHandle
        span.icon: i.fa.fa-bars
      .level-item
        input(type="checkbox", @change="deleteTask")
      .level-item.taskNameWrapper
        if debug
          span {{ task.id + " " }}
        //- https://jsfiddle.net/jpeter06/ppyeo1tg/
        template(v-if="!task.editing")
          span {{ task.name }}
        template(v-else)
          input.input.is-fullwidth.is-small(
            id="taskNameEditInput",
            type="text",
            v-model="task.name",
            @dblclick.stop="",
            @blur="changed(); onEdit();",
            @keyup.enter="blur"
          )
    .level-right
      .level-item
        span.is-small {{ task.class }}

</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import jQuery from "jQuery"
import { Bus } from "./Bus.js"

export default {
  name: "Task",
  props: ["task", "plannerIndex"],
  data () {
    return {
      //
    }
  },
  methods: {
    blur () {
      jQuery("#taskNameEditInput").blur();
    },
    changed () {
      Bus.$emit("updateTasksRequest");
    },
    onEdit () {
      this.task.editing = !this.task.editing;
      Bus.$emit("setPrevEditingTaskID", (this.task.editing) ? this.task.id : null);
    },
    deleteTask () {
      this.$emit("deleteTask", this.plannerIndex);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dragHandle {
  cursor: move;
}

.noSelection {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none;  /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
}
</style>
