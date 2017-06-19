<template lang="html">
  <div>
    <Button type="success" @click="showCreateModal">新增</Button>

     <Table border :columns="columns" :data="list"></Table>

    <photos-modal></photos-modal>

  </div>
</template>

<script>
import photosModal from '@/modals/photos-modal.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      columns: [
        {
          title: '名称',
          key: 'key'
        },
        {
          title: '专辑',
          key: 'card_id',
          render: (h, params) => {
            let name = this.$store.getters.cards_array[params.row.card_id]
            return h('strong', name)
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
      list: state => state.photos.list
    })
  },
  components: {
    'photos-modal': photosModal
  },
  methods: {
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
    this.$store.dispatch('photos_index')
  }
}
</script>

<style lang="css">
</style>
