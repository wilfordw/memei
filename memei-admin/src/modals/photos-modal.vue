<template lang="html">
  <base-modal @submit="onSubmit">
    <p v-if="mode === 'delete'">确定要删除该图片吗？</p>
    <Form v-else ref='modalForm' :model="formData" :rules="ruleValidate" :label-width="60" >
      <Form-item  label="类型" prop="card_id">
        <Select v-model="formData.card_id" style="width:200px">
          <Option v-for="item in cards_select" :value="item.value.toString()" :key="item">{{ item.label }}</Option>
        </Select>
      </Form-item>
      <label class="mo-upload">
        <input type="file" @change='fileChanged'>
        <a>选择图片文件</a>
      </label>
      <input type="text"  style="display: none"/>
    </Form>
  </base-modal>
</template>

<script>
import baseModal from './base-modal.vue'
import { cudModal } from '@/mixins'
import { apiDomainOrIp } from '@/configs'

export default {
  mixins: [
    cudModal
  ],
  data () {
    return {
      formData: {
        key: '',
        card_id: ''
      },
      ruleValidate: {
        key: [
          { required: true, message: 'key不能为空', trigger: 'change' }
        ],
        card_id: [
          { required: true, message: '请选择一个专辑', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    show (to, from) {
      if (to) {
        if (this.$refs.modalForm) { this.$refs.modalForm.resetFields() }
        this.formData.key = this.params.key ? this.params.key : ''
        this.formData.card_id = this.params.cardId ? this.params.cardId.toString() : ''
      }
    }
  },
  computed: {
    cards_select () {
      return this.$store.getters.cards_select
    }
  },
  components: {
    'base-modal': baseModal
  },
  methods: {
    onRequest () {
      if (this.mode === 'create') {
        this.$store.dispatch('photos_store', this.formData)
      } else if (this.mode === 'delete') {
        this.$store.dispatch('photos_delete')
      }
    },
    fileChanged (event) {
      let file = event.target.files[0]
      const self = this
      if (file) {
        let formData = new FormData()
        formData.append('file', file)

        // 获取token
        this.$http.get(apiDomainOrIp + `/photos/uptoken`)
        .then(response => {
          const result = response.data
          formData.append('token', result.token)
          formData.append('key', result.key)

          const data = new FormData()

          data.append('action', 'ADD')
          data.append('param', 0)
          data.append('secondParam', 0)
          data.append('file', new Blob(['test payload'], { type: 'text/csv' }))

          self.$http.post('http://httpbin.org/post', data, {headers: { 'Content-Type': 'multipart/form-data' }})

            // 提交给七牛处理
          // self.$http.post('http://upload.qiniu.com', formData, {
          //   headers: { 'Content-Type': 'multipart/form-data' },
          //   progress (event) {
          //           // 传递给父组件的progress方法
          //     console.log('progress: ' + event.loaded / event.total * 100)
          //   }
          // })
          // .then(response => {
          //   const result = response.data
          //   if (result.hash && result.key) {
          //     console.log('state 200: ', result)
          //         // 让当前target可以重新选择
          //     event.target.value = null
          //   } else {
          //     console.log('state 500: ', result)
          //   }
          // }, error => console.log('state 500: ', error))
        })
      }
    }
  }
}
</script>

<style lang="css">
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
