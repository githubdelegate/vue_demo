<template>
<div class="index">
  <div class="slider">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in sliderData" :key="item">
        <img :src="item.pic" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="types">
    <type-item v-for="type in types" :key="type" :ico="type.ico" :txt="type.txt"></type-item>
  </div>
  <tabbar></tabbar>
</div>
</template>

<script>
import Tabbar from 'base/tabbar/tabbar'
import TypeItem from 'base/typeitem/typeitem'

export default {
  components: {
    Tabbar,
    TypeItem
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
        },
        {
          pic: require('./img/swipe/bannertemp.e8a6fa63.jpg')
        }
      ],
      types: [
        {
          ico: require('./img/types/types (0).png'),
          txt: '美食'
        },
        {
          ico: require('./img/types/types (1).png'),
          txt: '美团超市'
        },
        {
          ico: require('./img/types/types (2).png'),
          txt: '生鲜果蔬'
        },
        {
          ico: require('./img/types/types (3).png'),
          txt: '甜点饮品'
        },
        {
          ico: require('./img/types/types (4).png'),
          txt: '正餐优选'
        },
        {
          ico: require('./img/types/types (5).png'),
          txt: '美团专送'
        },
        {
          ico: require('./img/types/types (6).png'),
          txt: '能量西餐'
        },
        {
          ico: require('./img/types/types (7).png'),
          txt: '精品小吃'
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
