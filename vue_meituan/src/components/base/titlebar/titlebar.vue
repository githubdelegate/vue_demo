<template>
  <div class="titlebar">
    <span>{{ txt }}</span>
  </div>
</template>
<script>
export default {
  props: {
    txt: {
      type: String,
      default: '附近商家'
    }
  }
}
</script>

<style lang="scss" scoped>
.titlebar{
  text-align: center;
  height: 40px;
  line-height: 40px;
  span {
    font-weight: bold;
    color: #333;
    position: relative;
    display: inline-block;
    &:before {
      content: '';
      position: absolute;
      width: 30px;
      top: 20px;
      left: -45px;
      border-top: 1px solid #333;
      transform: scaleY(0.5);
    }
    &:after {
      content: '';
      position: absolute;
      width: 30px;
      top: 20px;
      right: -45px;
      border-top: 1px solid #333;
      transform: scaleY(0.5);
    }
  }
}
</style>
