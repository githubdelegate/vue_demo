<template>
  <div class="seller-header">
    <div class="content-wrapper" v-if="seller">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="desc">
          <span>{{ seller.description }} / {{ seller.deliveryTime }}</span>分钟送达
        </div>
        <div class="supports">
          <!-- <span class="icon" :class="classMap[seller.supports[0].type]"></span> -->
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="supports-count">
        <span>{{ seller.supports.length }}个活动</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="brand"></span>
      <span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>

    <div class="back" @click="back">
      <i class="icon-arrow_lift"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    seller: Object
  },
  watch: {
    'seller': function () {
      console.log('seller hava value')
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';
.seller-header {
  position: relative;
  color: #fff;
  line-height: 1;
  font-weight: 13px;
  font-weight: 200;
  background-color: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0px;
        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          @include bg-image('./img/brand')
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .desc {
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 13px;
      }
      .supports {
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          @include bg-image('./img/decrease_1')
        }
        .text {
          font-size: 10px;
          line-height: 10px;
        }
      }
    }
    .supports-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        text-align: center;
        border-radius: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        span {
          font-size: 10px;
          line-height: 24px;
        }
        i {
          position: relative;
          top: 1px;
          font-size: 10px;
          margin-left: 2px;
          line-height: 24px;
        }
      }
  }
  .bulletin-wrapper {
        position: relative;
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        background-color: rgba(7, 17, 27, 0.2);
        @include ellipsis(1);
        .brand {
          display: inline-block;
          width: 22px;
          height: 12px;
          @include bg-image('./img/bulletin');
          background-size: 22px 22px;
          vertical-align: top;
          margin-top: 7px;
        }
        .text {
          font-size: 10px;
          margin: 0 4px;
          vertical-align: top;
        }
        i {
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 10px;
        }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      filter: blur(10px); // css 模糊
    }
  }

  .back {
    position: absolute;
    top: 25px;
    right: 19px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    i {
      display: block;
      font-size: 20px;
      color: #fff;
      padding: 7px;
    }
  }
}
</style>
