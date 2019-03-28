<template>
    <div class="NavMenu">
        <el-menu router :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" active-text-color="#20a0ff" background-color="#324157" text-color="#fff" unique-opened>
            <template v-for="item in menuData">
                <template v-if="item.childs==null">
                      <el-menu-item :index="item.value" :key="item.id">
                          <i :class="item.icon"></i>
                          <span slot="title">{{item.name}}</span>
                      </el-menu-item>
                </template>
                <template v-else>
                      <el-submenu :index="item.value" :key="item.id">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <el-menu-item v-for="items in item.childs" :index="items.value" :key="items.id">{{items.name}}</el-menu-item>
                      </el-submenu>
                </template>
            </template>
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
        computed:{
            onRoutes(){
                return this.$route.path.replace('','');
            }

        },
        methods: {
            handleOpen(key, keyPath) {
                /*console.log(key, keyPath);*/
                /*console.log(this.$router.options.routes)*/
            },
            handleClose(key, keyPath) {
                /*console.log(key, keyPath);*/
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
