import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import error404 from '@/views/404'
Vue.use(Router)

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
                    component:()=>import('@/views/contentMain')
                },
                {
                    path:'/abc',
                    component:()=>import('@/views/abc')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component:() => import('@/views/login')
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
