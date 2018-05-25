import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => {
      require(['@/components/HelloWorld'], resolve)
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: resolve => {
      require(['@/components/Test'], resolve)
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
