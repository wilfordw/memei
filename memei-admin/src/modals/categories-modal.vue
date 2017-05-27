<template lang="html">
  <base-modal @submit="onSubmit">
    <Input v-if="settings.mode === 'create' || settings.mode === 'update'" v-model="formData.name" placeholder="请输入">
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
  props: {
    id: Number
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
    onSubmit ({ success, error }) {
      if (this.settings.mode === 'create') {
        this.$store.dispatch('categories_store', { formData: this.formData, successCB: success, errorCB: error })
      } else if (this.settings.mode === 'update') {
        this.$store.dispatch('categories_update', { id: this.id, formData: this.formData, successCB: success, errorCB: error })
      } else if (this.settings.mode === 'delete') {
        this.$store.dispatch('categories_delete', { id: this.id, successCB: success, errorCB: error })
      } else {
        success()
      }
    }
  }
}
</script>

<style lang="css">
</style>
