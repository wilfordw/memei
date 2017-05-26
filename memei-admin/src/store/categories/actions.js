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
    commit,
    dispatch
  }, formData) => {
    return new Promise(function (resolve, reject) {
      ajax.post('/categories/', formData)
       .then(response => {
         if (response.status === 200) {
           dispatch('categories_index')
           resolve(response)
         } else {
           reject(response)
         }
       })
       .catch(error => {
         reject(error)
       })
    })
  },

  categories_update: ({
    commit,
    dispatch
  }, {id, formData}) => {
    return new Promise(function (resolve, reject) {
      ajax.put('/categories/' + id, formData)
       .then(response => {
         if (response.status === 200) {
           dispatch('categories_index')
           resolve(response)
         } else {
           reject(response)
         }
       })
       .catch(error => {
         reject(error)
       })
    })
  },

  categories_delete: ({
    commit,
    dispatch
  }, id) => {
    return new Promise(function (resolve, reject) {
      ajax.delete('/categories/' + id)
       .then(response => {
         if (response.status === 200) {
           dispatch('categories_index')
           resolve(response)
         } else {
           reject(response)
         }
       })
       .catch(error => {
         reject(error)
       })
    })
  }
}
