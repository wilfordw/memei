import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modal'
import categories from './categories'
import authors from './authors'
import cards from './cards'
import photos from './photos'

const store = new Vuex.Store({

  modules: {

    modal,
    categories,
    authors,
    cards,
    photos

  }

})

// vuex hot reloading
if (module.hot) {
  module.hot.accept([
    './modal',
    './categories',
    './cards',
    './authors'
  ], () => {
    store.hotUpdate({
      modules: {
        modal: require('./modal').default,
        categories: require('./categories').default,
        authors: require('./authors').default,
        cards: require('./cards').default
      }
    })
  })
}

export default store
