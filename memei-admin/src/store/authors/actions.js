import { ajax } from '../../utils'
import * as types from './mutations_types'

export default {

  authors_index: ({
    commit
  }) => {
    ajax.get('/authors')
     .then(response => {
       commit(types.AUTHORS_LIST_UPDATE, response.data.authors)
     })
  },

  authors_store: ({
    dispatch
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.post('/authors/', formData),
      nextAction: 'authors_index'
    })
  },

  authors_update: ({
    dispatch,
    getters
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.put('/authors/' + getters.modal_param_id, formData),
      nextAction: 'authors_index'
    })
  },

  authors_delete: ({
    dispatch,
    getters
  }) => {
    dispatch('modal_request', {
      request: ajax.delete('/authors/' + getters.modal_param_id),
      nextAction: 'authors_index'
    })
  }

}
