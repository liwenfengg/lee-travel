<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont input-icon">&#xe632;</span>
      <input class="search-input" type="text" placeholder="输入城市/景点/游玩主题" autofocus="autofocus">
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])// 数据映射
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  display: flex
  height: 0.86rem
  line-height: 0.86rem
  background: $bgColor
  color: #ffffff
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    background: #ffffff
    border-radius: 0.1rem
    color: #ccc
    display: flex
    .input-icon
      display: inline-block
      float: left
    .search-input
      float: left
      display: inline-block
      box-sizing: border-box
      height: 0.64rem
      line-height: 0.64rem
      width: 100%
      // text-align: center
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #666
    .search-input::-webkit-input-placeholder
      color: #cccccc
    .search-input::-moz-placeholder
      color: #cccccc
    .search-input:-moz-placeholder
      color: #cccccc
    .search-input:-ms-input-placeholder
      color: #cccccc
  .header-right
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    margin-left: 0.2rem
    color: #ffffff
    .arrow-icon
      font-size: 0.24rem
</style>
