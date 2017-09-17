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
          .card(v-for="(task, index) in tasksFirstHalf"): .card-content: .level
            .level-left
              .level-item
                span {{ task.name }}
        .column
          .card(v-for="(task, index) in tasksSecondHalf"): .card-content: .level
            .level-left
              .level-item
                span {{ task.name }}
      //- li(v-for="classes in masterData.tasks") {{ item.message }}
    .column
      if debug
        span 3
      each i in [1,2,3,4,5,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,11,1,1,1,11,11,1,1,1]
        p.card= i
  .flexChild
    .column
      if debug
        span 2
    .column
      if debug
        span 4
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
      tasksFirstHalf: this.masterData.tasks.slice(0, Math.ceil(this.masterData.tasks.length / 2)),
      tasksSecondHalf: this.masterData.tasks.slice(Math.ceil(this.masterData.tasks.length / 2), this.masterData.tasks.length)
    }
  },
  computed: {
    // tasksFirstHalf () {
    //   return this.masterData.tasks.splice(0, Math.ceil(this.masterData.tasks.length / 2));
    // },
    // tasksSecondHalf () {
    //   return this.masterData.tasks.splice(Math.ceil(this.masterData.tasks.length / 2), this.masterData.tasks.length - 1);
    // }
  },
  mounted: function () {
    console.log("hi")
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
