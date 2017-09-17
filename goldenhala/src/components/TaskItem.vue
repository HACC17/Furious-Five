<template lang="pug">
- var debug = false
.task-item.card(
  :class="{noSelection: task.editing}",
  @dblclick="task.editing = !task.editing;"
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
    onEdit (task) {
      task.editing = !task.editing;
      // TODO automatically focus on input element
    },
    deleteTask (task) {
      Bus.$emit("deleteTask", task.id);
    },
    openSidebar () {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dragHandle {
  cursor: move;
}

.ghost > .card {
  opacity: .5;
  background: red;
}

.noSelection {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none;  /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
}
</style>
