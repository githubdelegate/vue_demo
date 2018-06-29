<template>
  <div id="slider">
    <div class="window">
      <ul class="container" :style="containerStyle">
        <li>
          <img src="" alt="">
        </li>
        <li v-for="(item,index) in slider" :key="index">
          <img :src="item.img" alt="">
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot,i ) in slider" :key="i" :class="{dotted: i === (currentIndex - 1)}">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name: 'slider',
  data() {
    return {
      slider: [
        {img: 'image.jpg'},
        {img: 'image.jpg'},
        {img: 'image.jpg'},
        {img: 'image.jpg'},
        {img: 'image.jpg'},
        {img: 'image.jpg'},
        {img: 'image.jpg'}
      ],
      currentIndex: 1,
      distance: -600
    }
  }
}
</script>
<style lang="stylus">

</style>
