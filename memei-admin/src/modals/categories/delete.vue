<template lang="html">
  <div>
    <nice-modal mode="delete" :show="show" @on-close="$emit('on-close')" @submit="onSubmit">
        确定要删除该类型吗？
    </nice-modal>
  </div>
</template>

<script>
import niceModal from '../_modal.vue'
import { ajax } from '../../utils'

export default {
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  props: {
    show: Boolean,
    id: Number
  },
  components: {
    'nice-modal': niceModal
  },
  methods: {
    onSubmit (success, fail) {
      ajax.delete('/categories/' + this.id)
      .then(data => {
        if (data.status === 200) {
          success()
          this.$emit('on-update')
        } else {
          fail()
        }
      })
      .catch(error => {
        console.log(error)
        fail()
      })
    }
  }
}
</script>

<style lang="css">
</style>
