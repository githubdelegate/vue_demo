<template>
<div class="index">
  <!-- 轮播图 -->
  <div class="slider">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in sliderData" :key="item">
        <img :src="item.pic" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <!-- 分类按钮 -->
  <div class="types">
    <type-item v-for="type in types" :key="type" :ico="type.ico" :txt="type.txt" @toList="toList(type)"></type-item>
  </div>
  <!-- 分割线 -->
  <div class="crossline"></div>
  <!-- 附近商家 -->
  <div class="nearby">
    <title-bar :txt="附近商家"></title-bar>
    <sell-list-item v-for="item in selllist" :key="item" :data="item" @toResturant="toResturant"></sell-list-item>
  </div>
  <!-- 底部 tabbar -->
  <tabbar></tabbar>
</div>
</template>

<script>
import Tabbar from 'base/tabbar/tabbar'
import TypeItem from 'base/typeitem/typeitem'
import TitleBar from 'base/titlebar/titlebar'
import SellListItem from 'base/selllistitem/selllistitem'
import RestaurantList from 'components/index/restaurant-list/restaurant-list'
import axios from 'axios'
export default {
  components: {
    Tabbar,
    TypeItem,
    TitleBar,
    SellListItem,
    RestaurantList
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
      ],
      selllist: []
    }
  },
  methods: {
    // 请求商家列表
    _initSelllist () {
      axios.get('/api/selllist').then(res => {
        if (res.data.code === 0) {
          this.selllist = res.data.data.data.poilist
          console.log(this.selllist)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 点击分类按钮 跳转到列表页面
    toList () {
      this.$router.push({
        path: '/restaurant_list'
      })
    },
    toResturant (data) {
      console.log('sell res index')
      console.log('sss', data)
      this.$router.push({
        path: '/restaurant_detail'
      })
    }
  },
  created () {
    this._initSelllist()
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
.crossline {
  width: 100%;
  height: 16px;
  background-color: #ebebeb;
}
</style>
