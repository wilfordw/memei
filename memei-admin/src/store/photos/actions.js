import { ajax } from '../../utils'
import * as types from './mutations_types'

export default {

  photos_index: ({
    commit
  }) => {
    ajax.get('/photos')
     .then(response => {
       commit(types.PHOTOS_LIST_UPDATE, response.data.photos)
     })
  },

  photos_store: ({
    dispatch
  }, formData) => {
    dispatch('modal_request', {
      request: ajax.post('/photos/', formData),
      nextAction: 'photos_index'
    })
  },

  photos_delete: ({
    dispatch,
    getters
  }) => {
    dispatch('modal_request', {
      request: ajax.delete('/photos/' + getters.modal_param_id),
      nextAction: 'photos_index'
    })
  }

}
