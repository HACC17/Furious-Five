<template lang="pug">
  div#app
    #nav.nav.has-shadow: .container
      .container.navbar
        .navbar-brand
          router-link(to="/")
            img(src="./assets/logo.png", style="height: 100%")
          .navbar-burger
            span
            span
            span
        .navbar-menu
          .navbar-start
            .navbar-item(v-for="item in plugins")
              router-link(:to="item.route") {{ item.name }}
          .navbar-end
              .navbar-item: router-link(to="help"): i.fa.fa-question-circle
              .navbar-item: router-link(to="settings"): i.fa.fa-cog
              .navbar-item: router-link(to="logout"): i.fa.fa-sign-out
    //- section.section
    router-view(:masterData="masterData")
</template>

<script>
/* eslint quotes: ["error", "double"] */
import { Bus } from "@/components/Bus.js"

export default {
  name: "App",
  data () {
    return {
      plugins: [
        {name: "Common Break Finder", route: "commonbreak"},
        {name: "Eisenhower", route: "eisenhower"}
        // {name: "Teacher Rater", route: "teacherRater"}
      ],
      tasks: [
        {name: "John", id: 100, editing: false, labels: ["important"]},
        {name: "Joao", id: 200, editing: false, labels: ["urgent"]},
        {name: "Jean", id: 300, editing: false, labels: ["important", "urgent"]}
      ],
      scheduleObject: {name: "Test", value: "bob"},
      settings: {name: "settings", color: "green"}
    }
  },
  computed: {
    masterData () {
      return {
        tasks: this.tasks,
        scheduleObject: this.scheduleObject,
        settings: this.settings
      }
    }
  },
  mounted: function () {
    Bus.$on("updateAllTasks", (newTasks) => {
      this.tasks = newTasks
    })
  },
  beforeDestroy: function () {
    Bus.$off()
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: red;*/
  /*margin-top: 60px;*/
}

.card-content {
  padding: 0.5rem;
}
</style>
