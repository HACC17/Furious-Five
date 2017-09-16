<template lang="pug">
- var debug = false
#plannerApp
  draggable(
    element="ul",
    v-model="tasks",
    :options="dragOptions",
    :move="onMove",
    @start="isDragging=true",
    @end="isDragging=false"
  )
    transition-group(type="transition", name="swap")
      li.task-item(
        v-for="(task, index) in tasks",
        :key="task.id",
        :id="'task-' + task.id"
      )
        transition(
          :appear="animations",
          name="addTransition",
          enter-active-class="animated fadeIn",
          leave-active-class="animated fadeOut"
        )
          .card(
            :class="{noSelection: task.editing}",
            @click="refreshSidebar()",
            @dblclick.stop="onEdit(task)"
          )
            //- IMPORTANT TODO - FIX GLITCH - new dynamically edited todos cannot be edited!
            .card-content: .level
              .level-left
                .level-item.dragHandle
                  span.icon: i.fa.fa-bars
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
                      @blur="task.editing = false;"
                      @keyup.enter="task.editing = false;"
                    )
                    //- TODO make input non-small but same size as text - or change to styled textarea?
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

export default {
  name: "Planner",
  props: ["masterData"],
  components: {
    draggable
  },
  data () {
    return {
      nextIDIncrement: 1,
      tasks: [
        {name: "John", id: "100", editing: false, labels: ["important"]},
        {name: "Joao", id: "200", editing: false, labels: ["urgent"]},
        {name: "Jean", id: "300", editing: false, labels: ["important", "urgent"]}
      ],
      animations: false,
      isDragging: false,
      delayedDragging:false
    }
  },
  computed: {
    isEditing () {
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
    onMove ({relatedContext, draggedContext}) {
      console.log(relatedContext, draggedContext)
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    onEdit (task) {
      task.editing = !task.editing;
      // TODO automatically focus on input element
    },
    refreshSidebar () {
      console.log("Refreshing sidebar")
      Bus.$emit("taskEditChanged", this.isEditing, _.filter(this.tasks, "editing")[0]); // Child-to-parent comm, not sibling comm
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
      })
    }
  },
  mounted: function () {
    // Enable Animations
    this.animations = true;

    // Bus Event Listeners
    Bus.$on("addNewTask", (taskObj) => {
      this.tasks.push({name: taskObj.origEntry, id: this.nextIDIncrement});
      this.nextIDIncrement++;
    });

    Bus.$on("taskChanged", (taskID, newTaskObj) => {
      this.tasks.splice(_.findIndex(this.tasks, {id: taskID}), 1, newTaskObj);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-content {
  padding: 0.5rem;
}

.dragHandle {
  cursor: move;
}

.noSelection {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
}

.swap-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost > .card {
  opacity: .5;
  background: red;
}
</style>
