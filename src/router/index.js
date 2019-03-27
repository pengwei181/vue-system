import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const home = ()=>import('@/views/home');
const login = ()=>import('@/views/login');
const error404 = ()=>import('@/views/404');
const contentMain = ()=>import('@/views/contentMain');
const abc = ()=>import('@/views/abc');


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/contentMain'
        },
        {
            path: '/',
            name: 'home',
            component: home,
            children:[
                {
                    path:'/contentMain',
                    component:contentMain
                },
                {
                    path:'/abc',
                    component:abc
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component:login
        },
        {
            path: '/404',
            name:'404',
            component:error404
        },
        {
            path: '*',
            redirect:'/404'
        }

    ]
})
