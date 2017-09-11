<template lang="pug">
  div#scheduleApp
    .grid-stack
      .grid-stack-item.grid-stack-6(data-gs-x="0" data-gs-y="0" data-gs-height="2") test
      .grid-stack-item.grid-stack-6(data-gs-x="1" data-gs-y="0" data-gs-height="2") bob

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
</style>
