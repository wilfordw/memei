<template lang="html">
  <div>
    <div>Page-Categories</div>
    <Button type="success" @click="createModalShow = true">新增</Button>
    <Button type="primary" @click="editModalShow = true">编辑</Button>
    <Button type="error" @click="deleteModalShow = true">删除</Button>
    <m-modal mode="add" :show="createModalShow" @on-close="createModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </m-modal>
    <m-modal mode="edit" :show="editModalShow" @on-close="editModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </m-modal>
    <m-modal mode="del" :show="deleteModalShow" @on-close="deleteModalShow = false">
      <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </m-modal>
  </div>
</template>

<script>
import mModal from '../modals/_modal.vue'

export default {
  data () {
    return {
      createModalShow: false,
      editModalShow: false,
      deleteModalShow: false
    }
  },
  components: {
    'm-modal': mModal
  }
}
</script>

<style lang="css">
</style>
