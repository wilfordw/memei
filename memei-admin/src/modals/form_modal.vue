<template lang="html">
  <Modal
    :value="show"
    @input="$store.dispatch('modal_is_show', arguments[0])"
    width="360">
    <p slot="header" style="text-align:center">
      <Icon type="information-circled"></Icon>
      <span>标题</span>
    </p>
    <div style="text-align:center">
      <slot></slot>
    </div>
    <div slot="footer">
      <Button type="primary" size="large" long :loading="loading" @click="submit">确定</Button>
    </div>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      show: state => state.modal.show,
      loading: state => state.modal.loading
    })
  },
  methods: {
    submit () {
      this.$store.dispatch('modal_button_is_loading', true)
      setTimeout(() => {
        this.$store.dispatch('modal_button_is_loading', false)
        this.$store.dispatch('modal_is_show', false)
      }, 1000)
    }
  }
}
</script>
