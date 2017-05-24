<template lang="html">
  <div>
    <nice-modal mode="create" :show="show" @on-close="$emit('on-close')" @submit="onSubmit">
      <Form :model="formData" :label-width="80">
          <Input v-model="formData.name" placeholder="请输入">
            <span slot="prepend">名字</span>
          </Input>
          <!-- <Select v-model="formData.authors" class="formItem">
            <Option v-for="item in authors" :value="item.value" :key="item">{{ item.label }}</Option>
          </Select> -->
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
      // authors: [
      //   {
      //     value: 1,
      //     label: '马鲁娜'
      //   },
      //   {
      //     value: 2,
      //     label: '马鲁娜'
      //   },
      //   {
      //     value: 3,
      //     label: '马鲁娜'
      //   },
      //   {
      //     value: 4,
      //     label: '马鲁娜'
      //   },
      //   {
      //     value: 5,
      //     label: '马鲁娜'
      //   }
      // ],
      formData: {
        name: ''
        // author: ''
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
      ajax.get('/categories', this.formData)
      .then(data => {
        console.log(data)
        success()
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
