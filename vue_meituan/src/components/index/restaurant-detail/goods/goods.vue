<template>
  <div>
    <div class="goods">
      <!-- 类型 -->
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
      <div class="foods-wrapper" ref="foodsRef">
        <ul>
          <li class="foods-list foods-list-hook" v-for="item in goods"  :key="item" ref=foodList>
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li class="foods-item" v-for="food in item.foods" :key="food" @click="toFoodDetail(food, $event)">
                <div class="icon">
                  <img v-lazy="food.icon">
                </div>

                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>

                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}</span>
                    <span class="rating">好评率{{ food.rating }}</span>
                  </div>

                  <div class="price">
                    <span class="now">${{ food.price }}</span>
                    <span class="old" v-show="food.oldPrice">${{ food.oldPrice }}</span>
                  </div>

                  <div class="control">
                    <cart-control :food="food" @drop="drop"></cart-control>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shop-cart ref="shopcartRef" :selectFoods="selectFood">
      </shop-cart>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import CartControl from 'base/cart-cotrol/cart-control'
import ShopCart from 'base/shopcart/shopcart'

export default {
  components: {
    CartControl,
    ShopCart
  },
  data () {
    return {
      goods: [],
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      listHeight: [],
      scrollY: 0,
      selectedFood: {},
      currentIndex: 0
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
          this._initScroll()
        }, 20)
      }).catch(err => {
        console.log('goods err', err)
      })
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuRef, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsRef, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.floor(pos.y))
      })
    },
    selectMenu (index, event) {
      this.currentIndex = index
      if (!event._constructed) {
        return
      }
      console.log('select menu')
    },
    drop (target) {
      this.$nextTick(() => {
        this.$refs.shopcartRef.drop(target)
      })
    }
  },
  created () {
    this._initData()
    console.log(' goods create')
  },
  computed: {
    // currentIndex () {
    //   for (let i = 0; i < this.listHeight.length; i++) {
    //     let h1 = this.listHeight[i]
    //     let h2 = this.listHeight[i + 1]

    //     if ((this.scrollY >= h1 && this.scrollY < h2) || !h2) {
    //       return i
    //     }
    //   }
    //   return 0
    // },
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
  .foods-wrapper {
    float: 1;
    .foods-list {
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background-color: #f3f5f7;
      }
      .foods-item {
        position: relative;
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        @include onepx('bottom', true);
        .icon {
          flex: 0 0 57px;
          width: 57px;
          height: 57px;
          margin-right: 10px;
          img {
            width: 57px;
            height: 57px;
          }
        }
        .content {
          flex: 1;
          .name {
            font-size: 14px;
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            color: rgb(7, 17, 27);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 14px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .extra {
            margin-bottom: 8px;
            line-height: 12px;
            font-size: 0;
            color: rgb(147, 153, 159);
            .count {
              font-size: 10px;
              margin-right: 12px;
            }
            .rating {
              font-size: 10px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              font-size: 10px;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }
          .control {
            position: absolute;
            right: 0;
            bottom: 1px;
          }
        }
      }
    }
  }
}
</style>
