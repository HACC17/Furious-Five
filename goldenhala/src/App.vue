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
      tasks: JSON.parse(localStorage.getItem("tasks")),
      // tasks: [
      //   {name: "John", id: 100, editing: false, labels: ["important"]},
      //   {name: "Joao", id: 200, editing: false, labels: ["urgent"]},
      //   {name: "Jean", id: 300, editing: false, labels: ["important", "urgent"]}
      // ],
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
  watch: {
    tasks () {
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
  },
  methods: {
    onUpdateAllTasks (newTasks) {
      this.tasks = newTasks

      // Workaround because Vue.js cannot detect when an array/object's element is changed
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
    onResetAllData () {
      this.onUpdateAllTasks([])
    }
  },
  mounted: function () {
    // Bus Event Listeners - Must Put in Updated Lifecycle Hook too, or else Bus.$off() will remove it when router view changed
    Bus.$on("updateAllTasks", this.onUpdateAllTasks)
    Bus.$on("resetAllData", this.onResetAllData)
  },
  updated: function () {
    Bus.$on("updateAllTasks", this.onUpdateAllTasks)
    Bus.$on("resetAllData", this.onResetAllData)
  },
  beforeDestroy: function () {
    Bus.$off()
  }
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

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
