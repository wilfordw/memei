<template lang="html">
  <div>
    <div>Page-Categories</div>
    <Button type="success" @click="createModalShow = true">新增</Button>
    <Button type="primary" @click="showModal">编辑</Button>
    <Button type="error" @click="deleteModalShow = true">删除</Button>
    <create-modal :show="createModalShow" @on-close="createModalShow = false" @on-update="updateCards"></create-modal>
    <update-modal :show="updateModalShow" @on-close="updateModalShow = false" :id="id" @on-update="updateCards"></update-modal>
    <delete-modal :show="deleteModalShow" :id="id" @on-close="deleteModalShow = false" @on-update="updateCards"></delete-modal>

    <form-modal></form-modal>

    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <p>{{ show }}</p>
    <p>{{ loading }}</p>

  </div>
</template>

<script>
import createModal from '../modals/categories/create.vue'
import updateModal from '../modals/categories/update.vue'
import deleteModal from '../modals/categories/delete.vue'
import formModal from '../modals/form_modal.vue'
import { mapState, mapGetters } from 'vuex'
// import * as types from '../store/modal/mutations_types'

export default {
  data () {
    return {
      createModalShow: false,
      updateModalShow: false,
      deleteModalShow: false,
      id: 1
    }
  },
  computed: {
    ...mapState({
      num: state => state.num,
      show: state => state.modal.show,
      loading: state => state.modal.loading
    }),
    ...mapGetters([
      'double'
    ])
  },
  components: {
    'create-modal': createModal,
    'update-modal': updateModal,
    'delete-modal': deleteModal,
    'form-modal': formModal
  },
  methods: {
    updateCards () {
      console.log('updateCategoryCards')
    },
    updateClick () {
      this.$store.dispatch('increment')
      // this.id = 2
      // this.updateModalShow = true
    },
    showModal () {
      this.$store.dispatch('show_modal', {
        mode: 'delete'
      })
    }
  }
}
</script>

<style lang="css">
</style>
