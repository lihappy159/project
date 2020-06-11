import Vue from 'vue'
import Console from './Console.vue'
import router from './router'
import { Input } from "element-ui"
import Button from 'vant/lib/button';
import 'vant/lib/index.css';
import "assets/css/base.css"
import 'element-ui/lib/theme-chalk/index.css';
import  { http,wxhttp } from '@/network/request';


Vue.prototype.$wxhttp = wxhttp;
Vue.prototype.$http = http;

Vue.use(require('vue-wechat-title')).use(Input).use(Button);

new Vue({
    router,
    render: h => h(Console)
}).$mount('#console');