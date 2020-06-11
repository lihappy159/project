import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./../pages/home/Home"
import Check from "./../pages/check/Check"
import Zone from "../pages/zone/Zone"
import Date from "./../pages/date/Date"
import Seat from "./../pages/seat/Seat"
import Apply from "./../pages/apply/Apply"




Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        redirect:"/home",
    },
    {
        path: '/home',
        component: Home,
        meta:{
            title:"预约"
        }
    }, {
        path: '/home/check/:item',
        component: Check,
        meta:{
            title:"预约"
        }
    },
    {
        path: '/home/check/zone/:item',
        component: Zone,
        meta:{
            title:"预约"
        }
    },{
        path: '/home/check/date/:item',
        component: Date,
        meta:{
            title:"预约"
        }
    },{
        path: '/home/check/seat/:item',
        component: Seat,
        meta:{
            title:"预约"
        }
    },{
        path: '/home/check/apply/:item',
        component: Apply,
        meta:{
            title:"预约"
        }
    },
];



const router = new VueRouter({
    routes,
    // mode:"history"
});

//路由守卫   修改标题title
router.beforeEach((to,from,next)=>{
    // console.log(to);
    if(to.path == '/home' || to.path == "/home/"){
        document.title = "预约"
    }else {
        document.title = to.params.item;
    }
    next()
});

export default router



