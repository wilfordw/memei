<template lang="html">
  <div>
    <Button type="success" @click="showCreateModal">新增</Button>

     <Table border :columns="columns" :data="list"></Table>

    <cards-modal></cards-modal>

  </div>
</template>

<script>
import cardsModal from '@/modals/cards-modal.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      columns: [
        {
          title: '名称',
          key: 'title'
        },
        {
          title: '类型',
          key: 'author_id',
          render: (h, params) => {
            let authorName = this.$store.getters.authors_array[params.row.author_id]
            return h('strong', authorName)
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
                    this.showUpdateModal(params.row.id, params.row.title, params.row.author_id)
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
      list: state => state.cards.list
    })
  },
  components: {
    'cards-modal': cardsModal
  },
  methods: {
    showUpdateModal (id, title, authorId) {
      this.$store.dispatch('show_modal', {
        mode: 'update',
        params: {id, title, authorId}
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
    this.$store.dispatch('cards_index')
  }
}
</script>

<style lang="css">
</style>
