import Mock from 'mockjs'

// Mock.setup({
//   timeout: '1000-3000'
// })

export default {
  mock () {
    // DELETE
    Mock.mock(/\/api\/cards\/\d+$/, 'delete', '')

    // INDEX
    Mock.mock(/\/api\/cards$/, 'get', {
      'cards|10-20': [
        {
          'id|1-100': 1,
          'author_id|1-100': 1,
          'title': '@NAME',
          'favorite|0-100': 1,
          'created_at': '@DATE',
          'updated_at': '@DATE'
        }
      ]
    })

    // SHOW
    Mock.mock(/\/api\/cards\/\d+$/, 'get', {
      card: {
        'id|1-100': 1,
        'author_id|1-100': 1,
        'title': '@NAME',
        'favorite|0-100': 1,
        'created_at': '@DATE',
        'updated_at': '@DATE'
      }
    })

    // UPDATE
    Mock.mock(/\/api\/cards\/\d+$/, 'put', '')

    // STORE
    Mock.mock(/\/api\/cards$/, 'post', '')
  }
}
