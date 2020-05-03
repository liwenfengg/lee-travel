<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet
  background: rgba(255, 255, 255, 1)
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  height: 0
  width: 100%
  overflow: hidden
  padding-bottom: 26.67%
  background: #ccc
  .swiper-img
    width: 100%
</style>
