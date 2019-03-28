import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const home = ()=>import('@/views/home');
const login = ()=>import('@/views/login');
const error404 = ()=>import('@/views/404');
const contentMain = ()=>import('@/views/contentMain');
const userControl = ()=>import('@/views/userControl');
const userEmail = ()=>import('@/views/userEmail');
const userName = ()=>import('@/views/userName');
const userPwd = ()=>import('@/views/userPwd');
const userok = ()=>import('@/views/userok');
const message = ()=>import('@/views/message');
const location = ()=>import('@/views/location');
const integral = ()=>import('@/views/integral');
const department = ()=>import('@/views/department');
const datatime = ()=>import('@/views/datatime');
const contentControl = ()=>import('@/views/contentControl');
const comment = ()=>import('@/views/comment');
const collect = ()=>import('@/views/collect');
const classify = ()=>import('@/views/classify');
const article = ()=>import('@/views/article');





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
                    component:contentMain,
                    meta:{title:"系统首页"}
                },
                {
                    path:'/userControl',
                    component:userControl,
                    meta:{title:"用户管理"}
                },
                {
                  path:'/userName',
                  component:userName,
                  meta:{title:"账号管理"}
                },
                {
                  path:'/userEmail',
                  component:userEmail,
                  meta:{title:"邮件管理"}
                },
                {
                  path:'/userPwd',
                  component:userPwd,
                  meta:{title:"密码管理"}
                },
                {
                  path:'/userok',
                  component:userok,
                  meta:{title:"权限管理"}
                },
                {
                  path:'/message',
                  component:message,
                  meta:{title:"消息管理"}
                },{
                  path:'/location',
                  component:location,
                meta:{title:"位置管理"}
                },
                {
                  path:'/integral',
                  component:integral,
                  meta:{title:"积分管理"}
                },
                {
                  path:'/department',
                  component:department,
                  meta:{title:"部门管理"}
                },
                {
                  path:'/datatime',
                  component:datatime,
                  meta:{title:"时间管理"}
                },
                {
                  path:'/contentControl',
                  component:contentControl,
                  meta:{title:"内容管理"}
                },
                {
                  path:'/comment',
                  component:comment,
                  meta:{title:"评论管理"}
                },
                {
                  path:'/collect',
                  component:collect,
                  meta:{title:"收藏管理"}
                },
                {
                  path:'/classify',
                  component:classify,
                  meta:{title:"分类管理"}
                },
                {
                  path:'/article',
                  component:article,
                  meta:{title:"文章管理"}
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
