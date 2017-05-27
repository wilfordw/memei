import * as types from './mutations_types'

export default {

  show_modal: ({
    commit,
    dispatch
  }, { mode, params = {} }) => {
    let settings = modalModes[mode] ? modalModes[mode] : {}
    settings.params = params
    dispatch('modal_settings_change', settings)
    commit(types.MODAL_IS_SHOW, true)
  },

  modal_is_show: ({
    commit
  }, isShow) => {
    commit(types.MODAL_IS_SHOW, isShow)
  },

  modal_button_is_loading: ({
    commit
  }, isLoading) => {
    commit(types.MODAL_BUTTON_IS_LOADING, isLoading)
  },

  modal_settings_change: ({
    commit
  }, settings) => {
    commit(types.MODAL_SETTINGS_CHANGE, settings)
  },

  modal_request: ({
    state,
    dispatch
  }, {
    request,
    nextAction
  }) => {
    request.then(response => {
      if (response.status === 200) {
        dispatch(nextAction)
        state.settings.successCB()
      } else {
        state.settings.errorCB(response)
      }
    })
     .catch(error => {
       state.settings.errorCB(error)
     })
  }

}

// 新增 编辑 删除 弹出框默认 配置内容
const modalModes = {
  create: {
    mode: 'create',
    title: '新增',
    color: '#00cc66',
    btnType: 'success',
    btnLabel: '添加',
    msg: '添加'
  },
  update: {
    mode: 'update',
    title: '编辑',
    color: '#ff9900',
    btnType: 'warning',
    btnLabel: '保存',
    msg: '保存'
  },
  delete: {
    mode: 'delete',
    title: '删除确认',
    color: '#ff3300',
    btnType: 'error',
    btnLabel: '确认',
    msg: '删除'
  }
}
