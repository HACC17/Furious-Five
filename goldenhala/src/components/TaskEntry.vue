<template lang="pug">
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
        input.input.is-full-width(type="text", placeholder="Hi")
      .control
        a.button.is-primary Go!
    .field
      p.help Enter assignment!
</template>

<script>
/* eslint quotes: ["error", "double"] */
export default {
  name: "hello",
  data () {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
