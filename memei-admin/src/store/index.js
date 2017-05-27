import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modal'
import categories from './categories'

const store = new Vuex.Store({

  modules: {

    modal,
    categories

  }

})

// vuex hot reloading
if (module.hot) {
  module.hot.accept([
    './modal',
    './categories'
  ], () => {
    store.hotUpdate({
      modules: {
        modal: require('./modal').default,
        categories: require('./categories').default
      }
    })
  })
}

export default store
