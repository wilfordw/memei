<template lang="html">
  <div>
    <nice-modal mode="create" :show="show" @on-close="$emit('on-close')" @submit="onSubmit">
      <Input v-model="formData.name" placeholder="请输入">
        <span slot="prepend">名字</span>
      </Input>
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
    show: Boolean
  },
  components: {
    'nice-modal': niceModal
  },
  methods: {
    onSubmit (success, fail) {
      ajax.post('/categories', this.formData)
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
.formItem {
  padding-top: 10px;
}
</style>
