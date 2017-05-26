import * as types from './mutations_types'

export default {
  [types.MODAL_IS_SHOW] (state, isShow) {
    state.show = isShow
  },

  [types.MODAL_BUTTON_IS_LOADING] (state, isLoading) {
    state.loading = isLoading
  }
}
