import * as types from './mutations_types'

export default {

  [types.CARDS_LIST_UPDATE] (state, list) {
    state.list = list
  }

}
