<template>
  <div id="app">
    <musicheader></musicheader>
    <tab></tab>
    <router-view></router-view>
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
