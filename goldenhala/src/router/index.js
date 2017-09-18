/* eslint quotes: ["error", "double"] */
import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import Settings from "@/components/Settings"
import Eisenhower from "@/components/Eisenhower"
import CommonBreak from "@/components/CommonBreak"

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/settings",
    name: "Settings",
    component: Settings
  }, {
    path: "/eisenhower",
    name: "Eisenhower",
    component: Eisenhower
  }, {
    path: "/commonbreak",
    name: "Common Break Finder",
    component: CommonBreak
  }]
})
