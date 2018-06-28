<template>
  <div id="app">
    <musicheader></musicheader>
    <tab></tab>
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
  // @import "~common/stylus/variable"
  // @import "~common/stylus/mixin"
  // #app
    // color: $color-theme
</style>
