import Mock from 'mockjs'

// Mock.setup({
//   timeout: '1000-3000'
// })

export default {
  mock () {
    // DELETE
    Mock.mock(/\/api\/categories\/\d+$/, 'delete', '')

    // CARDS
    Mock.mock(/\/api\/categories\/\d+\/cards$/, 'get', {
      'cards|10-20': [
        {
          'title': '@NAME',
          'card_id|1-100': 1,
          'name': '@NAME',
          'author_id|1-100': 1,
          'category_id|1-100': 1
        }
      ]
    })

    // AUTHORS
    Mock.mock(/\/api\/categories\/\d+\/authors$/, 'get', {
      'authors|10-20': [
        {
          'id|1-100': 1,
          'name': '@NAME',
          'avatar': '@NAME'
        }
      ]
    })

    // INDEX
    Mock.mock(/\/api\/categories$/, 'get', {
      'categories|10-20': [
        {
          'id|1-100': 1,
          name: '@NAME'
        }
      ]
    })

    // SHOW
    Mock.mock(/\/api\/categories\/\d+$/, 'get', {
      categories: {
        'id|1-100': 1,
        name: '@NAME'
      }
    })

    // UPDATE
    Mock.mock(/\/api\/categories\/\d+$/, 'put', '')

    // STORE
    Mock.mock(/\/api\/categories$/, 'post', '')
  }
}
