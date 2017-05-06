<script>
  let Mock = require('mockjs')
  Mock.Random.extend({
    picsDirs: function () {
      return this.pick(
        [
          {
            picsDir: 'static/assets/pics/0/',
            headerImage: 'static/assets/authors/YanJiaLi.jpg',
            pushDate: '2017-5-4',
            authorName: '严佳丽',
            coverImage: 'static/assets/pics/0/29.jpg',
            picsCount: 30,
            catagoryName: '爱丝',
            picsTitle: '老板不在，好寂寞 [调皮]',
            favoriteCount: 300
          },
          {
            picsDir: 'static/assets/pics/1/',
            headerImage: 'static/assets/authors/XiYao.jpg',
            pushDate: '2017-5-4',
            authorName: '希瑶',
            coverImage: 'static/assets/pics/1/18.jpg',
            picsCount: 34,
            catagoryName: '尤果网',
            picsTitle: '空姐的制服诱惑喜欢吗',
            favoriteCount: 200
          },
          {
            picsDir: 'static/assets/pics/2/',
            headerImage: 'static/assets/authors/MaLuNa.jpg',
            pushDate: '2017-5-4',
            authorName: '玛鲁娜',
            coverImage: 'static/assets/pics/2/18.jpg',
            picsCount: 32,
            catagoryName: '秀人网',
            picsTitle: '空调有点儿凉 [偷笑]',
            favoriteCount: 200
          },
          {
            picsDir: 'static/assets/pics/3/',
            headerImage: 'static/assets/authors/MaLuNa.jpg',
            pushDate: '2017-5-4',
            authorName: '玛鲁娜',
            coverImage: 'static/assets/pics/3/18.jpg',
            picsCount: 40,
            catagoryName: '秀人网',
            picsTitle: '你猜我在哪里呢？ [勾引]',
            favoriteCount: 200
          },
          {
            picsDir: 'static/assets/pics/4/',
            headerImage: 'static/assets/authors/MaLuNa.jpg',
            pushDate: '2017-5-4',
            authorName: '玛鲁娜',
            coverImage: 'static/assets/pics/4/0.jpg',
            picsCount: 30,
            catagoryName: '秀人网',
            picsTitle: '我cos的怎么样 [调皮]',
            favoriteCount: 200
          },
          {
            picsDir: 'static/assets/pics/5/',
            headerImage: 'static/assets/authors/MaLuNa.jpg',
            pushDate: '2017-5-4',
            authorName: '玛鲁娜',
            coverImage: 'static/assets/pics/5/23.jpg',
            picsCount: 24,
            catagoryName: '秀人网',
            picsTitle: '飞机即将起飞，请关闭手机',
            favoriteCount: 200
          }
        ]
      )
    }
  })
  Mock.setup({
    timeout: '100-3000'
  })
  Mock.mock(/\.json/, {
    'list|10': [
      '@PICSDIRS'
    ]
  })

  export default {
    methods: {
      getPhotos: function (isReset) {
        return new Promise((resolve, reject) => {
          this.$$.ajax({
            url: 'photos.json',
            method: 'GET',
            timeout: 10000,
            success: (data, status, xhr) => {
              let d = JSON.parse(data)
              if (isReset) { this.infoList = [] }
              d.list.forEach((item) => {
                this.infoList.push(item)
              })
              resolve()
            },
            error: (xhr, status) => {
              reject(xhr, status)
            }
          })
        })
      }
    }
  }
</script>
