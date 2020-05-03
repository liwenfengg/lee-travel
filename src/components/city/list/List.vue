<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              <!-- {{city}} -->
              {{currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    // ...mapState(['city'])
    ...mapState({
      currentCity: 'city'// 数据映射
    })
  },
  mounted () {
    // 这是因为异步加载导致的，在数据没加载之前就创建better-scroll实例，会导致真实高度计算错误。在vue里面也没必要用定时器，使用vue的$nextTick方法就能解决这个问题
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true })
    })
  },
  watch: {
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #cccccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      width: 33.33%
      float: left
      .button
        text-align: center
        padding: 0.1rem 0
        margin: 0.1rem
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    line-height: 0.76rem
    padding-left: 0.2rem
</style>
