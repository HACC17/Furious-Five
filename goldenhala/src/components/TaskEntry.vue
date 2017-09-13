<template lang="pug">
- var debug = false
#taskEntry
  .field.has-addons.has-addons-centered
    .control.has-icons-left
      span.select
        select
          each val in [1, 2, 3]
            option= val
      span.icon.is-small.is-left
        i.fa.fa-globe
    .control.is-expanded
      input.input.is-full-width(type="text", placeholder="Hi", v-model="textEntry")
    .control
      a.button.is-primary(@click="addNewTask") Go!
  .field
    p.help Enter assignment!
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import { Bus } from "./Bus.js"

export default {
  name: "hello",
  data () {
    return {
      textEntry: ""
    }
  },
  methods: {
    addNewTask () {
      Bus.$emit("addNewTask", {origEntry: this.textEntry});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
