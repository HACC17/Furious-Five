<template lang="pug">
- var debug = false
#eisenhowerInterface.flexWrapper
  .gridLabelHorizontal Urgent
  .gridLabelHorizontal(style="left: 50%") Not Urgent
  .gridLabelVertical Important
  .gridLabelVertical(style="top: 50%") Not Important
  .flexChild
    .column
      if debug
        span 1
      .columns
        .column
          .card(v-for="(task, index) in uiTasks"): .card-content: .level
            .level-left: .level-item: span {{ task.name }}
        //- .column
        //-   .card(v-for="(task, index) in uniTasks"): .card-content: .level
        //-     .level-left: .level-item: span {{ task.name }}
      //- li(v-for="classes in masterData.tasks") {{ item.message }}
    .column
      if debug
        span 3
      .columns
        .column
          .card(v-for="(task, index) in uniTasks"): .card-content: .level
            .level-left: .level-item: span {{ task.name }}
  .flexChild
    .column
      if debug
        span 2
      .columns
        .column
          .card(v-for="(task, index) in nuiTasks"): .card-content: .level
            .level-left: .level-item: span {{ task.name }}
    .column
      if debug
        span 4
      .columns
        .column
          .card(v-for="(task, index) in nuniTasks"): .card-content: .level
            .level-left: .level-item: span {{ task.name }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import jQuery from "jQuery"
import { Bus } from "./Bus.js"
export default {
  name: "Eisenhower",
  props: ["masterData"],
  data () {
    return {
      //
    }
  },
  computed: {
    uiTasks () {
      return _.filter(this.masterData.tasks, (task) => {
        return task.labels.indexOf("urgent") > -1 && task.labels.indexOf("important") > -1;
      });
    },
    nuiTasks () {
      return _.filter(this.masterData.tasks, (task) => {
        return task.labels.indexOf("urgent") === -1 && task.labels.indexOf("important") > -1;
      });
    },
    uniTasks () {
      return _.filter(this.masterData.tasks, (task) => {
        return task.labels.indexOf("urgent") > -1 && task.labels.indexOf("important") === -1;
      });
    },
    nuniTasks () {
      return _.filter(this.masterData.tasks, (task) => {
        return task.labels.indexOf("urgent") === -1 && task.labels.indexOf("important") === -1;
      });
    }
  },
  methods: {
    // Future design integration
    splitArray (filteredTasks, whichHalf) {
      (whichHalf === 1) ? filteredTasks.slice(0, Math.ceil(filteredTasks.length / 2)) : filteredTasks.slice(Math.ceil(filteredTasks.length / 2), filteredTasks.length);
    }
  },
  mounted: function () {
    // Setup Styling & Animations
    jQuery(".flexWrapper").height((jQuery(window).outerHeight() - (jQuery("#nav").outerHeight())) + "px");

    // jQuery Event Listeners
    jQuery(window).resize(() => {
      jQuery(".flexWrapper").height((jQuery(window).outerHeight() - (jQuery("#nav").outerHeight())) + "px");
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gridLabelHorizontal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  z-index: 1;
  background-color: white;
  /*left: calc(100% / 4);*/
}

.gridLabelVertical {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  transform: rotate(-90deg);
}

.flexWrapper {
  display: flex;
  padding: 10px;
}

.flexChild {
  flex: 1;
}

.flexChild > .column {
  height: 50%;
  overflow: auto;
  padding-top: 50px;
  padding-left: 80px;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
