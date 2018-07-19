<template>
  <div class="type-item" @click="toList">
    <img :src="ico" alt="">
    <span>{{ txt }}</span>
  </div>
</template>

<script>
export default {
  props: {
    ico: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    }
  },
  methods: {
    toList () {
      this.$emit('toList')
    }
  }
}
</script>

<style lang="scss" scoped>
.type-item {
  float: left;
  width: 25%;
  text-align: center;
  padding-top: 14px;
  img {
    display: block;
    width: 50px;
    margin: 0 auto 12px;//设置块级元素的 width 可以防止它从左到右撑满整个容器。
    // 然后你就可以设置左右外边距为 auto 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。
  }
  span {
    display: block;
    line-height: 14px; // 表示行高
    font-size: 14px; // 表示文字大小
    color: #2f2f2f;
  }
}
</style>
