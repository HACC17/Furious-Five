<template lang="pug">
  div#scheduleApp
    .grid-stack.grid-stack-6
      .grid-stack-item(data-gs-x="0" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content test
      .grid-stack-item(data-gs-x="1" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content bob
      .grid-stack-item(data-gs-x="2" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content timmy
      .grid-stack-item(data-gs-x="3" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content sam
      .grid-stack-item(data-gs-x="4" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content john
      .grid-stack-item(data-gs-x="5" data-gs-y="0" data-gs-height="2" data-gs-width="1" data-gs-locked)
        .grid-stack-item-content peter
      .grid-stack-item(data-gs-x="6" data-gs-y="0" data-gs-height="2" data-gs-width="12" data-gs-locked)
        .grid-stack-item-content glenn


</template>

<script>
/* eslint quotes: ["error", "double"] */
import "../scripts/schedule.js"
export default {
  name: "Schedule",
  // ready: Script,
  data () {
    return {
      msg: "i am mr schedule"
    }
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

.grid-stack-item-content {
  background-color: red;
}
</style>
