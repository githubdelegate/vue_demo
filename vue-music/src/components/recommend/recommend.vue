<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <slider v-if="recommends.length">
            <div v-for="item in recommends" :key="item">
              <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul class="list-content">
          <li v-for="item in dissList" :key="item" class="list-item">
            <div class="icon">
              <img :src="item.imgurl" alt="" width="60" height="60">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getRecommend, getDissList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Scroll from 'base/scroll/scroll'
export default {
  data() {
    return {
      recommends: [],
      dissList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDissList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.recommends = res.data.slider
        }
      })
    },
    _getDissList() {
      getDissList().then((res) => {
        if (res.code === ERR_OK) {
          this.dissList = res.data.list
          console.log(res.data.list)
        }
      })
    }
  },
  components: {
    Slider,
    Scroll
  }
}

</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import "~common/stylus/variable"
.recommend-list
  position relative
  margin-top 10px
  .list-title
    text-align center
    color $color-theme
    line-height 65px
    height 65px
    font-size $font-size-medium
  .list-content
    .list-item
      align-items center
      display flex
      padding 0 20px 20px 20px
      .icon
        flex  0 0 60px
        width 60px
        padding-right 20px
      .text
        display flex
        flex-direction column
        justify-content center
        flex 1
        line-height 20px
        overflow hidden
        font-size $font-size-medium
        .name
          margin-bottom 10px
          color $color-text
        .desc
          color $color-text-d
</style>
