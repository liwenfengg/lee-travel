<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63a;</span>
          &nbsp;{{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <commen-fade>
      <commen-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handeleGallaryClose"></commen-gallary>
    </commen-fade>
  </div>
</template>

<script>
import CommenGallary from '../../../components/common/gallary/Gallary'
import CommenFade from '../../../components/common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handeleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommenGallary,
    CommenFade
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    display: flex
    color: #ffffff
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0, ), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      margin-top: 0.14rem
      padding: 0 0.4rem
      line-height: 0.32rem
      height: 0.32rem
      border-radius: 0.2rem
      background: rgba(0, 0, 0, 0.5)
      font-size: 0.24rem
      .banner-icon
        font-size: 0.24rem
</style>
