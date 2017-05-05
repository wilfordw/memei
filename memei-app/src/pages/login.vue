<template>
  <f7-page navbar-through toolbar-through>
    <f7-navbar>
      <f7-nav-left>
        <f7-link iconF7="left" style="color: deeppink; " back></f7-link>
      </f7-nav-left>
      <f7-nav-center>登录</f7-nav-center>
    </f7-navbar>
    <f7-list form>
      <f7-list-item>
        <f7-icon slot="media" f7="person" style="color: deeppink"></f7-icon>
        <f7-input type="text" placeholder="用户名"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="lock" style="color: deeppink"></f7-icon>
        <f7-input type="password" placeholder="密码"></f7-input>
      </f7-list-item>
      <f7-button big fill style="margin: 30px 5px">登陆</f7-button>
    </f7-list>
  </f7-page>
</template>

<script>
export default {}
</script>
