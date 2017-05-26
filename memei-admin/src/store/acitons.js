import * as types from './mutations_types'

export default {
  increment ({commit}) {
    setTimeout(() => {
      commit(types.INCREMENT)
    }, 1000)
  }
}
