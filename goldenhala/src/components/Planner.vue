<template lang="pug">
  div#plannerApp
    p {{ msg }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
export default {
  name: "Planner",
  data () {
    return {
      msg: "i like cats"
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
