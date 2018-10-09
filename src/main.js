import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/style.css';
import '@/assets/css/amazeui.min.css';
Vue.config.productionTip = false

import request from '@/utils/request';
Vue.prototype.$http = request;

import loading from '@/components/loading';
Vue.use(loading)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')