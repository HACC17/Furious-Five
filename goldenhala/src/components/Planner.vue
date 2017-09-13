<template lang="pug">
  #plannerApp
    p {{ msg }}
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
          .card: .card-content
            span {{ task.id }}
            span {{ task.name }}
    //- draggable.list-group(element="ul", v-model="list", :options="dragOptions", :move="onMove", @start="isDragging=true", @end="isDragging=false")
    //-   transition-group(type="transition", :name="'flip-list'")
    //-     li.list-group-item(v-for="element in list", :key="element.order")
    //-       i(:class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'", @click=" element.fixed=! element.fixed", aria-hidden="true")
    //-       | {{element.name}}
    //-       span.badge {{element.order}}
    //- draggable(element="span", v-model="list2", :options="dragOptions", :move="onMove")
    //-   transition-group.list-group(name="no", tag="ul")
    //-     li.list-group-item(v-for="element in list2", :key="element.order")
    //-       i(:class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'", @click=" element.fixed=! element.fixed", aria-hidden="true")
    //-       |               {{element.name}}
    //-       span.badge {{element.order}}
    pre {{ tasksString }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
// import _ from "lodash"
import draggable from "vuedraggable"
import { Bus } from "./Bus.js"

export default {
  name: "Planner",
  components: {
    draggable
  },
  data () {
    return {
      msg: "i like cats",
      tasks: [
        {name: "John", id: "123132"},
        {name: "Joao", id: "243434234"},
        {name: "Jean", id: "23432423"}
      ],
      // list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
      // list2:[],
      editable: true,
      isDragging: false,
      delayedDragging:false
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: "tasks",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    tasksString () {
      return JSON.stringify(this.tasks, null, 2);
    }
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    },
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
  created: () => {
    Bus.$on("addNewTask", (msg) => {
      alert(msg);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-content {
  padding: 0.5rem;
}

.swap-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost > .card {
  opacity: .5;
  background: blue;
}

/*.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i{
  cursor: pointer;
}*/

</style>
