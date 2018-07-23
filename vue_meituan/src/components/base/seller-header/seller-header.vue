<template>
  <div class="seller-header" v-if="seller">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
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
}
</style>
