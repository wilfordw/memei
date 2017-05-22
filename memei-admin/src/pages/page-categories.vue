<template lang="html">
  <div>
    <div>Page-Categories</div>
    <Button type="primary" @click="createModalShow = true">新增</Button>
    <Button type="primary" @click="editModalShow = true">编辑</Button>
    <Button type="primary" @click="deleteModalShow = true">删除</Button>
    <modal-create :show="createModalShow" @on-close="createModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </modal-create>
    <modal-edit :show="editModalShow" @on-close="editModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </modal-edit>
    <modal-delete :show="deleteModalShow" @on-close="deleteModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </modal-delete>
  </div>
</template>

<script>
import createModal from '../modals/_createModal.vue'
import editModal from '../modals/_editModal.vue'
import deleteModal from '../modals/_deleteModal.vue'

export default {
  data () {
    return {
      createModalShow: false,
      editModalShow: false,
      deleteModalShow: false
    }
  },
  components: {
    'modal-create': createModal,
    'modal-edit': editModal,
    'modal-delete': deleteModal
  }
}
</script>

<style lang="css">
</style>
