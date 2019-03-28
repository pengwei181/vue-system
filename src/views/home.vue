<template>
    <div class="home">
        <nav-header></nav-header>
        <nav-menu></nav-menu>
        <div class="homeMain" :class="{'homeMaincollapse':collapse}">
            <bread></bread>
            <div class="homeMainbox">
                <transition name="fade" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavMenu from './../components/NavMenu'
    import bread from '../components/Bread'
    import evenBus from '../utils/eventBus'
    export default {
        name: "home",
        data(){
            return{
                collapse:false,
                tagsList:[]
            }
        },
        created(){
            //根据侧边栏响应content
            evenBus.$on('collapse',val=>this.collapse=val);
            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            evenBus.$on('tags', msg => {
              let arr = [];
              for(let i = 0, len = msg.length; i < len; i ++){
                msg[i].name && arr.push(msg[i].name);
              }
              this.tagsList = arr;
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components:{
            NavHeader,NavMenu,bread
        }
    }
</script>

<style scoped>
    .homeMain{
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
    }
    .homeMainbox{
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
        box-sizing: border-box;
    }
    .homeMaincollapse{
        left: 65px;
    }


</style>
