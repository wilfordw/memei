<template>
  <f7-page-content tab :id="listName" class="pull-to-refresh-content infinite-scroll" @ptr:refresh.native="onRefresh" @infinite.native="onInfiniteScroll">
    <div class="pull-to-refresh-layer">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
    <info-card
          v-for="(info,index) in infoList"
          :headerImage="info.headerImage"
          :authorName="info.authorName"
          :pushDate="info.pushDate"
          :coverImage="info.coverImage"
          :picsCount="info.picsCount"
          :catagoryName="info.catagoryName"
          :picsTitle="info.picsTitle"
          :favoriteCount="info.favoriteCount"
          :picsDir="info.picsDir"
          :key="index"
      ></info-card>
    <!-- Preloader -->
    <div class="infinite-scroll-preloader">
      <div class="preloader"></div>
    </div>
  </f7-page-content>
</template>

<script>
import InfoCard from '../components/info-card.vue'
import AjaxMixin from '../mixins/ajax.vue'
export default {
  mixins: [AjaxMixin],
  data () {
    return {
      infoList: [],
      isLoading: false
    }
  },
  props: {
    listName: String
  },
  components: {
    'info-card': InfoCard
  },
  methods: {
    onInfiniteScroll: function () {
      if(this.isLoading) { return }
      this.isLoading = true
      this.getPhotos().then(() => {
        this.isLoading = false
      }).catch(error => {
        this.isLoading = false
        console.log(error)
      })
    },
    onRefresh: function () {
      console.log('refresh')
      this.getPhotos(true).then(() => {
        this.$f7.pullToRefreshDone()
      }).catch(error => {
        this.$f7.pullToRefreshDone()
        console.log(error)
      })
    }
  },
  mounted: function () {
    this.getPhotos().catch(error => console.log(error))
  }
}
</script>

<style lang="stylus">
.swiper-slide .preloader
  width: 20px
  height: 20px
  position: relative
  left: 0
  top: 0
  margin-top: 0
  margin-left: 0

.pull-to-refresh-layer .preloader
  position: absolute
  left: 50%
  top: 50%
  margin-left: -10px
  margin-top: -10px
  visibility: hidden
</style>
