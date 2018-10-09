<template>
    <div>
        <swiper/>
        <search/>
        <elnav/>
        <gallery/>
    </div>
</template>

<script>
import swiper from '@/components/swiper';
import search from '@/components/search';
import elnav from '@/components/el-nav';
import gallery from '@/components/gallery';

export default {
    components: { swiper, search, elnav, gallery }
}
</script>

<style>
</style>