<template lang="html">
  <div>
    <Button type="success" @click="showCreateModal">新增</Button>

     <Table border :columns="columns" :data="list"></Table>

    <authors-modal></authors-modal>

  </div>
</template>

<script>
import authorsModal from '@/modals/authors-modal.vue'
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
          title: '类型',
          key: 'category_id',
          render: (h, params) => {
            let categoryName = this.$store.getters.categories_array[params.row.category_id]
            return h('strong', categoryName)
          }
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
                    this.showUpdateModal(params.row.id, params.row.name, params.row.category_id)
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
      list: state => state.authors.list
    })
  },
  components: {
    'authors-modal': authorsModal
  },
  methods: {
    showUpdateModal (id, name, categoryId) {
      this.$store.dispatch('show_modal', {
        mode: 'update',
        params: {id, name, categoryId}
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
    this.$store.dispatch('authors_index')
  }
}
</script>

<style lang="css">
</style>
