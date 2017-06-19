import axios from 'axios'
import {
  deepCopy
} from '@/utils'
import {
  apiDomainOrIp
} from '@/configs'

let qs = require('qs')

axios.defaults.baseURL = apiDomainOrIp

//
// 添加拦截
axios.interceptors.request.use(function (config) {
  if (config.url === 'http://upload.qiniu.com') {
    return config
  }

  // 深度拷贝 保证不污染源来数据
  config.data = deepCopy(config.data)

  if (config.method === 'put') { // put 请求自动转换
    config.data._method = 'put'
    config.method = 'post'
  }

  if (config.method === 'delete') { // delete 请求自动转换
    config.data = {}
    config.data._method = 'delete'
    config.method = 'post'
  }

  // 使用 application/x-www-form-urlencoded 格式 解决跨域冲突
  config.data = qs.stringify(config.data)

  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})

export default axios
