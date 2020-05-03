<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  position: relative
  height: 0.86rem
  line-height: 0.86rem
  overflow: hidden
  text-align: center
  color: #ffffff
  background: $bgColor
  font-size: 0.32rem
  .back-icon
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #ffffff
</style>
