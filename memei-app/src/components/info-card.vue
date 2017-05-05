<template>
  <div class="card">
    <div class="card-header">
      <span class="head"><img :src=" headerImage"></span>
      <span class="author">{{ authorName }}</span>
      <div class="date">{{ pushDate }}</div>
    </div>
    <div class="card-content">
      <div class="clip">
        <img :src="coverImage" @click="onImageClicked"/>
        <span class="catagory">{{ catagoryName }}</span>
        <div class="pic-count">
          <f7-icon f7="camera_fill" size="20" style="float: left"></f7-icon>
          <span style="margin-left: 5px; line-height: 20px">{{ picsCount }}</span>
        </div>
      </div>
    </div>
    <f7-card-footer>
      <span style="color: black">{{ picsTitle }}</span>
      <span style="color: hotpink">
        <span style="padding-right: 5px; color: gray">{{ favoriteCount }}</span>
        <f7-icon f7="heart"></f7-icon>
      </span>
    </f7-card-footer>
  </div>
</template>

<script>
  let path = require('path')
  export default {
    props: {
      picsDir: String,
      headerImage: String,
      authorName: String,
      pushDate: String,
      coverImage: String,
      picsCount: Number,
      catagoryName: String,
      picsTitle: String,
      favoriteCount: Number
    },
    methods: {
      onImageClicked: function () {
        let picsPath = []
        let index = 0
        Array.prototype.forEach.call(Array.from({length: this.picsCount}), () => {
          picsPath.push(path.join(this.picsDir, index + '.jpg'))
          index++
        })
        let browerNavTemplate = `
        <div class="navbar">
          <div class="navbar-inner">
            <div class="left sliding">
              <a href="#" class="link close-popup photo-browser-close-link">
                <i class="f7-icons">left</i>
              </a>
            </div>
          </div>
        </div>`
        let browerToolBarTemplate = `
        <div class="toolbar tabbar">
          <div class="toolbar-inner">
            <a href="#" class="link photo-browser-prev">
              <i class="f7-icons" style="color: deeppink">left</i>
            </a>
            <a href="#" class="link photo-browser-next">
                <i class="f7-icons" style="color: deeppink">right</i>
            </a>
          </div>
        </div>`

        let photoLazyTemplate = `
        <div class="photo-browser-slide photo-browser-slide-lazy swiper-slide">
            <div class="preloader {{@root.preloaderColorClass}}">{{#if @root.material}}{{@root.materialPreloaderSvg}}{{/if}}</div>
            <span class="photo-browser-zoom-container">
                <img data-src="{{js "this.url || this"}}" class="swiper-lazy">
            </span>
        </div>`
        this.$f7.photoBrowser({
          photos: picsPath,
          backLinkText: '关闭',
          ofText: '-',
//          lazyLoading: true,
          lazyLoadingOnTransitionStart: true,
          navbarTemplate: browerNavTemplate,
          toolbarTemplate: browerToolBarTemplate,
          photoLazyTemplate: photoLazyTemplate,
          onLazyImageLoad: function(swiper, slide, image){
            console.log(swiper, slide, image)
          },
          onLazyImageReady: function (swiper, slide, image) {
            console.log(swiper, slide, image)
          }
        }).open()
      }
    }
  }
</script>

<style>
  .card {
    border-radius: 10px;
  }
  .card-header {
    padding: 5px
  }
  .head img {
    width: 50px;
    border-radius: 50px;
  }
  .author {
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    flex-grow: 1;
    padding-left: 5px;
  }
  .date {
    font-size: 14px;
    color: lightslategray;
    text-align: right;
    padding-right: 5px;
  }
  .clip {
    width: 100%;
    height: 100vw;
    overflow: hidden
  }
  .clip img {
    width: 100%;
    margin-top: -15vh
  }
  .catagory {
    position: absolute;
    top: 10px;
    left: 20px;
    color: white;
    font-weight: 400;
  }
  .pic-count {
    position: absolute;
    top: 92vw; left: 80vw;
    color: white;
  }
</style>
