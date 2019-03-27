<template>
    <div class="login">
        <el-card shadow="always" class="loginbox">
            <h1 class="logintit">后台管理系统</h1>
            <div class="loginbody">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item  prop="userName">
                        <el-input type="text" v-model="ruleForm.userName" autocomplete="off" placeholder="usrename">
                            <template slot="prepend"><img class="loginimg" src="./../assets/image/username.png" /></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="userPwd">
                        <el-input type="password" v-model="ruleForm.userPwd" autocomplete="off" placeholder="password" @keyup.enter.native="submitForm('ruleForm')">
                            <template slot="prepend"><img class="loginimg" src="./../assets/image/pwd.png" /></template>
                        </el-input>
                    </el-form-item>
                    <!--<el-checkbox v-model="checked">记住密码</el-checkbox>-->
                    <el-form-item>
                        <el-button class="btn-width" type="primary" @click="submitForm('ruleForm')" :loading="false">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
  import storage from '../utils/storage'
  import axios from 'axios'
    export default {
        name: "login",
        data(){
            return {
                checked:true,
                ruleForm: {
                    userName: '',
                    userPwd: '',
                },
                rules: {
                  userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 5, max: 16, message: '用户名长度在 5 到 16 个字符', trigger: 'blur' }
                    ],
                  userPwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 5, max: 16, message: '密码长度在 5 到 16 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            //登录
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('/users/login',this.ruleForm).then((response)=>{
                            if(response.data.status=='0'){
                                this.$message.success("登录成功!");
                                storage.set('userName',response.data.result.userName);
                                this.$router.push({path:'/'});
                            }else{
                                this.$message.error(response.data.msg);
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login{
        position: fixed;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        background: url("./../assets/image/loginbg.jpg");
        background-size: 100%;
    }
    .loginbox{
        width: 450px;
        height: 340px;
        background-color: rgba(255,255,255,0.5);
        border: none;
    }
    .logintit{
        font-size: 26px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #fff;
    }
    .loginbody{
        margin-top: 15px;
        padding: 0px 50px;
        box-sizing: border-box;
    }
    .loginimg{
        width: 15px;
        display: block;

    }
    .btn-width{
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
    }
</style>
