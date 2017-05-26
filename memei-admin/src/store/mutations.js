import * as types from './mutations_types'

export default {
  [types.INCREMENT] (state) {
    state.num++
  }
}
