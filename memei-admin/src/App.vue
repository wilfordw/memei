<template>
  <div id="app">
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
                <Menu-item name="categories">类型管理</Menu-item>
                <Menu-item name="authors">作者管理</Menu-item>
                <Menu-item name="cards">专辑管理</Menu-item>
                <Menu-item name="photos">照片管理</Menu-item>
            </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">
          <div class="layout-content">
            <router-view></router-view>
          </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeName: 'categories'
    }
  },
  methods: {
    menuSelected (name) {
      this.activeName = name
      this.$router.push(name)
    }
  }
}
</script>

<style lang="css">
.layout {
  background: #f5f7f9;
}
.layout-logo{
  float: left;
  position: relative;
  top: 3px;
  left: 20px;
  font-size: 30px;
  font-weight: 500;
  color: #f5edf1
}

.layout-menu-left{
  background: #fff;
}

.layout-content{
   min-height: 500px;
   margin: 15px;
   overflow: hidden;
   background: #fff;
   border-radius: 4px;
}

</style>
