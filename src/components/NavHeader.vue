<template>
    <div class="headerbox clearfix">
        <i class="el-icon-menu fl" @click="collapseChage"></i>
        <div class="headerlogo fl"><span>后台管理系统</span></div>
        <el-dropdown class="headername fr">
            <span class="el-dropdown-link">admin<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的信息</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="headerimg fr"><img src="./../assets/image/user.png"/></div>
    </div>
</template>

<script>
    import eventBus from '../utils/eventBus'
    export default {
        name: "NavHeader",
        data(){
            return{
                collapse:false
            }
        },
        methods:{
            //侧边栏折叠
            collapseChage(){
                this.collapse=!this.collapse;
                eventBus.$emit('collapse',this.collapse)
            }
        },
        mounted(){
            //判断屏幕小于1500时收缩侧边栏
            if(document.body.clientWidth<1500){
                this.collapseChage();

            }
        }
    }
</script>

<style scoped>
    .headerbox{
        height: 70px;
        background-color: #242f42;
        color: white;;
        overflow: hidden;
    }
    .headerlogo{
        height: 50px;
        display: flex;
        vertical-align: middle;
        margin-top: 10px;
    }
    .el-icon-menu{
        height: 70px;
        font-size: 26px;
        width: 70px;
        text-align: center;
        line-height: 70px;
        vertical-align: middle;
        cursor: pointer;
    }
    .el-icon-menu:hover{
        background-color: #283446;
    }
    .headerlogo span{
        font-size: 24px;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
    }
    .headername{
        color: #fff;
        margin: 25px 50px 0px 10px;
    }
    .headerimg{
        margin-top: 15px;
    }
    .headerimg img{
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50%;
    }
</style>
