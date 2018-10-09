<template>
    <div>
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default title">
            <h2 class="am-titlebar-title "> 积分菜品 </h2>
            <nav class="am-titlebar-nav">
                <a href="javascript:;" class="">more &raquo;</a>
            </nav>
        </div>
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
            <li v-for="item in list" :key="item.id">
                <div class="am-gallery-item">
                    <router-link :to="{name:'detail',query:{goods:item.id}}">
                        <img :src="item.img" alt="" />
                        <h3 class="am-gallery-title">{{item.name}}</h3>
                        <div class="am-gallery-desc">
                            <em>￥{{item.price}}</em>
                            <i class="am-icon-cart-plus"></i>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
        <div class="h50"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: null
        }
    },
    mounted() {
        this.$http.get('/data/home_gallery.json').then((res) => {
            this.list = res
        })
    },
}
</script>

<style>
</style>