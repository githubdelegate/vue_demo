<template>
<div class="index">
  <div class="slider">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in sliderData" :key="item">
        <img :src="item.pic" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <tabbar></tabbar>
</div>
</template>

<script>
import Tabbar from 'base/tabbar/tabbar'
export default {
  components: {
    Tabbar
  },
  data () {
    return {
      sliderData: [
        {
          pic: require('./img/swipe/1.jpg')
        },
        {
          pic: require('./img/swipe/2.png')
        },
        {
          pic: require('./img/swipe/3.jpg')
        }
      ]
    }
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
