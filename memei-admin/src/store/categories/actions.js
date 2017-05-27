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

  ajax_response: ({
    commit,
    dispatch
  },
  {
    request,
    successCB,
    errorCB
  }) => {
    request.then(response => {
      if (response.status === 200) {
        dispatch('categories_index')
        successCB()
      } else {
        errorCB(response)
      }
    })
     .catch(error => {
       errorCB(error)
     })
  },

  categories_store: ({
    commit,
    dispatch
  },
  {
    formData,
    successCB,
    errorCB
  }) => {
    dispatch('ajax_response', {
      request: ajax.post('/categories/', formData),
      successCB,
      errorCB
    })
  },

  categories_update: ({
    commit,
    dispatch
  }, {
    id,
    formData,
    successCB,
    errorCB
  }) => {
    dispatch('ajax_response', {
      request: ajax.put('/categories/' + id, formData),
      successCB,
      errorCB
    })
  },

  categories_delete: ({
    commit,
    dispatch
  }, {
    id,
    successCB,
    errorCB
  }) => {
    dispatch('ajax_response', {
      request: ajax.delete('/categories/' + id),
      successCB,
      errorCB
    })
  }
}
