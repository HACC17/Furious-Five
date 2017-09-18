<template lang="pug">
  section.section#settings
    .modal(:class="{'is-active': showResetConfirmation}")
      .modal-background(@click="showResetConfirmation = false;")
      .modal-card
        .modal-card-body.has-text-centered
          strong Are you sure you want to reset everything?
          br
          br
          button.button.is-danger(@click="resetAllData(); showResetConfirmation = false;") Yes, I am sure
      button.modal-close.is-large(@click="showResetConfirmation = false;")
    .columns
      //- .column
      //-   h1.title Custom Labels
      //-   .tags
      //-     span.tag(v-for="tag in masterData.settings.tags") {{ tag }}
      .column
        h1.title Settings
        button.button.is-danger(@click="showResetConfirmation = true;") Reset All Data
</template>

<script>
/* eslint quotes: ["error", "double"] */
import { Bus } from "./Bus.js"

export default {
  name: "Settings",
  props: ["masterData"],
  data () {
    return {
      showResetConfirmation: false
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
