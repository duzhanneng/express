import Vue from 'COMMON'
import App from '@/app'
import router from '@/router'
import store from '@/store'
import '@/filters'
import '@/directives'
import '@/mock'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
