<template>
    <div class="ios">
        <!-- 顶部导航 -->
        <header-nav></header-nav>
        <div class="buy" >
            <div>
                <h1 class="pt-name">
                    <span>{{prdlist.title}}</span>
                </h1>
                <div class="pt-price" style="box-sizing:border-box;">
                    <div class="price">
                        <b class="price">¥{{prdlist.price}}</b>
                    </div>
                </div>
            </div>
            <!--轮播图-->
            <mt-swipe :auto="2000">
                <mt-swipe-item class="img-banner" v-for="item of navlist" :key="item.id">
                    <img :src="item.img_url">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="product-Prompt">
            <span class="item-1">
                <i></i>
                <em>顺丰包邮</em>
            </span>
            <span class="item-2">
                <i></i>
                <em>15天无理由退换货</em>
            </span>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">评论列表</div>
            <div class="mui-card-content">
				<div class="mui-card-content-inner">
					<textarea maxlength="120" placeholder="请吐槽,最多120个字" v-model="msg"></textarea>
                    <el-button style="padding:12px 100px;" type="danger" @click="addComment">发表评论</el-button>
				</div>
			</div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="cmt-list">
                        <div class="cmt-item" v-for="(item,i) of comlist">
                            <div> 第{{i+1}}楼</div>
                            <div>评论内容:{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
        <hr style="height:8px;background:#fff;">
        <footer-nav></footer-nav>
        <form action="">
            <div class="pt-btn fixed-btn">
                <a href="#" class="mui-btn mui-btn-outlined" style="color:#fff;background:#000;padding:10px 50px;" @click="addcart">加入购物车</a>
                <a href="#" class="mui-btn mui-btn-danger mui-btn-outlined" style="color:#fff;background:#f00;padding:10px 50px;">立即购买</a>
            </div>
        </form>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import headerNav from './header.vue'
import footerNav from './footer.vue'
export default {
    data(){
        return{
            pid:this.$route.query.pid,
            navlist:[],
            prdlist:{},
            pno:0,
            msg:"",
            comlist:[]
        }
    },
    components:{
        headerNav,
        footerNav
    },
    created(){
        this.imglist();
        this.prd_list();
        this.loadMore();
    },
    methods:{
        //加载轮播图
        imglist(){
            var pid=this.pid;
            var url="http://127.0.0.1:3000/getList?pid="+pid;
            this.axios.get(url).then(result=>{
                //console.log(result.data)
                this.navlist=result.data;
            })
        },
        prd_list(){
            var pid=this.pid;
            var url="http://127.0.0.1:3000/getPrdByid?pid="+pid;
            this.axios.get(url).then(result=>{
                console.log(result.data);
                this.prdlist=result.data[0];
            })
        },
        addcart(){
            var pid=this.pid;
            var url="http://127.0.0.1:3000/addcart?pid="+pid;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    Toast("添加成功")
                }else{
                    Toast("请先登录")
                }
            })
        },
        gotoIndex(){
            this.$router.push('/Home')
        },
        gotoshopcart(){
            this.$router.push('/Shopcart')
        },
        addComment(){
            //console.log(this.msg);
            var nid=this.pid;
            var con=this.msg;
            console.log(nid+":"+con);
            //获取评论两端空格
            var size=con.trim().length;
            //如果评论为空提示判断
            if(size==0){
                Toast("评论不能为空");
                return;
            }
            var postData=this.qs.stringify({
                nid:nid,
                content:con
            })
            console.log(postData);
            //7.发送post请求/addcomment
            var url="http://127.0.0.1:3000/addComment";
            this.axios.post(url,postData).then(result=>{
                //获取返回的结果
                Toast("添加成功");
                this.msg="";
                //加载评论列表
                this.pno=0;
                this.comlist=[];
                this.loadMore();
            });
        },
        loadMore(){
            this.pno++;
            var ps=this.pageSize;
            //正则表达式验证
            var reg=/^[0-9]{1,}$/;
            if(!reg.test(this.pno)){
                Toast("页码格式不正确");
                return;
            }
            // 5.创建url 发送ajax请求
            var url="http://127.0.0.1:3000/getComment?nid="+this.pid+"&pno="+this.pno;
            //获取返回内容
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.comlist=result.data.data;
            })
        }
    }
}
</script>

<style>
    .buy .pt-name{
        font-size: 1.28rem;
        color: #000;
        padding: 2.32rem 13px 0;
        margin-top: .1rem;
        font-family: "Franklin-Demi","Heiti SC","microsoft yahei";
    }
    
    .buy .pt-price {
        border-bottom: 0;
        line-height: 30px;
        display: block;
        padding:15px 13px;
    }

    .buy .pt-price .price {
        color: #c8192e;
        font-size: 1.35rem;
        font-weight:700;
    }

    .img-banner{
        height:200px;
    }

    .img-banner img{
        width:100%;
    }

    .product-Prompt {
        margin: .2rem 13px 0;
        padding-bottom: .15rem;
    }

    .product-Prompt span.item-1 {
        border-right: .01rem dotted #dcddda;
    }

    .product-Prompt span {
        font-size: .135rem;
        font-weight: bold;
        text-align: center;
        width: 49%;
        display: inline-block;
        font-family: FRADMCN,"Heiti SC","microsoft yahei";
    }

    .product-Prompt span.item-1 i {
        background-position: 0rem bottom;
    }   

    .product-Prompt span i {
        width: 4rem;
        height: 3rem;
        margin: .08rem auto;
        display: block;
        background: url(http://127.0.0.1:3000/img/express.png) no-repeat center center;
        background-size: 4rem 3rem;
    }

    .product-Prompt span em {
        display: block;
        color: #000;
        font-size:16px;
    }

    .product-Prompt span.item-2 i {
        background: url(http://127.0.0.1:3000/img/return.png) no-repeat center center;
        background-size: 3.3rem;
    }

    .pt-detail {
        padding: 0 13px;
        margin: 0;
    }
    
    .pt-detail .panel-list {
        padding-top: .05rem;
        display:block;
    }

    .d-line {
        line-height: 20px;
        position: relative;
    }

    .pt-detail .panel-list .d-line img {
        width: 100%;
        margin-bottom: 10px;
        display: block;
    }

    .fixed-btn {
        position: fixed;
        left: 0rem;
        right: 0rem;
        bottom: 0rem;
        z-index: 10000;
        width: 100%;
        border-top: 0;
    }
</style>