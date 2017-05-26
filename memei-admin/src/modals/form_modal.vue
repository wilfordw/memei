<template lang="html">
  <Modal
    :value="show"
    @input="$store.dispatch('modal_is_show', arguments[0])"
    width="360">
    <p slot="header" style="text-align:center" :style="{color: settings.color}">
      <Icon type="information-circled"></Icon>
      <span>{{ settings.title }}</span>
    </p>
    <div style="text-align:center">
      <slot></slot>
    </div>
    <div slot="footer">
      <Button :type="settings.btnType" size="large" long :loading="loading" @click="submit">{{ settings.btnLabel }}</Button>
    </div>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      show: state => state.modal.show,
      loading: state => state.modal.loading,
      settings: state => state.modal.settings
    })
  },
  methods: {
    submit () {
      this.$store.dispatch('modal_button_is_loading', true)
      setTimeout(() => {
        this.$store.dispatch('modal_button_is_loading', false)
        this.$store.dispatch('modal_is_show', false)
        this.$Message.success(this.settings.msg + '成功')
      }, 1000)
    }
  }
}
</script>
