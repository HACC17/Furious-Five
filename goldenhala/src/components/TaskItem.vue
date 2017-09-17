<template lang="pug">
- var debug = false
.task-item.card(
  :class="{noSelection: task.editing}",
  @dblclick="onEdit"
)
  //-  @dblclick.stop="openSidebar(task)"
  .card-content: .level
    .level-left
      .level-item.dragHandle
        span.icon: i.fa.fa-bars
      .level-item
        input(type="checkbox", @change="deleteTask(task)")
      .level-item.taskNameWrapper
        if debug
          span {{ task.id + " " }}
        //- https://jsfiddle.net/jpeter06/ppyeo1tg/
        template(v-if="!task.editing")
          span {{ task.name }}
        template(v-else)
          input.input.is-fullwidth.is-small(
            type="text",
            v-model="task.name",
            @blur="task.editing = false;",
            @keyup.enter="task.editing = false;"
          )
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import { Bus } from "./Bus.js"

export default {
  name: "Task",
  props: ["task"],
  data () {
    return {
      //
    }
  },
  methods: {
    onEdit () {
      this.task.editing = !this.task.editing;
      Bus.$emit("setPrevEditingTaskID", (this.task.editing) ? this.task.id : null);
    },
    deleteTask (task) {
      Bus.$emit("deleteTask", task.id);
    },
    openSidebar () {
      //
    }
  },
  beforeDestroy: function () {
    Bus.$off();
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
