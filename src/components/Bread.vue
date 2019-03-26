<template>
    <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "bread"
    }
</script>

<style scoped>
    .bread{
        position: relative;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
        box-sizing: border-box;
    }
    .el-breadcrumb{
        line-height: 30px;
    }
</style>
