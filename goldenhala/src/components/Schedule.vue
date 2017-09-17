<template lang="pug">
#scheduleApp
  .grid-stack.grid-stack-6

</div>


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

  #scheduleApp {
    width: 100%;
    margin: auto;
  }

  #scheduleApp .grid-stack .grid-stack-item {
    background-color: red;
    border: 1px solid #000;
  }

  .grid-stack {
    margin-top: 2vh;
  }

  .test {
    background-color: blue;
  }
  

</style>
