<template>
  <div>
    <slider>
      <div v-for="item in recommends" :key="item">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
      </div>
    </slider>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  data() {
    return {
      recommends: []
    }
  },
  created() {
    console.log('BENGIN  get recommend')
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      console.log('BENGIN  get recommend')
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.recommends = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}

</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
