<template lang="html">
  <Modal
    v-model="isShow"
    width="360"
    @on-cancel="$emit('on-close')">
    <p v-if="mode === 'del'" slot="header" style="color:#f60;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>删除确认</span>
    </p>
    <p v-if="mode === 'add'" slot="header" style="color:#00cc66;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>新增</span>
    </p>
    <p v-if="mode === 'edit'" slot="header" style="color:#3399ff;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>修改</span>
    </p>
    <div style="text-align:center">
      <slot></slot>
    </div>
    <div slot="footer">
      <Button v-if="mode === 'del'" type="error" size="large" long :loading="modal_loading" @click="asyncOK">删除</Button>
      <Button v-if="mode === 'edit'" type="primary" size="large" long :loading="modal_loading" @click="asyncOK">保存</Button>
      <Button v-if="mode === 'add'" type="success" size="large" long :loading="modal_loading" @click="asyncOK">添加</Button>
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
  watch: {
    show () {
      this.isShow = this.show
    }
  },
  methods: {
    asyncOK () {
      this.modal_loading = true
      setTimeout(() => {
        this.modal_loading = false
        this.isShow = false
        this.$emit('on-close')
        this.$Message.success('删除成功')
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
