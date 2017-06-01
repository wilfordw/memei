import { ajax } from '../../utils'
import * as types from './mutations_types'

export default {

  cards_index: ({
    commit
  }) => {
    ajax.get('/cards')
     .then(response => {
       commit(types.CARDS_LIST_UPDATE, response.data.cards)
     })
  },

  cards_store: ({
    dispatch
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.post('/cards/', formData),
      nextAction: 'cards_index'
    })
  },

  cards_update: ({
    dispatch,
    getters
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.put('/cards/' + getters.modal_param_id, formData),
      nextAction: 'cards_index'
    })
  },

  cards_delete: ({
    dispatch,
    getters
  }) => {
    dispatch('modal_request', {
      request: ajax.delete('/cards/' + getters.modal_param_id),
      nextAction: 'cards_index'
    })
  }

}
