<template lang="html">
  <base-modal @submit="onSubmit">
    <Input v-if="settings.mode === 'create' || settings.mode === 'update'" v-model="formData.name" placeholder="请输入" @on-enter="onInput">
      <span slot="prepend">名字</span>
    </Input>
    <p v-if="settings.mode === 'delete'">确定要删除该类型吗？</p>
  </base-modal>
</template>

<script>
import baseModal from './base-modal.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState({
      show: state => state.modal.show,
      settings: state => state.modal.settings
    })
  },
  watch: {
    show (to, from) {
      if (to) {
        this.formData.name = this.settings.params.name ? this.settings.params.name : ''
      }
    }
  },
  components: {
    'base-modal': baseModal
  },
  methods: {
    onInput () {
      this.$store.dispatch('modal_button_is_loading', true)
      this.onSubmit()
    },
    onSubmit () {
      if (this.settings.mode === 'create') {
        this.$store.dispatch('categories_store', this.formData)
      } else if (this.settings.mode === 'update') {
        this.$store.dispatch('categories_update', this.formData)
      } else if (this.settings.mode === 'delete') {
        this.$store.dispatch('categories_delete')
      }
    }
  }
}
</script>

<style lang="css">
</style>
