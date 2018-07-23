<template>
  <div class="restaurant-detail">
    <seller-header></seller-header>
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
          console.log(this.seller)
        }
      })
    }
  },
  created () {
    this._initData()
  }
}
</script>

<style lang="scss" scoped>
</style>
