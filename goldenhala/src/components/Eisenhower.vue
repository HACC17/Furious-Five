<template lang="pug">
  #eisenhowerInterface
    //- All code goes inside here
    p {{ myVar }}
    input(v-model="bob")
    p {{ bob }}
    #eisenhowerData
      .columns 
        .column Urgent Important
          //- li (v-for="classes in schedule") {{ item.message }}
        .column Less Urgent
      .columns
        .column Less Important
        .column
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import _ from "lodash"
import { Bus } from "./Bus.js"
export default {
  name: "Eisenhower",
  props: ["masterData"],
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
  #eisenhowerData {
    width: 100%;
    margin-top: 5vh;
  }
  #eisenhowerData .columns .column {
    border: 1px solid #000;
    background-color: pink;
    height: 41vh;
  }
</style>
