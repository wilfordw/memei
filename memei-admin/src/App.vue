<template>
  <div id="app">
    <figure class="upload-preview">
      <img :src="thumbnail" v-if="thumbnail"/>
    </figure>
    <qn-upload flag="'thumbnail'" @complete="uploadComplete" @progress="uploadProgress">
      <a>选择图片文件<i class="progress" :style="{width:progress + '%'}"></i></a>
    </qn-upload>
  </div>
</template>

<script>
import qnUpload from './components/qn-upload.vue'

export default {
  name: 'app',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
