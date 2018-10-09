<template>
    <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default footer " id="">
        <ul class="am-navbar-nav am-cf am-avg-sm-4">
            <li>
                <router-link active-class="active" to="/home">
                    <span class=""><img src="images/nav.png" /></span>
                    <span class="am-navbar-label">点餐</span>
                </router-link>
            </li>
            <li>
                <router-link active-class="active" to="/speak">
                    <span class=""><img src="images/nav2.png" /></span>
                    <span class="am-navbar-label">客说</span>
                </router-link>
            </li>
            <li>
                <router-link active-class="active" to="/we">
                    <span class=""><img src="images/nav3.png" /></span>
                    <span class="am-navbar-label">我们</span>
                </router-link>
            </li>
            <li>
                <router-link active-class="active" to="/user">
                    <span class=""><img src="images/nav4.png" /></span>
                    <span class="am-navbar-label">我的</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.active {
  background: antiquewhite;
}
.am-navbar-default .am-navbar-nav {
  background: #fff;
}
.footer {
  border-top: 1px solid #ddd;
}
.footer a {
  color: #999;
}
.footer li img {
  width: 30px;
  height: 30px;
  margin-top: 0;
}
</style>