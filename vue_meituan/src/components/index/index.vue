<template>
<div class="index">
  <tabbar></tabbar>
</div>
</template>

<script>
import Tabbar from 'base/tabbar/tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';
.index {
  .slider {
    height: 170px;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .types {
    overflow: hidden;
    padding-bottom: 20px;
    background-color: #fff;
  }
  .nearby {
    margin-bottom: 50px;
    background-color: #fff;
  }
}
</style>
