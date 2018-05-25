import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@views/page1'
import page2 from '@views/page2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
