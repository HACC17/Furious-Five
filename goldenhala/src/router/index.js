import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CommonBreak from '@/components/CommonBreak'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/commonbreak',
    name: 'Common Break Finder',
    component: CommonBreak
  }]
})
