<template>
    <div class="ios">
        <!-- 顶部导航 -->
        <header-nav></header-nav>
        <div style="border:13px solid #000;"></div>
        <div class="cart-pt" v-for="(item,i) of cartlist">
            <div class="pt-item">
                <div class="mui-input-row mui-checkbox mui-left">
                    <label style="padding-left:28px;">
                        <input type="checkbox" name="checkbox" style="margin-left:-.6rem;">
                    </label>
                </div>
                <div class="pt-img">
                    <img :src="item.img_url">
                </div>
                <div class="maxinfor" style="width:8rem;">
                    <div class="pt-info">
                        <div class="pt-name">{{item.title}}</div>
                    </div>
                    <div class="pt-price">
                        <div class="col2">
                            <div class="col-price">
                                <span>￥{{item.price}}</span>
                            </div>
                            <div class="col-other">黑色/均码</div>
                        </div>
                    </div>
                    <div class="mui-content-padded">              
                        <div class="pt-del">
                            <a href="javascript:;" class="mui-icon mui-icon-trash" @click="removeitem" :data-id="item.pid" :data-idx="i"></a>
                        </div>
                    </div>
                   <!--<el-input-number @change="add" size="small" v-model="num6" :min="1"></el-input-number>-->
                    <button @click="sub(i)" style="margin:12px;">-</button>
                    <span class="but-cnt">{{item.count}}</span>
                    <button @click="add(i)" style="margin:12px;">+</button>
                    
                </div>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>    
</template>

<script>
import {Toast} from 'mint-ui'
import mui from "../lib/mui/js/mui.js"
import headerNav from './header.vue'
import footerNav from './footer.vue'
export default {
    data(){
        return{
            cartlist:[],
            //num6:1,
        }
    },
    components:{
        headerNav,
        footerNav
    },
    mounted(){
        // console.log(mui(".mui-numbox"))
        // mui(".mui-numbox").numbox();
    },
    created(){
        this.loadMore();
    },   
    methods:{
        loadMore(){
            var url="http://127.0.0.1:3000/cartList";
            this.axios.get(url).then(result=>{
                console.log(result)
                if(result.data.code==-1){
                    Toast("请登录");
                    setTimeout(()=>{
                        this.$router.push('/login')
                    },2000)
                    return;
                }else{
                    var rows=result.data.data;
                    for(var item of rows){
                        item.cb=false;
                    }
                    this.cartlist=rows;
                }
            })
        },
        add(i){
            //console.log(this.num6);
            this.cartlist[i].count++
        },
        sub(i){
            if(this.cartlist[i].count==1){
                return;
            }
            this.cartlist[i].count--   
        },
        removeitem(e){
            //获取商品id
            var id=e.target.dataset.id;
            var idx=e.target.dataset.idx;
            console.log(id);
            //创建url
            var url="http://127.0.0.1:3000/removeItem?id="+id;
            console.log(url)
            var postData=this.qs.stringify({id:id});
            //发送ajax请求
            this.axios.post(url,postData).then(result=>{
                if(result.data.code==1){
                    this.cartlist.splice(idx,1);
                    Toast("删除成功");
                }else{
                    Toast("删除失败");
                }
                this.loadMore();
            })
        },
        gotoproduct(){
            this.$router.push('/Product')
        },
    }
}
</script>

<style>
   .full-screen {
        max-width: 640px;
        min-width: 320px;
        overflow: hidden;
    }

    .home-nav-down {
        color: #fff;
        background-color: #1c1c1c;
    }
    
    .home-nav-down .maxitem {
        font-size: 1rem;
        line-height: 3.5rem;
        padding-left: .7rem;
        border-bottom: .01rem solid #64686b;
        background: url("http://127.0.0.1:3000/img/maxarrow1.png") no-repeat 22rem 50%;
        background-size: 1rem;
        font-weight: bold;
    }

    .bottom-qr {
        background: #1c1c1c;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        padding-top:1.8rem;
        padding-bottom: .15rem;
    }   

    .bottom-qr h3 {
        font-size: 1.1rem;
        padding: .1rem 0;
    }

    .bottom-qr .qr-code {
        width: 14rem;
        margin: 0 auto;
    }

    .bottom-qr .qr-code img {
        max-width: 100%;
    }

    .maxplaces {
        background-color: #1c1c1c;
        padding: 2.22rem 1rem;
    }

    .maxplaces .ad-shopmax-group {
        margin: auto;
        width: 16.9rem;
    }

    .maxplaces .ad-shopmax-group ul {
        display: box;
        display: -webkit-box;
        display: -ms-box;
    }

    .maxplaces .ad-shopmax-group li {
        display: block;
        margin-right: 0.7rem;
    }

    .maxplaces .ad-shopmax-group li a {
        display: block;
        width: 2.8rem;
        height: 2rem;
        background: #64686b;
        text-align: center;
    }

    .maxplaces .ad-shopmax-group li img {
        width: 95%;
        vertical-align: middle;
    }

    .maxcity {
        background-color: #1c1c1c;
        height:3rem;
    }

    .maxcity .country {
        position: relative;
        width: 3.41rem;
        margin: auto;
    }

    .maxcity .title {
        width: 15rem;
        line-height: 2.5rem;
        margin:-10px -6rem;
        text-align: center;
        color: #fff;
        background: #64686b url("http://127.0.0.1:3000/img/maxarrow3.png") no-repeat 9rem 50%;
        background-size: .8rem;
    }

    .maxcity span {
        line-height: .3rem;
        vertical-align: middle;
        font-size: .8rem;
        font-weight: bold;
    }
    .maxminimum {
        background-color: #1c1c1c;
        padding: 1.28rem 0rem 3rem;
    }

    .maxminimum .maxlogin1 {
        width: 18.8rem;
        
        margin: auto;
        overflow: hidden;
    }

    .maxminimum img {
        width: 5.8rem;
        float: left;
        padding-top: .5rem;
    }

    .maxminimum p {
        float: right;
        font-size: .8rem;
        color: #9fa0a0;
        line-height: 1.5rem;
    }

    .maxminimum p a {
        color: #559ac8 !important;
    }

    .cart-pt{
        background:#fff;
    }

    .pt-item{
        font-weight: bold;
        padding: 2.15rem 0 2.15rem 0;
        display: box;
        display: -webkit-box;
        display: -ms-box;
        border-top: .01rem solid #eee;
        -webkit-box-align: center;
        box-align: center;
        -ms-box-align: center;
    }

    .pt-img{
        width: 6.95rem;
        height: 6.95rem;
        float: none;
        border: 1px solid #f1f4ed
    }

    .pt-img img{
        max-width: 100%;
        max-height: 100%;
    }

    .pt-del{
        position: absolute;
        left: 11rem;
        top: 3rem;;
    }
    .but-cnt{
        display:inline-block;
        margin-top:18px;
    }
    </style>