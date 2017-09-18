<template lang="pug">
  div#app
    #loadingMessage.modal.is-active
      .modal-background
      .modal-card
        .modal-card-body.has-text-centered
          h1.title Loading...
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
            //- .navbar-item#loadingMessage
            //-   span Loading...&nbsp;
          .navbar-end
              //- .navbar-item: router-link(to="help"): i.fa.fa-question-circle
              .navbar-item: router-link(to="settings"): i.fa.fa-cog
              //- .navbar-item: router-link(to="logout"): i.fa.fa-sign-out
    //- section.section
    router-view(:masterData="masterData")
</template>

<script>
/* eslint quotes: ["error", "double"] */
import { Bus } from "@/components/Bus.js"
const defaultTasks = [
  {name: "Add a new task in the task entry bar above.", id: 1, editing: false, labels: [], tags: [], class: "", notes: ""},
  {name: "Double click me to edit me.", id: 2, editing: false, labels: [], tags: [], class: "", notes: ""},
  {name: "You can add labels. For example, I am important.", id: 3, editing: false, labels: ["important"], tags: [], class: "", notes: ""},
  {name: "I am urgent.", id: 4, editing: false, labels: ["urgent"], tags: [], class: "", notes: ""},
  {name: "I am both.", id: 5, editing: false, labels: ["important", "urgent"], tags: [], class: "", notes: ""},
  {name: "I have some notes you might want to read.", id: 6, editing: false, labels: [], tags: [], class: "", notes: "You can click Eisenhower at the top of this page to see the important/urgent tasks in a grid format."}
]

export default {
  name: "App",
  data () {
    return {
      plugins: [
        {name: "Eisenhower", route: "eisenhower"},
        {name: "Common Break Finder", route: "commonbreak"}
        // {name: "Teacher Rater", route: "teacherRater"}
      ],
      tasks: JSON.parse(localStorage.getItem("tasks")) || defaultTasks,
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
      this.onUpdateAllTasks([
        {name: "Add a new task in the task entry bar above.", id: 1, editing: false, labels: [], tags: [], class: "", notes: ""},
        {name: "Double click me to edit me.", id: 2, editing: false, labels: [], tags: [], class: "", notes: ""},
        {name: "You can add labels. For example, I am important.", id: 3, editing: false, labels: ["important"], tags: [], class: "", notes: ""},
        {name: "I am urgent.", id: 4, editing: false, labels: ["urgent"], tags: [], class: "", notes: ""},
        {name: "I am both.", id: 5, editing: false, labels: ["important", "urgent"], tags: [], class: "", notes: ""},
        {name: "I have some notes you might want to read.", id: 6, editing: false, labels: [], tags: [], class: "", notes: "You can click Eisenhower at the top of this page to see the important/urgent tasks in a grid format."}
      ])
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
$primary: $blue;
$primary-invert: findColorInvert($primary);
// $twitter: #4099FF;
// $twitter-invert: findColorInvert($twitter);

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
    "danger": ($danger, $danger-invert)
    // "twitter": ($twitter, $twitter-invert)
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
