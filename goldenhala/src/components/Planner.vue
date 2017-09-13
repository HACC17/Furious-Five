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
          enter-active-class="animated tada",
          leave-active-class="animated bounceOutRight"
        )
          .card: .card-content: .level
            .level-left
              .level-item.dragHandle
                span.icon: i.fa.fa-bars
              .level-item.taskName(@dblclick="")
                if debug
                  span {{ task.id + " " }}
                //- https://jsfiddle.net/jpeter06/ppyeo1tg/
                span {{ task.name }}
  if debug
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
        {name: "John", id: "13423423432423"},
        {name: "Joao", id: "2343242343243242"},
        {name: "Jean", id: "242342432423423"}
      ],
      animations: false,
      currentlyEditing: true,
      isDragging: false,
      delayedDragging:false
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: "tasks",
        disabled: !this.editing,
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
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
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
