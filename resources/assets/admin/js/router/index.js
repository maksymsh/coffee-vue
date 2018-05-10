import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const routes = [
    {
        path: '/admin',
        name: 'Dashboard',
        component: resolve => require(['../pages/Dashboard'], resolve),
    },
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['../pages/Login'], resolve),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
