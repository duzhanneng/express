import Vue from 'COMMON'
import App from '@/hello'
import router from '@/router/hello'
import '@/mock'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
