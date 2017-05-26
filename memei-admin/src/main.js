// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Vuex)
Vue.use(iView)
Vue.config.productionTip = false

Vue.prototype.$http = axios

const moduleA = {
  state: {
    count: 0
  },
  getters: {
    countAdd2: state => {
      return state.count + 2
    },
    countAdd2Add2: (state, getters) => {
      return getters.countAdd2 + 2
    }
  },
  mutations: {
    increment: (state, n) => {
      state.count += n
    },
    decrement: state => {
      state.count--
    }
  }
}

const moduleB = {
  state: {
    count2: 10
  }
}

let store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
