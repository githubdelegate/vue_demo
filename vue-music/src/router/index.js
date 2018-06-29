import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Musicheader from '@/components/m-header/m-header'
import Slider from '@/components/slider/slider'

import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/musicheader',
      name: 'musicheader',
      component: Musicheader
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/',
      redirect: '/recommend' // 这样设置可以默认就让第一个推荐高亮显示
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
