import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from 'components/index/index'
import RestaurantList from 'components/index/restaurant-list/restaurant-list'
import RestaurantDetail from 'components/index/restaurant-detail/restaurant-detail'
import Goods from 'components/index/restaurant-detail/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/restaurant_list',
      name: 'RestaurantList',
      component: RestaurantList
    },
    {
      path: '/restaurant_detail',
      name: 'RestaurantDetail',
      redirect: '/restaurant_detail/goods',
      component: RestaurantDetail,
      children: [
        {
          path: 'goods',
          component: Goods
        }
      ]
    }
  ]
})
