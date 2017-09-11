<template lang="pug">
  div#plannerApp
    p {{ msg }}
    draggable(v-model='myArray', :options="{group:'people'}", @start='drag=true', @end='drag=false')
      div(v-for='element in myArray') {{ element.name }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
import draggable from "vuedraggable"
export default {
  name: "Planner",
  components: {
    draggable
  },
  data () {
    return {
      msg: "i like cats",
      myArray: [
        {name: "John"},
        {name: "Joao"},
        {name: "Jean"}
      ]
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
