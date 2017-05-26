<template lang="html">
  <div>
    <Button type="success" @click="showCreateModal">新增</Button>
    <Button type="primary" @click="showUpdateModal">编辑</Button>
    <Button type="error" @click="showDeleteModal">删除</Button>

     <Table border :columns="columns" :data="list"></Table>

    <categories-modal :id="id"></categories-modal>

  </div>
</template>

<script>
import categoriesModal from '../modals/categories-modal.vue'
import { mapState } from 'vuex'
// import * as types from '../store/modal/mutations_types'

export default {
  data () {
    return {
      id: 1,
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.id = params.row.id
                    this.showUpdateModal(params.row.name)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.id = params.row.id
                    this.showDeleteModal()
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
    }
  },
  computed: {
    ...mapState({
      list: state => state.categories.list
    })
  },
  components: {
    'categories-modal': categoriesModal
  },
  methods: {
    showUpdateModal (name) {
      this.$store.dispatch('show_modal', {
        mode: 'update',
        params: { name }
      })
    },
    showCreateModal () {
      this.$store.dispatch('show_modal', {
        mode: 'create'
      })
    },
    showDeleteModal () {
      this.$store.dispatch('show_modal', {
        mode: 'delete'
      })
    }
  },
  mounted: function () {
    this.$store.dispatch('categories_index')
  }
}
</script>

<style lang="css">
</style>
