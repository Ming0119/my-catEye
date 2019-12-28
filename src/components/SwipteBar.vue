<template>
 <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item) in swpirData" :key="item.id">
      <img :src="item.img" alt="">
     </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    swpirData: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        // 配置swiper样式
        spaceBetween: 10,
        slidesPerView: 4,
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 3rem;
    }
  }
</style>
