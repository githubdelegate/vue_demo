<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuRef">
        <ul>
          <li class="menu-item" v-for="(item, index) in goods"
          :class="{'current': currentIndex === index}"
           :key="index"
           @click="selectMenu(index, $event)">
           <span class="text"><span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      goods: [],
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  props: {
    seller: Object
  },
  methods: {
    _initData () {
      axios.get('/api/goods').then(res => {
        if (res.data.code === 0) {
          this.goods = res.data.data
        }

        setTimeout(() => {
        }, 20)
      }).catch(err => {
        console.log('goods err', err)
      })
    }
  },
  created () {
    this._initData()
    console.log(' goods create')
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let h1 = this.listHeight[i]
        let h2 = this.listHeight[i + 1]

        if ((this.scrollY >= h1 && this.scrollY < h2) || !h2) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let select = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            select.push(food)
          }
        })
      })
      return select
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      line-height: 14px;
      padding: 0 12px;
      @include onepx('bottom', true);
      &.current {
        position: relative;
        margin-top: -1px;
        background-color: #fff;
        font-weight: 700;
        z-index: 10;
      }
      .text {
        font-size: 12px;
        display: table-cell;
        vertical-align: middle;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease {
            @include bg-image('./img/decrease_3');
          }
          &.discount {
            @include bg-image('./img/discount_3');
          }
          &.guarantee {
            @include bg-image('./img/guarantee_3');
          }
          &.invoice {
            @include bg-image('./img/invoice_3');
          }
          &.special {
            @include bg-image('./img/special_3');
          }
        }
      }
    }
  }
}
</style>
