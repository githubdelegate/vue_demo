<template>
  <div id="app">
    <musicheader></musicheader>
    <tab></tab>
    <!-- // 缓存组件 不用重新渲染 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Musicheader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    Musicheader,
    Tab
  }
}
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
</style>
