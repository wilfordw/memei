# memei-admin

## 七牛上传
参考 https://segmentfault.com/a/1190000008479698
参考：[七牛：表单上传](https://developer.qiniu.com/kodo/manual/1272/form-upload)



## 那些坑

#### axios data参数跨域问题

参考[axios可以解决跨域访问的问题吗？](https://segmentfault.com/q/1010000007665348)

解决办法：axios POST请求时，默认使用 JSON 格式，改成 string 问题就解决了 [官方解决办法](https://github.com/mzabriskie/axios#using-applicationx-www-form-urlencoded-format)

```js
let qs = require('qs')
axios.post('/categories', qs.stringify({'name': 'steven'}))
```

**PUT**,**DELETE** 需要转成**POST**请求，配置`_method`参数（对应Laravel)，这里可以用axios拦截统一解决跨域问题

```js
// 添加拦截
axios.interceptors.request.use(function (config) {
  if (config.method === 'put') { // put 请求自动转换
    config.data._method = 'put'
    config.method = 'post'
  }

  if (config.method === 'delete') { // delete 请求自动转换
    config.data._method = 'delete'
    config.method = 'delete'
  }

   // 使用 application/x-www-form-urlencoded 格式 解决跨域冲突
  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})
```
