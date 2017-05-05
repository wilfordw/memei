<template>
  <f7-page-content tab :id="listName">
    <f7-searchbar
    cancel-link="取消"
    :custom-search="true" placeholder="搜索心仪的作者" :clear="true" @input="onSearch"></f7-searchbar>
    <info-card
        v-for="info in infoList"
        :headerImage="info.headerImage"
        :authorName="info.authorName"
        :pushDate="info.pushDate"
        :coverImage="info.coverImage"
        :picsCount="info.picsCount"
        :catagoryName="info.catagoryName"
        :picsTitle="info.picsTitle"
        :favoriteCount="info.favoriteCount"
        :picsDir="info.picsDir"
    ></info-card>
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
      onSearch: function (key) {
        this.getPhotos(true)
          .then(result => console.log(result))
          .catch(error => console.log(error))
      }
    },
    mounted: function () {
    }
  }
</script>

<style>
  /*.swiper-slide .preloader {*/
  /*width: 20px;*/
  /*height: 20px;*/
  /*position: relative;*/
  /*left: 0;*/
  /*top: 0;*/
  /*margin-top: 0;*/
  /*margin-left: 0;*/
  /*}*/
</style>
