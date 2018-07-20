<!-- // 商家列表   -->
<template>
  <div class="restaurant-list">
    <header-bar txt="餐厅列表" @back="back"></header-bar>
    <sell-list-item v-for="item in restaurantlist" :key="item" :data="item"></sell-list-item>
  </div>
</template>

<script>
import SellListItem from 'base/selllistitem/selllistitem'
import HeaderBar from 'base/header-bar/header-bar'
import axios from 'axios'
export default {
  components: {
    SellListItem,
    HeaderBar
  },
  data () {
    return {
      restaurantlist: []
    }
  },
  methods: {
    _initRestaurantListData () {
      axios.get('/api/restaurantList').then(res => {
        if (res.data.code === 0) {
          this.restaurantlist = res.data.data.data.poilist
        }
      }).catch(err => {
        console.log(err)
      })
    },
    back () {
      console.log('restuant back')
      this.$router.push({
        path: '/index'
      })
    }
  },
  created () {
    this._initRestaurantListData()
  }
}
</script>

<style lang="scss" scoped>
.restaurant-list {
  background-color: #fff;
  margin-top: 42px;
}
</style>
