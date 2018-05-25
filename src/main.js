import App from './App'
import router from './router'
import Vue from './test'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
