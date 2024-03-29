import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Discover from './views/Discover.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    }
  ]
})
