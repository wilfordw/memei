<template lang="html">
  <base-modal @submit="onSubmit">
    <p v-if="mode === 'delete'">确定要删除该类型吗？</p>
    <Form v-else ref='modalForm' :model="formData" :rules="ruleValidate" :label-width="60" >
      <Form-item  label="作者" prop="author_id">
        <Select v-model="formData.author_id" style="width:200px">
          <Option v-for="item in authors_select" :value="item.value.toString()" :key="item">{{ item.label }}</Option>
        </Select>
      </Form-item>
      <Form-item  label="专辑名" prop="title">
        <Input v-model="formData.title" placeholder="请输入" @on-enter="onInput"></Input>
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
        title: '',
        author_id: '',
        favorite: 100
      },
      ruleValidate: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'change' }
        ],
        author_id: [
          { required: true, message: '请选择一个类型', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    show (to, from) {
      if (to) {
        if (this.$refs.modalForm) { this.$refs.modalForm.resetFields() }
        this.formData.title = this.params.title ? this.params.title : ''
        this.formData.author_id = this.params.authorId ? this.params.authorId.toString() : ''
      }
    }
  },
  computed: {
    authors_select () {
      return this.$store.getters.authors_select
    }
  },
  components: {
    'base-modal': baseModal
  },
  methods: {
    onRequest () {
      if (this.mode === 'create') {
        this.$store.dispatch('cards_store', this.formData)
      } else if (this.mode === 'update') {
        this.$store.dispatch('cards_update', this.formData)
      } else if (this.mode === 'delete') {
        this.$store.dispatch('cards_delete')
      }
    }
  }
}
</script>

<style lang="css">
</style>
