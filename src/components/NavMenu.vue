<template>
    <div class="NavMenu">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" active-text-color="#20a0ff" background-color="#324157" text-color="#fff" unique-opened>
            <el-menu-item index="1">
                <i class="el-icon-setting"></i>
                <span slot="title">系统首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">基础表格</span>
                </template>
                <el-menu-item index="2-1">选项3</el-menu-item>
                <el-menu-item index="2-2">选项3</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">你的位置</span>
                </template>
                <el-menu-item index="3-1">选项3</el-menu-item>
                <el-menu-item index="3-2">选项3</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-menu-item index="3-4">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span slot="title">系统设置</span>
                </template>
                <el-menu-item index="4-1">选项3</el-menu-item>
                <el-menu-item index="4-2">选项3</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
                <el-menu-item index="4-4">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <i class="el-icon-upload"></i>
              <span slot="title">为服务</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  import eventBus from '../utils/eventBus'
  import axios from 'axios'
    export default {
        name: "NavMenu",
        data(){
            return{
                isCollapse: false,
                menuData:[]
            }
        },
        created(){
            //收缩侧边栏
            eventBus.$on('collapse',val=>this.isCollapse=val);
            axios.get('/menu').then((response)=>{
                if(response.data.status==0){
                    this.menuData=response.data.result;
                }
            });


        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                console.log(this.$router.options.routes)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .NavMenu{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .NavMenu::-webkit-scrollbar{
        width: 0;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse){
        width: 250px;
    }
    .NavMenu > ul {
        height:100%;
    }
</style>
