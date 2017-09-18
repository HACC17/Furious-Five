<template lang="pug">
  section.section#settings
    .columns
      .column
        h1.title Custom Labels
        .tags
          span.tag(v-for="tag in masterData.settings.tags") {{ tag }}
      .column
        h1.title Other Settings
        button.button.is-danger(@click="resetAllData") Reset All Data
</template>

<script>
/* eslint quotes: ["error", "double"] */
import { Bus } from "./Bus.js"

export default {
  name: "Settings",
  props: ["masterData"],
  data () {
    return {
      msg: "hi"
    }
  },
  methods: {
    resetAllData () {
      Bus.$emit("resetAllData")
    }
  },
  mounted: function () {
    //
  },
  beforeDestroy: function () {
    Bus.$off()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
