import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const state = {
  test: 'testStore'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
