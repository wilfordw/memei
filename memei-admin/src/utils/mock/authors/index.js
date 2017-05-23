import Mock from 'mockjs'

// Mock.setup({
//   timeout: '1000-3000'
// })

export default {
  mock () {
    // DELETE
    Mock.mock(/\/api\/authors\/\d+$/, 'delete', '')

    // CARDS
    Mock.mock(/\/api\/authors\/\d+\/cards$/, 'get', {
      'authors|10-20': [
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

    // INDEX
    Mock.mock(/\/api\/authors$/, 'get', {
      'authors|10-20': [
        {
          'id|1-100': 1,
          'category_id|1-100': 1,
          'name': '@NAME',
          'avatar': '@NAME'
        }
      ]
    })

    // SHOW
    Mock.mock(/\/api\/authors\/\d+$/, 'get', {
      author: {
        'id|1-100': 1,
        'category_id|1-100': 1,
        'name': '@NAME',
        'avatar': '@NAME'
      }
    })

    // UPDATE
    Mock.mock(/\/api\/authors\/\d+$/, 'put', '')

    // STORE
    Mock.mock(/\/api\/authors$/, 'post', '')
  }
}
