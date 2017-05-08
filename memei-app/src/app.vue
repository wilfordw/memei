<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view"main>
        <f7-pages>
          <f7-page no-page-content infinite-scroll pull-to-refresh navbar-through toolbar-through>
            <f7-navbar v-if="$theme.ios">
              <f7-nav-center>Memei</f7-nav-center>
              <f7-nav-right>
                <f7-link iconF7="data" href="/login/"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <!--swipeable animated-->
            <f7-tabs swipeable>
              <card-list class="active" :listName="latestListName"></card-list>
              <card-list :listName="catagoryListName"></card-list>
              <card-list :listName="favoriteListName"></card-list>
              <photo-search :listName="searchListName"></photo-search>
            </f7-tabs>
            <f7-toolbar tabbar labels>
              <f7-link iconF7="home"  text="最新" :tab-link="'#'+ latestListName" active></f7-link>
              <f7-link iconF7="keyboard" text="分类" :tab-link="'#' + catagoryListName"></f7-link>
              <f7-link iconF7="heart" text="最热" :tab-link="'#' + favoriteListName"></f7-link>
              <f7-link iconF7="search" text="搜索" :tab-link="'#' + searchListName"></f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  import CardList from './pages/cardList.vue'
  import PhotoSearch from './pages/photo-search.vue'

  export default {
    data () {
      return {
        latestListName: 'latestList',
        catagoryListName: 'catgoryList',
        favoriteListName: 'favoriteList',
        searchListName: 'searchList'
      }
    },
    components: {
      'card-list': CardList,
      'photo-search': PhotoSearch
    },
    computed: {
      test: function () {
        let html = ''
        for(let i = 0; i < 100; i++) {
          html += 'test' + i + '<br>'
        }
        return html
      }
    },
    methods: {}
  }
</script>

<style lang="stylus">
  @import "stylus/main.styl"
</style>
