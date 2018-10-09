<template>
    <div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider='{}'>
        <swiper :options="swiperOption" ref="mySwiper" class="am-slides">
            <!-- slides -->
            <swiper-slide><img src="images/banner.jpg"></swiper-slide>
            <swiper-slide><img src="images/banner1.jpg"></swiper-slide>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: { swiper, swiperSlide },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 6000,
                }, 
                loop : true,
    }
}
    }
}
</script>

<style>
</style>