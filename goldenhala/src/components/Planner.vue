<template lang="pug">
- var debug = true
#plannerApp
  draggable(
    element="ul",
    v-model="tasks",
    :options="dragOptions",
    @start="isDragging=true",
    @end="isDragging=false"
  )
    transition-group(type="transition", name="swap")
      li(
        is="task-item",
        v-for="(task, index) in tasks",
        :task="task",
        :key="task.id",
        :id="'task-' + task.id"
    )
    //-     transition(
    //-       :appear="animations",
    //-       name="addTransition",
    //-       enter-active-class="animated fadeIn",
    //-       leave-active-class="animated fadeOut"
    //-     )
  if debug
    button(@click="deleteTask()") Delete last task
    span {{ isEditing }}
    pre {{ tasksString }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import draggable from "vuedraggable"
import { Bus } from "./Bus.js"
import TaskItem from "./TaskItem.vue"

export default {
  name: "Planner",
  props: ["masterData"],
  components: {
    draggable,
    "task-item": TaskItem
  },
  data () {
    return {
      nextIDIncrement: 1,
      animations: false,
      isDragging: false,
      delayedDragging: false,
      prevEditingTask: null
    }
  },
  computed: {
    tasks () {
      return this.masterData.tasks;
    },
    isEditing () {
      // TODO - when you change the focused task, also change the sidebar by falsing the editing property of the prev focused task
      this.prevEditingTask = (this.prevEditingTask) ? "" : _.some(this.tasks, "editing");
      return _.some(this.tasks, "editing");
    },
    dragOptions () {
      return  {
        animation: 0,
        group: "tasks",
        // disabled: this.editing,
        handle: ".dragHandle",
        ghostClass: "ghost"
      };
    },
    tasksString () {
      return JSON.stringify(this.tasks, null, 2);
    }
  },
  methods: {
    refreshSidebar () {
      console.log("Refreshing sidebar")
      Bus.$emit("taskEditChanged", this.isEditing, _.filter(this.tasks, "editing")[0]);
    }
  },
  watch: {
    isEditing () {
      this.refreshSidebar();
    },
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick( () => {
        this.delayedDragging = false;
      });
    }
  },
  mounted: function () {
    // Enable Animations
    this.animations = true;

    // Bus Event Listeners
    Bus.$on("addNewTask", (taskObj) => {
      this.tasks.push({name: taskObj.origEntry, id: this.nextIDIncrement, editing: false, labels: []});
      this.nextIDIncrement++;
    });

    Bus.$on("taskChanged", (taskID, newTaskObj) => {
      this.tasks.splice(_.findIndex(this.tasks, {id: taskID}), 1, newTaskObj);
    });

    Bus.$on("deleteTask", (taskID) => {
      this.tasks.splice(_.findIndex(this.tasks, {id: taskID}), 1);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swap-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
