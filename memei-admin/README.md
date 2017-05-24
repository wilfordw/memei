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
