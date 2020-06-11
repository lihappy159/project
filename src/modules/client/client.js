import Vue from 'vue'
import Console from './Client.vue'
import router from './router'
import { Card } from "element-ui"
import "assets/css/base.css"
import 'element-ui/lib/theme-chalk/index.css';
import  { http,wxhttp } from '@/network/request';


Vue.prototype.$wxhttp = wxhttp;
Vue.prototype.$http = http;


Vue.use(require('vue-wechat-title')).use(Card);
const Bus = new Vue();
Vue.prototype.$bus = Bus;


new Vue({
    router,
    render: h => h(Console)
}).$mount('#client');