const state = {
  name: 'a'
}

const getters = {

}

const mutations = {
  TEST_A(state, value) {
    state.name = value;
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
