import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'world',
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: () => import('@components/HelloWorld')
    }
  ]
})
