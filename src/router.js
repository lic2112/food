import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from '@/views/home';
import detail from '@/views/detail';
import error from '@/views/error';
import user from '@/views/user';
import login from '@/views/login';
import reg from '@/views/reg';
import cart from '@/views/cart';
import speak from '@/views/speak';
import we from '@/views/we';

export default new Router({
	routes: [
		{ path: '/home', name: 'home', component: home },
		{ path: '/detail', name: 'detail', component: detail },
		{ path: '/user', name: 'user', component: user },
		{ path: '/reg', name: 'reg', component: reg },
		{ path: '/login', name: 'login', component: login },
		{ path: '/cart', name: 'cart', component: cart },
		{ path: '/speak', name: 'speak', component: speak },
		{ path: '/we', name: 'we', component: we },
		{ path: '/', redirect: '/home' },
		{ path: '*', component: error }
	]
})
