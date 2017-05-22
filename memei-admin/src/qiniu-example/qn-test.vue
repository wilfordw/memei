<template lang="html">
  <figure class="upload-preview">
    <img :src="thumbnail" v-if="thumbnail"/>
  </figure>
  <qn-upload flag="'thumbnail'" @complete="uploadComplete" @progress="uploadProgress">
    <a>选择图片文件<i class="progress" :style="{width:progress + '%'}"></i></a>
  </qn-upload>
</template>

<script>

import qnUpload from './qn-upload.vue'
export default {
  components: {
    'qn-upload': qnUpload
  },
  data () {
    return {
      thumbnail: null,
      progress: 0 // 上传进度
    }
  },
  methods: {
    uploadProgress (progress, flag) {
      // 这里可以通过回调的flag对不同上传域做处理
      this.progress = progress < 100 ? progress : 0
    },
    uploadComplete (status, result, flag) {
      if (status === 200) { //
        this.thumbnail = `http://oq34fosbi.bkt.clouddn.com/${result.key}` // 七牛域名 + 返回的key 组成文件url
      } else {
        // 失败处理
        console.log(result)
      }
    }
  }
}
</script>

<style lang="css">
</style>
