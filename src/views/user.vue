<template>
    <div>
        <div class="member">
            <div class="member-pic">
                <img src="images/default_photo.png" />
            </div>
            <div class="member-infor" v-show="bl">欢迎您:&nbsp;{{bUSER}}</div>
            <div class="member-infor" v-show="!bl">
                <router-link :to="{name:'login',params:{path:this.$route.fullPath}}" style="color:#fff">登录</router-link>&nbsp;&nbsp;/&nbsp;
                <router-link :to="{name:'reg',params:{path:this.$route.fullPath}}" style="color:#fff">注册</router-link>
            </div>
        </div>
        <ul class="member-nav">
            <li>
                <a href="javascript:;">
                    <i class="am-icon-map-marker"></i>
                    <span>收货地址</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-newspaper-o"></i>
                    <span>我的订单</span>
                </a>
            </li>
            <li>
                <a href="javascript:;" @click="toCart">
                    <i class="am-icon-cart-arrow-down"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-bell-o"></i>
                    <span>系统通知</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-credit-card"></i>
                    <span>会员卡</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-cc-mastercard"></i>
                    <span>优惠券</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-dollar"></i>
                    <span>积分</span>
                </a>
            </li>
        </ul>
        <ul class="member-nav mt">
            <li>
                <a href="javascript:;">
                    <i class="am-icon-phone"></i>联系我们</a>
            </li>
        </ul>
        <div class="h50"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            bl: false
        }
    },
    computed: mapGetters([
        'bUSER'
    ]),
    mounted() {
        if (this.bUSER) this.bl = !this.bl
    },
    methods: {
        toCart() {
            if (this.bUSER) {
                this.$router.push({ name: 'cart' })
            } else {
                this.$router.push({ name: 'login', params: { path: this.$route.fullPath } })
            }
        }
    }
}
</script>

<style>
</style>