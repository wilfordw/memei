import axios from 'axios'
let qs = require('qs')

axios.defaults.baseURL = 'http://106.14.148.86/api'
// axios.defaults.baseURL = 'http://memei-api.dev/api'
//
// 添加拦截
axios.interceptors.request.use(function (config) {
   // 使用 application/x-www-form-urlencoded 格式 解决跨域冲突
  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})

export default axios
