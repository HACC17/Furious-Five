<template lang="pug">
- var debug = false
#taskEntry
  .field.has-addons.has-addons-centered
    .control.has-icons-left
      span.select
        select(v-model="selectedClass")
          option(selected)
          option(v-for="schoolClass in sched.key") {{ schoolClass.className.split(" ").slice(0, 2).join(" ") }}
          //- each val in [1, 2, 3]
          //-   option= val
      span.icon.is-small.is-left
        i.fa.fa-globe
    .control.is-expanded
      input.input.is-full-width(
        type="text",
        :placeholder="placeholderText",
        v-model="textEntry",
        @keyup="analyzeEntry",
        @keyup.enter="addNewTask"
      )
    .control
      a.button.is-primary(@click="addNewTask") Go!
  .field
    p.help(:id="color") {{ selectedClass }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import { Bus } from "./Bus.js"
import { ExSched } from "../assets/ExSched.js"

export default {
  name: "hello",
  props: ["masterData"],
  data () {
    return {
      textEntry: "",
      placeholderText: "Enter assignment here",
      selectedClass: null,
      sched: ExSched
    }
  },
  computed: {
    color () {
      return this.masterData.settings.color;
    }
  },
  methods: {
    addNewTask () {
      Bus.$emit("addNewTask", {origEntry: this.textEntry, class: this.selectedClass});
      //Bus.$emit("addNewTask", {origEntry: this.textEntry});
      this.textEntry = "";
    },
    analyzeEntry () {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
