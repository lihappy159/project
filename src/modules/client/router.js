import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "./login/mine"
import Myform from "./login/Myform"
import Myabout from "./login/Myabout"
import Space from "./login/Space"


Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component: Login

    },{
        path: '/form',

        component:Myform
    },{
        path: '/about',

        component:Myabout
    },{
        path: '/space',

        component:Space
    },


];

export default new VueRouter({
    routes: routes,
    mode:"history"
})