<template>
    <div>
        <swiper />
        <div class="detail">
            <h2>{{goods.name}}</h2>
            <div class="price">
                <b>￥{{goods.price}}</b>
                <span>（积分可抵扣5元）</span>
            </div>
            <div class="kucun">
                <p>库存：1000</p>
                <p>运费：免运费</p>
            </div>
        </div>
        <div class="comment">
            <h2>宝贝评价（0）</h2>
            <ul>
                <li>
                    <a hhref="">有图（0）</a>
                </li>
                <li>
                    <a hhref="">好评（0）</a>
                </li>
                <li>
                    <a hhref="">中评（0）</a>
                </li>
                <li>
                    <a hhref="">差评（0）</a>
                </li>
            </ul>
        </div>
        <div class="detail-con">
            <p>  排毒排便－香蕉牛奶汁</p>
            <p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p>
            <br />
            <br />
            <p>  止咳防晕－芒果汁</p>
            <p>  退火利尿－椰子汁</p>
            <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
            <p>  水果之王－奇异果汁</p>
            <img src="images/banner.jpg" />
        </div>
        <div class="h50"></div>
        <ul class="fixed-btn">
            <li>
                <a href="javascript:;" class="current" @click="toCart">购物车</a>
            </li>
            <li>
                <a href="javascript:;" @click="addItem(goods)">加入购物车</a>
            </li>
        </ul>
    </div>
</template>

<script>
import swiper from '@/components/swiper';
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            goods: ''
        }
    },
    components: { swiper },
    mounted() {
        this.$http.get('/data/home_gallery.json').then(
            res => {
                res.forEach(item => {
                    if (item.id == this.$route.query.goods) {
                        this.goods = item
                    }
                });
            }
        )
    },
    methods: {
        addItem(data) {
            if (this.$store.state.bUSER) {
                this.$store.dispatch('addItem', data)
            }else{
                // console.log(this.$route.fullPath);
                this.$router.push({name:'login',params:{path:this.$route.fullPath}})
            }
        },
        toCart(){
            if(this.bUSER){
                this.$router.push('/cart')
            }else{
                this.$router.push({name:'login',params:{path:this.$route.fullPath}})
            }
        }
    },
    computed:mapGetters([
        'bUSER'
    ])
}
</script>

<style>
</style>