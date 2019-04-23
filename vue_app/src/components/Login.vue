<template>
    <div class="ios">
        <!-- 顶部导航 -->
        <header-nav></header-nav>
        <div class="head-border"></div>
        <div class="full-screen">
            <div class="full-padding1">
                <div class="a-name">
                    <span class="active">用户名登录</span>
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>用户名</label>
                        <input type="text" class="mui-input-clear" placeholder="请输入用户名" name="uname" v-model="uname">
                    </div>
                    <div class="mui-input-row mui-password">
                        <label>密码</label>
                        <input type="password" class="mui-input-password" placeholder="请输入密码" name="upwd" v-model="upwd">
                        <span class="mui-icon"></span>
                    </div>
                    <div class="mui-button-row">
                        <button type="button" class="mui-btn mui-btn-primary" @click="login">登录</button>
                        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
                    </div>
                    <div class="c-g-c c-fix">
                        <a href="#" class="f-r lnk">忘记密码</a>
                    </div>
                </form>
                <div id="trust_signin" class="trust-signin"></div>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import headerNav from './header.vue'
import footerNav from './footer.vue'
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    components:{
        headerNav,
        footerNav
    },
    methods:{
        login(){
            //1.用户输入的用户名和密码
            var u=this.uname;
            var p=this.upwd;
            console.log("用户名"+u+"密码"+p)
            //2.创建正则表达式验证用户名和密码格式是否正确
            var reg=/^[a-z0-9_]{3,8}$/i;
            if(!reg.test(u)){
                //提示信息不是alert()
                Toast("用户名格式不正确,请检查");
                return;
            }
            if(!reg.test(p)){
                Toast("密码格式不正确,请检查");
                return;
            }
            //3.发送ajax
            console.log(3);
            var url="http://127.0.0.1:3000/login?uname="+u+"&upwd="+p;
            this.axios.get(url).then(result=>{
                console.log(result.data)
                if(result.data.code==1){
                        Toast("登录成功")
                        this.$router.push("/home")
                    }else{
                        Toast("用户名或密码错误")
                    }
            
            });
                //4.获取服务器返回结果
                //5.提示用户
        }
    }
}
</script>

<style>
    .head-border{
        border:13px solid #000;
    }

    .full-padding1 {
        background: #fff;
        width: 93%;
        margin: 1rem auto .5rem;
        border: .05rem solid #d8d8d6;
        padding: 0;
    }

    .full-screen .a-name {
        text-align: center;
        font-size: 1rem;
        line-height: 1rem;
        padding: 1rem 0;
        color: #c9192e;
        font-weight: bold;
    }

    form .c-g-c {
        height: 1.3rem;
        line-height: 1.3rem;
        padding: 0;
        margin: .05rem 1rem .08rem;
        font-size:.12rem;
    }
    
    form .c-g-c a {
        color: #d7d8d4;
        font-weight: bold;
        font-size: .11rem;
        float:right;
    }    
</style>