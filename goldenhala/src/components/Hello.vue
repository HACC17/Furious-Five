<template lang="pug">
  p {{ msg }}
</template>

<script>
/* eslint quotes: ["error", "double"] */
import { Bus } from "./Bus.js"

export default {
  name: "Hello",
  data () {
    return {
      msg: "hi"
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
