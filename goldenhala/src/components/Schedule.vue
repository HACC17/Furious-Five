<template lang="pug">
  div#scheduleApp
    div#schedule



</template>

<script>
/* eslint-disable*/
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
