import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import actions from './acitons'
import getters from './getters'
import mutations from './mutations'
import modal from './modal'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    modal
  }
})
