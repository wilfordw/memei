<template lang="html">
  <div>
    <nice-modal mode="update" :show="show" @on-close="$emit('on-close')" @submit="onSubmit">
      <Form :model="formData" :label-width="80">
          <Input v-model="formData.name" placeholder="请输入">
            <span slot="prepend">名字</span>
          </Input>
      </Form>
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
  watch: {
    show () {
      if (this.show) {
        ajax.get('/categories/' + this.id)
        .then(response => {
          this.formData.name = response.data.category.name
        })
        .catch(error => {
          console.error(error)
        })
      }
    }
  },
  components: {
    'nice-modal': niceModal
  },
  methods: {
    onSubmit (success, fail) {
      ajax.put('/categories/' + this.id, this.formData)
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
