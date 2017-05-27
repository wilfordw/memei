<template lang="html">
  <base-modal @submit="onSubmit">
    <p v-if="mode === 'delete'">确定要删除该类型吗？</p>
    <Form v-else ref='modalForm' :model="formData" :rules="ruleValidate" :label-width="60" >
      <Form-item  label="类型" prop="categories_id">
        <Select v-model="formData.category_id" style="width:200px">
          <Option v-for="item in categories_select" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
      </Form-item>
      <Form-item  label="作者名" prop="name">
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
        name: '',
        category_id: '',
        avatar: 'ttt'
      },
      ruleValidate: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'change' }
        ],
        category_id: [
          { required: true, message: '请选择一个类型', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    categories_select () {
      return this.$store.getters.categories_select
    }
  },
  components: {
    'base-modal': baseModal
  },
  methods: {
    onRequest () {
      if (this.mode === 'create') {
        this.$store.dispatch('authors_store', this.formData)
      } else if (this.mode === 'update') {
        this.$store.dispatch('authors_update', this.formData)
      } else if (this.mode === 'delete') {
        this.$store.dispatch('authors_delete')
      }
    }
  }
}
</script>

<style lang="css">
</style>
