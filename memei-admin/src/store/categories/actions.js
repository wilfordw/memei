import { ajax } from '../../utils'
import * as types from './mutations_types'

export default {

  categories_index: ({
    commit
  }) => {
    ajax.get('/categories')
     .then(response => {
       commit(types.CATEGORIES_LIST_UPDATE, response.data.categories)
     })
  },

  categories_store: ({
    dispatch
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.post('/categories/', formData),
      nextAction: 'categories_index'
    })
  },

  categories_update: ({
    dispatch,
    getters
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.put('/categories/' + getters.modal_param_id, formData),
      nextAction: 'categories_index'
    })
  },

  categories_delete: ({
    dispatch,
    getters
  }) => {
    dispatch('modal_request', {
      request: ajax.delete('/categories/' + getters.modal_param_id),
      nextAction: 'categories_index'
    })
  }

}
