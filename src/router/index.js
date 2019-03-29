import Vue from 'vue'
import Router from 'vue-router'
import storage from '../utils/storage'
Vue.use(Router);
const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/contentMain'
        },
        {
            path: '/',
            name: 'home',
            component: ()=>import('@/views/home'),
            children:[
                {
                    path:'/contentMain',
                    component:()=>import('@/views/contentMain'),
                    meta:{title:"系统首页"}
                },
                {
                    path:'/userControl',
                    meta:{title:"用户管理"}
                },
                {
                  path:'/userName',
                  component:()=>import('@/views/userName'),
                  meta:{title:"账号管理"}
                },
                {
                  path:'/userEmail',
                  component:()=>import('@/views/userEmail'),
                  meta:{title:"邮件管理"}
                },
                {
                  path:'/userPwd',
                  component:()=>import('@/views/userPwd'),
                  meta:{title:"密码管理"}
                },
                {
                  path:'/userok',
                  component:()=>import('@/views/userok'),
                  meta:{title:"权限管理"}
                },
                {
                  path:'/message',
                  component:()=>import('@/views/message'),
                  meta:{title:"消息管理"}
                },{
                  path:'/location',
                  component:()=>import('@/views/location'),
                meta:{title:"位置管理"}
                },
                {
                  path:'/integral',
                  component:()=>import('@/views/integral'),
                  meta:{title:"积分管理"}
                },
                {
                  path:'/department',
                  component:()=>import('@/views/department'),
                  meta:{title:"部门管理"}
                },
                {
                  path:'/datatime',
                  component:()=>import('@/views/datatime'),
                  meta:{title:"时间管理"}
                },
                {
                  path:'/contentControl',
                  meta:{title:"内容管理"}
                },
                {
                  path:'/comment',
                  component:()=>import('@/views/comment'),
                  meta:{title:"评论管理"}
                },
                {
                  path:'/collect',
                  component:()=>import('@/views/collect'),
                  meta:{title:"收藏管理"}
                },
                {
                  path:'/classify',
                  component:()=>import('@/views/classify'),
                  meta:{title:"分类管理"}
                },
                {
                  path:'/article',
                  component:()=>import('@/views/article'),
                  meta:{title:"文章管理"}
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component:()=>import('@/views/login')
        },
        {
            path: '/404',
            name:'404',
            component: ()=>import('@/views/404')
        },
        {
            path: '*',
            redirect:'/404'
        }

    ]
});
//使用钩子函数对路由进行权限跳转
router.beforeEach((to,from,next)=>{
    const userName=storage.get('userName');
    //判断用户没登陆跳回login，登录的不能跳回login
    if(!userName && to.path!=='/login'){
        next('/login');
    }else if(userName && to.path=='/login'){
        next('/')
    }else{
      next()
    }
});
export default router;
