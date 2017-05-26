import * as types from './mutations_types'

export default {
  modal_is_show: ({
    commit
  }, isShow) => {
    commit(types.MODAL_IS_SHOW, isShow)
  },
  modal_button_is_loading: ({
    commit
  }, isLoading) => {
    commit(types.MODAL_BUTTON_IS_LOADING, isLoading)
  }
}
