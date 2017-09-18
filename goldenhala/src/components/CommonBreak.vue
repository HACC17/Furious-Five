<template lang="pug">
  #commonBreak

    a#compareSched.button.is-primary Compare Schedules
    #displayClasses
    #displayBreaks
    #container.columns
      #sched1.column.grid-stack.grid-stack-6
      #sched2.column.grid-stack.grid-stack-6
</template>

<script>
/* eslint-disable */
import { ScheduleMaker } from "../scripts-modular/schedule.js"
import '../scripts/compare.js'
export default {
  name: 'Common-Break-Finder',
  data () {
    return {
      msg: 'i ma bob'
    }
  },
  mounted: function () {
    try {
      console.log("bob")
      ScheduleMaker.makeSchedule()
    } catch (e) { return; }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
 list-style-type: none;
    padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#container {
  margin-top: 1vh;
  display: flex;
}

#container .column {
  flex: 1;
  border: 1px solid #000;
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

#compareSched {
  margin-top: 2vh;
  margin-left: 2vh;
}
</style>
