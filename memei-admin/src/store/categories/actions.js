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

  modol_request: ({
    dispatch,
    getters
  }, request) => {
    request.then(response => {
      if (response.status === 200) {
        dispatch('categories_index')
        getters.modal_successCB()
      } else {
        getters.modal_errorCB(response)
      }
    })
     .catch(error => {
       getters.modal_errorCB(error)
     })
  },

  categories_store: ({
    dispatch
  }, formData) => {
    dispatch('modol_request', ajax.post('/categories/', formData))
  },

  categories_update: ({
    dispatch,
    getters
  }, formData) => {
    dispatch('modol_request', ajax.put('/categories/' + getters.modal_param_id, formData))
  },

  categories_delete: ({
    dispatch,
    getters
  }) => {
    dispatch('modol_request', ajax.delete('/categories/' + getters.modal_param_id))
  }
}
