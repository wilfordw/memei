export default {
  modal_successCB: (state) => {
    return state.settings.successCB
  },

  modal_errorCB: (state) => {
    return state.settings.errorCB
  },

  modal_param_id: (state) => {
    return state.settings.params.id
  }
}
