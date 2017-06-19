<template>
  <div>
    <label class="mo-upload">
        <input type="file" :accept="accepts" @change="upload">
        <slot></slot>
    </label>
    <Button @click.native='onDelete'>删除</Button>
  </div>
</template>
<style>
.mo-upload {
  display: inline-block;
  position: relative;
  margin-bottom: 0;
}
.mo-upload input[type="file"] {
  display: none;
}
.mo-upload--label {
  display: inline-block;
  position: relative;
}
</style>
<script>
export default {
  name: 'MoUpload',
  props: {
    accepts: { // 允许的上传类型
      type: String,
      default: 'image/jpeg,image/jpg,image/png,image/gif'
    },
    flag: [String, Number], // 当前上传标识,以便于在同一个监听函数中区分不同的上传域
    maxSize: {
      type: Number,
      default: 0 // 上传大小限制
    }
  },
  methods: {
    upload (event) {
      let file = event.target.files[0]
      const self = this
      const flag = this.flag
      if (file) {
        const formData = new FormData()
        formData.append('file', file)

        // 获取token
        this.$http.post(`http://memei-api.dev/api/qiniu/token`)
        .then(response => {
          const result = response.data
          formData.append('token', result.token)
          formData.append('key', result.key)

            // 提交给七牛处理
          self.$http.post('http://upload.qiniu.com', formData, {
            progress (event) {
                    // 传递给父组件的progress方法
              self.$emit('progress', parseFloat(event.loaded / event.total * 100), flag)
            }
          })
          .then(response => {
            const result = response.data
            if (result.hash && result.key) {
                  // 传递给父组件的complete方法
              self.$emit('complete', 200, result, flag)
                  // 让当前target可以重新选择
              event.target.value = null
            } else {
              self.$emit('complete', 500, result, flag)
            }
          }, error => self.$emit('complete', 500, error.message), flag)
        })
      }
    },
    onDelete () {
      this.$http.delete('http://memei-api.dev/api/qiniu/aaaa')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
    }
  }
}
</script>
