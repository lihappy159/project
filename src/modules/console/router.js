import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "./login/Login"

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        component: Login,
    }

];

export default new VueRouter({
    routes: routes,
    mode:"history"
})