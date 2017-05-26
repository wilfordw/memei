<template lang="html">
  <div>
    <div>Page-Categories</div>
    <Button type="success" @click="createModalShow = true">新增</Button>
    <Button type="primary" @click="updateClick">编辑</Button>
    <Button type="error" @click="deleteModalShow = true">删除</Button>
    <create-modal :show="createModalShow" @on-close="createModalShow = false" @on-update="updateCards"></create-modal>
    <update-modal :show="updateModalShow" @on-close="updateModalShow = false" :id="id" @on-update="updateCards"></update-modal>
    <delete-modal :show="deleteModalShow" :id="id" @on-close="deleteModalShow = false" @on-update="updateCards"></delete-modal>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>
    <p>{{ countAdd2 }}</p>
    <p>{{ countAdd2Add2 }}</p>
    <p>{{ test }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>

</template>

<script>
import createModal from '../modals/categories/create.vue'
import updateModal from '../modals/categories/update.vue'
import deleteModal from '../modals/categories/delete.vue'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      createModalShow: false,
      updateModalShow: false,
      deleteModalShow: false,
      id: 1
    }
  },
  components: {
    'create-modal': createModal,
    'update-modal': updateModal,
    'delete-modal': deleteModal
  },

  computed: {
    test () {
      return this.createModalShow
    },
    count () {
      return this.$store.state.a.count
    },
    ...mapState({
      count: state => state.a.count,
      count2: state => state.b.count2
    }),
    ...mapGetters([
      'countAdd2',
      'countAdd2Add2'
    ])
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  methods: {
    updateCards () {
      console.log('updateCategoryCards')
    },
    updateClick () {
      this.id = 2
      this.updateModalShow = true
    },
    increment () {
      // console.log(this.$store)
      this.$store.commit('increment', 10)
      // this.increment(10)
    },
    decrement () {
      // this.$store.commit('decrement')
      this.decrement()
    },
    ...mapMutations([
      // 'increment',
      'decrement'
    ])
  }
}
</script>

<style lang="css">
</style>
