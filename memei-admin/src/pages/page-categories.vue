<template lang="html">
  <div>
    <Button type="success" @click="showCreateModal">新增</Button>

     <Table border :columns="columns" :data="list"></Table>

    <categories-modal></categories-modal>

  </div>
</template>

<script>
import categoriesModal from '../modals/categories-modal.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
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
                    this.showUpdateModal(params.row.id, params.row.name)
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
                    this.showDeleteModal(params.row.id)
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
    showUpdateModal (id, name) {
      this.$store.dispatch('show_modal', {
        mode: 'update',
        params: { id, name }
      })
    },
    showCreateModal () {
      this.$store.dispatch('show_modal', {
        mode: 'create'
      })
    },
    showDeleteModal (id) {
      this.$store.dispatch('show_modal', {
        mode: 'delete',
        params: { id }
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
