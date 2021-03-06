// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import routes from '@/configs/routes'

import axios from 'axios'

import store from './store'
import {
  // ajax,
  deepCopy
} from '@/utils'

Vue.use(iView)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

Vue.prototype.$http = axios

Vue.prototype.$deepCopy = deepCopy
