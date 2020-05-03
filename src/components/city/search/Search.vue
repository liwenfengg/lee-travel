<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((element) => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem
  .search-input
    box-sizing: border-box
    height: 0.62rem
    line-height: 0.62rem
    width: 100%
    text-align: center
    border-radius: 0.06rem
    color: #666
    padding: 0.1rem
  .search-input::-webkit-input-placeholder
    color: #cccccc
  .search-input::-moz-placeholder
    color: #cccccc
  .search-input:-moz-placeholder
    color: #cccccc
  .search-input:-ms-input-placeholder
    color: #cccccc
.search-content
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eeeeee
  z-index: 1
  overflow: hidden
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    color: #666
    background: #ffffff
</style>
