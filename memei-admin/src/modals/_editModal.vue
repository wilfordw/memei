<template lang="html">
  <Modal
    v-model="isShow"
    title="编辑"
    ok-text="保存"
    :loading="true"
    @on-ok="asyncOK"
    @on-cancel="$emit('on-close')">
    <slot></slot>
  </Modal>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    show: false
  },
  watch: {
    show () {
      this.isShow = this.show
    }
  },
  methods: {
    asyncOK () {
      setTimeout(() => {
        this.isShow = false
        this.$emit('on-close')
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
