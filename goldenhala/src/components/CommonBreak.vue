<template lang="pug">
  #container.columns
    #sched1.column.grid-stack.grid-stack-6
    #sched2.column.grid-stack.grid-stack-6
</template>

<script>
import '../scripts/schedule.js'
export default {
  name: 'Common-Break-Finder',
  data () {
    return {
      msg: 'i ma bob'
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

.grid-stack {
  margin-top: 2vh;
}

.test {
  background-color: blue;
}
</style>
