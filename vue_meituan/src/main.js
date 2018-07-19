// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 将全局样式文件写在 main.js
import '@/assets/scss/reset.scss'
import '@/assets/scss/iconfont.scss'
import '@/assets/ali-fonts/iconfont.css'
// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
