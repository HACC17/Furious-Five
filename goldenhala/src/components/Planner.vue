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
      tasks: this.masterData.tasks,
      animations: false,
      isDragging: false,
      delayedDragging: false,
      prevEditingTaskID: null
    }
  },
  computed: {
    nextIDIncrement () {
      return (_.max(_.map(this.tasks, "id")) + 1) || 1;
    },
    isEditing () {
      if (this.prevEditingTaskID) {
        _.find(this.tasks, {id: this.prevEditingTaskID}).editing = true;
      }
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
      Bus.$emit("taskEditChanged", this.isEditing, _.filter(this.tasks, "editing")[0]);
    }
  },
  watch: {
    tasks () {
      Bus.$emit("updateAllTasks", this.tasks);
    },
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
    // Enable & Reset Animations
    this.animations = true;
    _.map(this.tasks, function (t) {
      t.editing = false;
    });

    // Bus Event Listeners
    // From TaskEntry
    Bus.$on("addNewTask", (taskObj) => {
      this.tasks.push({name: taskObj.origEntry, id: this.nextIDIncrement, editing: false, labels: []});
    });

    // From TaskEdit
    Bus.$on("updateTasksRequest", () => {
      Bus.$emit("updateAllTasks", this.tasks);
    });

    Bus.$on("setPrevEditingTaskID", (taskID) => {
      _.map(this.tasks, function (t) {
        t.editing = false;
      });
      this.prevEditingTaskID = taskID;
      this.refreshSidebar();
    });

    Bus.$on("deleteTask", (taskID) => {
      this.tasks.splice(_.findIndex(this.tasks, {id: taskID}), 1);
    });
  },
  beforeDestroy: function () {
    _.map(this.tasks, function (t) {
      t.editing = false;
    });
    Bus.$off();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ghost {
  opacity: .5;
  background: red;
}

.swap-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
