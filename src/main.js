//vue相关的插件
import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//第三方插件
import BaiduMap from "vue-baidu-map"

//css
import 'vant/lib/index.css';
import "./assets/css/base.css"
import 'element-ui/lib/theme-chalk/index.css';

//方法
import  {http,wxhttp} from './network/request';

//第三方ui组件库
import Button from 'vant/lib/button';
import { DatetimePicker,Grid, GridItem,Image } from 'vant';
import Bus from "./bus"
import {
    Form,FormItem,Input,Card,
    DatePicker, Select, Option,InfiniteScroll
} from "element-ui"


Vue.use(Form).use(FormItem).use(Input).use(Image).use(InfiniteScroll)
    .use(Button).use(Input).use(DatePicker).use(Select)
    .use(Option).use(DatetimePicker).use(Card).use(Grid).use(GridItem);



Vue.prototype.$bus = Bus;
Vue.prototype.$http = http;
Vue.prototype.$wxhttp = wxhttp;
Vue.config.productionTip = false;

Vue.use(BaiduMap, {
    ak: '33ERrnEGFisQYNLFLfhTAvFbz0kj2sOM'
});



new Vue({
    render: h => h(App),
    router
}).$mount('#app');

























