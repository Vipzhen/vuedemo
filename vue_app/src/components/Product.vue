<template>
    <div class="ios">
        <header-nav></header-nav>
        <div class="maxpathbox">
            <div class="maxpath">
                <dl>
                    <dd class="beb-current">
                        <span style="color: #64686b;font-family: 'Franklin-Demi','冬青黑体','microsoft yahei';font-weight: 600;margin: 0 .1rem;" class="beb-current">全部男子</span>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="full-screen">
            <ul class="pt-list">
                <li class="pt-h-item" v-for="item of list">
                    <router-link href="#" class="pt-h-link" :to="'/prdlist?pid='+item.pid">
                        <img :src="item.img_url" class="pt-h-img">
                    </router-link>
                    <div class="pt-h-info">
                        <div class="pt-h-name">
                            {{item.title}}
                        </div>
                        <div class="pt-h-price">
                            <ins>¥ {{item.price}}</ins>
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
        <!--加载更多按钮-->
        <el-button style="padding:12px 100px;" type="primary" @click="loadMore">加载更多</el-button>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import headerNav from './header.vue'
import footerNav from './footer.vue'

export default {
    data(){
        return{
            list:[],
            pno:0
        }
    },
    created(){
        //this.prdlist();
        this.loadMore();
    },
    components:{
        headerNav,
        footerNav
    },
    methods:{
        prdlist(){
            var url="http://127.0.0.1:3000/getPrd";
            this.axios.get(url).then(result=>{
                console.log(result.data);
                this.list=result.data;
            })
        },
        gotoIndex(){
            this.$router.push("/Home")
        },
        gotologin(){
            this.$router.push('/Login')
        },
        loadMore(){
            //获取当前页码
            this.pno++;
            //创建变量url请求地址
            var url="http://127.0.0.1:3000/prdPno?pno="+this.pno;
            //发送ajax请求
            this.axios.get(url).then(result=>{
                //3:获取服务器返回结果保存data
                //this.list = result.data.data;
                //3:获取服务器返回结果 追加list
                //使用 concat 拼接数组
                //console.log(result.data.data);
                var rows=this.list.concat(result.data.data);
                this.list=rows;
            })
        }
    }
}
</script>

<style>
    .maxpathbox {
        overflow: hidden;
        padding: 50px 13px 0;
        background: #f1f4ed;
    }   

    .maxpathbox .maxpath {
        width: 100%;
        font-size: 1.5rem;
        overflow: hidden;
        font-weight: bold;
        font-family: "Franklin-Demi","Heiti SC","microsoft yahei";
        letter-spacing: 2px;
        text-align: center;
        padding: .15rem 0 2.5rem;
    }

    .maxpath .beb-current {
        display: block;
        text-align: center;
        font-size: 1.5rem;
        color: #000!important;
    }


    .full-screen .pt-list {
        min-height: 2rem;
        margin-top: .15rem;
    }

    .pt-list .pt-h-item {
        width: 49.4%;
        float: left;
        padding: 0;
        height: 18.58rem;
    }

    .pt-list .pt-h-link {
        display: block;
    }

    .pt-list .pt-h-img{
        max-width: 95%;
        max-height: 100%;
    }

    .pt-list .pt-h-info {
        margin-left: 0;
        text-align: center;
        margin-top: .1rem;
    }

    .pt-list .pt-h-name {
        font-size: .8rem;
        font-weight:bold;
        text-align: center;
        height: 1.65rem;
        font-family: "Franklin-Demi","Heiti SC","microsoft yahei";
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        overflow: hidden;
        display: box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: normal;
        color: #000;
    }

    .pt-list .pt-h-price {
        text-align: center;
        height: auto;
        line-height: 3.2;
    }

    .pt-list .pt-h-price ins {
        text-decoration: none;
        font-size: .92rem;
        font-weight: bold;
        color: #000;
    }
</style>