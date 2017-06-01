<template lang="html">
  <base-modal @submit="onSubmit">
    <p v-if="mode === 'delete'">确定要删除该类型吗？</p>
    <Form v-else ref='modalForm' :model="formData" :rules="ruleValidate" :label-width="60" >
      <Form-item  label="名字" prop="name">
        <Input v-model="formData.name" placeholder="请输入" @on-enter="onInput"></Input>
      </Form-item>
      <input type="text"  style="display: none"/>
    </Form>
  </base-modal>
</template>

<script>
import baseModal from './base-modal.vue'
import { cudModal } from '@/mixins'

export default {
  mixins: [
    cudModal
  ],
  data () {
    return {
      formData: {
        name: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    'base-modal': baseModal
  },
  watch: {
    show (to, from) {
      if (to) {
        if (this.$refs.modalForm) { this.$refs.modalForm.resetFields() }
        this.formData.name = this.params.name ? this.params.name : ''
      }
    }
  },
  methods: {
    onRequest () {
      if (this.mode === 'create') {
        this.$store.dispatch('categories_store', this.formData)
      } else if (this.mode === 'update') {
        this.$store.dispatch('categories_update', this.formData)
      } else if (this.mode === 'delete') {
        this.$store.dispatch('categories_delete')
      }
    }
  }
}
</script>

<style lang="css">
</style>
