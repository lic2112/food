<template>
    <div>
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <a href="javascript:;" class="" @click="$router.go(-1)">
                    <i class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title">
                <a href="javascript:;" class="" style="color: #333;">全部订单</a>
            </h1>
            <div class="am-header-right am-header-nav">
                <a href="javascript:;" class=""> </a>
            </div>
        </header>
        <div class="cate-search" style="position: relative; top: 0; border-bottom: 0;">
            <input type="text" class="cate-input" placeholder="搜索全部订单">
            <input type="button" class="cate-btn">
        </div>
        <ul class="order-style">
            <li class="current">
                <a href="javascript:;">全部</a>
            </li>
            <li>
                <a href="javascript:;">待付款</a>
            </li>
            <li>
                <a href="javascript:;">待收货</a>
            </li>
            <li>
                <a href="javascript:;">待评价</a>
            </li>
            <li>
                <a href="javascript:;">退换货</a>
            </li>
        </ul>
        <div v-for="item in buycar" :key="item.id">
            <div class="c-comment">
                <span class="c-comment-num">订单编号：150916517682</span>
                <span class="c-comment-suc">待付款</span>
            </div>
            <div class="c-comment-list" style="border: 0;">
                <a class="o-con" href="javascript:;">
                    <div class="o-con-img"><img :src="item.img"></div>
                    <div class="o-con-txt">
                        <p>{{item.name}}</p>
                        <p class="price">￥{{item.price}}</p>
                        <p>合计：
                            <span>￥{{item.price*item.number}}</span>
                        </p>
                    </div>
                    <div class="o-con-much">
                        <h4>
                            <span @click="changeItem({id:item.id,num:-1})" style="color:#ff5500;font-size:2rem;">-</span>
                            {{item.number}}
                            <span @click="changeItem({id:item.id,num:1})" style="color:#ff5500;font-size:2rem;">+</span>
                        </h4>
                    </div>

                </a>
            </div>
            <div class="c-com-btn">
                <a href="javascript:;">立即支付</a>
                <a href="javascript:;" @click="removeItem({id:item.id})">取消订单</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {

        }
    },
    computed: mapGetters([
        'buycar'
    ]),
    methods: mapActions([
        'changeItem','removeItem'
    ])
}
</script>

<style>
</style>