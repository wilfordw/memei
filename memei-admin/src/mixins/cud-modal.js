import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      show: state => state.modal.show,
      params: state => state.modal.settings.params,
      mode: state => state.modal.settings.mode
    })
  },
  methods: {
    onInput () {
      this.$store.dispatch('modal_button_is_loading', true)
      this.onSubmit()
    },

    onSubmit () {
      if (this.mode === 'delete') {
        this.onRequest()
      } else {
        this.$refs.modalForm.validate((valid) => {
          if (valid) {
            this.onRequest()
          } else {
            this.$Message.error('表单验证失败!')
            this.$store.dispatch('modal_button_is_loading', false)
          }
        })
      }
    }
  }
}
