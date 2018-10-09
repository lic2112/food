import axios from 'axios';
import store from '@/store';
import qs from 'qs';

// 设置默认请求头
// axios.defaults.headers = {
//     'Content-Type': 'application/json'
// }
//全局配置携带跨源凭证
axios.defaults.withCredentials=true;
// request 封装请求头拦截器
axios.interceptors.request.use(config => {
    // let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
    // if (token != '') {
    //     config.headers.token = token;
    // }
    store.dispatch('showLoading');
    return config;
}, error => {
    console.log(error);
});

// http response 封装后台返回拦截器
axios.interceptors.response.use(response => {
    // 当返回信息为未登录或者登录失效的时候重定向为登录页面
    // if (response.data.code == '401') {
    //     // Message.error('请重新登录');
    //     Message({
    //         message: '请重新登录',
    //         type: 'error'
    //     })
    //     router.push({
    //         path: "/login"
    //     });
    // }
    store.dispatch('hideLoading');
    return response;
});

export default {
    get(url) {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url
            }).then((res) => {
                resolve(res.data);
            }).catch(e => {
                reject(e);
            });
        });
    },

    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: qs.stringify(param)
            }).then(res => {
                resolve(res.data);
            }).catch(e => {
                reject(e);
            });
        })
    }
}
