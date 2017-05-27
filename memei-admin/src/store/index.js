import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modal'
import categories from './categories'

export default new Vuex.Store({

  modules: {

    modal,
    categories

  }

})
