export default {

  // modal是否显示
  show: false,

  // modal submit按钮是否加载状态
  loading: false,

  // modal 配置
  settings: {
    // 模式
    mode: 'info',

    // 标题文字
    title: '提示',

    // 色调
    color: '#3399ff',

    // 按钮类型
    btnType: 'primary',

    // 按钮文字
    btnLabel: '确定',

    // 成功失败 消息文字
    msg: '确认',

    // 表单的默认参数
    params: {},

    // 表单请求成功回调
    successCB: null,

    // 表单请求错误回调
    errorCB: null
  }

}
