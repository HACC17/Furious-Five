<template lang="pug">
  #eisenhowerInterface
    //- All code goes inside here
    p {{ myVar }}
    input(v-model="bob")
    p {{ bob }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
export default {
  name: "Eisenhower",
  data () {
    return {
      myVar: "Welcome to Your Vue.js App",
      bob: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
