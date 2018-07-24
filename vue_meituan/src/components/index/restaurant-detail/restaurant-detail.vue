<template>
  <div class="restaurant-detail">
    <seller-header :seller="seller"></seller-header>
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
</style>
