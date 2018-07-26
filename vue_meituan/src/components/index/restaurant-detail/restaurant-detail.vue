<template>
  <div class="restaurant-detail">
    <!-- 头部信息 -->
    <seller-header :seller="seller"></seller-header>
    <!-- 中间 tabbar -->
    <div class="tab">
      <div class="tab-item">
        <router-link to="goods">点菜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import SellerHeader from 'base/seller-header/seller-header'
import axios from 'axios'
export default {
  components: {
    SellerHeader
  },
  data () {
    return {
      seller: {
        id: '0001'
      }
    }
  },
  methods: {
    _initData () {
      axios.get('/api/seller?id=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
          console.log('this.seller %o', this.seller)
        }
      })
    },
    _getQueryData () {
      this.seller = this.$route.query.data
      console.log(' get query data %o', this.seller)
    }
  },
  created () {
    // console.log('detail')
    // this.seller = this.$route.query.data
    // console.log(' get query data %o', this.seller)
    this._initData()
  },
  watch: {
    '$route': '_getQueryData'
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';
.restaurant-detail {
  .tab {
    display: flex;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    width: 100%;
    @include onepx('bottom');
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active {
          color: rgb(240, 20, 20)
        }
      }
    }
  }
}
</style>
