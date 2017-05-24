<template lang="html">
  <Modal
    v-model="isShow"
    width="360"
    @on-cancel="$emit('on-close')">
    <p slot="header" style="text-align:center" :style="{ color: modalDisplay.headerColor }">
      <Icon type="information-circled"></Icon>
      <span>{{ modalDisplay.title }}</span>
    </p>
    <div style="text-align:center">
      <slot></slot>
    </div>
    <div slot="footer">
      <Button :type="modalDisplay.buttonType" size="large" long :loading="modal_loading" @click="asyncOK">{{ modalDisplay.buttonText }}</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      modal_loading: false
    }
  },
  props: {
    show: Boolean,
    mode: String
  },
  computed: {
    // 增删改模式的不同表现
    modalDisplay () {
      switch (this.mode) {
        case 'create':
          return {
            headerColor: '#00cc66',
            title: '新增',
            buttonType: 'success',
            buttonText: '添加',
            successMsg: '添加成功',
            failMsg: '添加失败'
          }
        case 'update':
          return {
            headerColor: '#3399ff',
            title: '修改',
            buttonType: 'primary',
            buttonText: '保存',
            successMsg: '保存成功',
            failMsg: '保存失败'
          }
        case 'delete':
          return {
            headerColor: '#f60',
            title: '删除确认',
            buttonType: 'error',
            buttonText: '删除',
            successMsg: '删除成功',
            failMsg: '删除失败'
          }
        default:
          return {}
      }
    }
  },
  watch: {
    show () {
      this.isShow = this.show
    }
  },
  methods: {
    asyncOK () {
      this.modal_loading = true
      this.$emit('submit', () => {
        this.modal_loading = false
        this.isShow = false
        this.$emit('on-close')
        this.$Message.success(this.modalDisplay.successMsg)
      }, () => {
        this.modal_loading = false
        this.$Message.error(this.modalDisplay.failMsg)
      })
    }
  }
}
</script>

<style lang="css">
</style>
