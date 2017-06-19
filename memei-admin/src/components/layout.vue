<template lang="html">
  <div class="layout">
    <Menu mode="horizontal" theme="primary">
      <div class="layout-logo">MEMEI</div>
    </Menu>
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
        <Menu theme="light" :active-name="activeName" width="auto" @on-select='menuSelected' accordion>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    照片管理
                </template>
                <Menu-item name="1-1">类型管理</Menu-item>
                <Menu-item name="1-2">作者管理</Menu-item>
                <Menu-item name="1-3">专辑管理</Menu-item>
            </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">
          <div class="layout-content">
              <p-categories v-if="activeName === '1-1'"></p-categories>
              <p-authors v-if="activeName === '1-2'"></p-authors>
              <p-cards v-if="activeName === '1-3'"></p-cards>
          </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import pCategories from '../pages/page-categories.vue'
import pAuthors from '../pages/page-authors.vue'
import pCards from '../pages/page-cards.vue'
// import { ajax } from '@/utils'

export default {
  data () {
    return {
      activeName: '1-1'
    }
  },
  methods: {
    menuSelected: function (name) {
      this.activeName = name
      // ajax.get('/cards/1', {id: 100}).then((response) => {
      //   console.log(response)
      // }).catch((error) => {
      //   console.log(error)
      // })
    }
  },
  components: {
    'p-categories': pCategories,
    'p-authors': pAuthors,
    'p-cards': pCards
  }
}
</script>
