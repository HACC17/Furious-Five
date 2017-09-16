<template lang="pug">
#scheduleApp
  #controls
    a#addNew.button.is-primary Add block
  .grid-stack.grid-stack-6
    //- .grid-stack-item(data-gs-x="0" data-gs-y="0" data-gs-width="1" data-gs-height="4" data-gs-locked)
    //-   .grid-stack-item-content Test1
    //- .grid-stack-item(data-gs-x="1" data-gs-y="0" data-gs-width="1" data-gs-height="1" data-gs-locked)
    //-   .grid-stack-item-content Test2
    //- .grid-stack-item(data-gs-x="2" data-gs-y="0" data-gs-width="1" data-gs-height="1" data-gs-locked)
    //-   .grid-stack-item-content Test3
    //- .grid-stack-item(data-gs-x="3" data-gs-y="0" data-gs-width="1" data-gs-height="1" data-gs-locked)
    //-   .grid-stack-item-content Test4
    //- .grid-stack-item(data-gs-x="4" data-gs-y="0" data-gs-width="1" data-gs-height="1" data-gs-locked)
    //-   .grid-stack-item-content Test5
    //- .grid-stack-item(data-gs-x="5" data-gs-y="0" data-gs-width="1" data-gs-height="1" data-gs-locked)
    //-   .grid-stack-item-content Test6
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

  #scheduleApp .grid-stack div {
    background-color: red;
  }

  .grid-stack {
    margin-top: 2vh;
  }

  .test {
    background-color: blue;
  }
  

</style>
