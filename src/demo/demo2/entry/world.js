import Vue from 'COMMON'
import App from '@/world'
import router from '@/router/world'
import '@/mock'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
