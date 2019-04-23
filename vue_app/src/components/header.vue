<template>
    <div class="maxheader" style="border-bottom:1px solid #ddd">
        <div class="home-nav">
            <div class="ad-pic">
                <a><img src="http://127.0.0.1:3000/img/vans-logo.png" @click="gotoindex"></a>
            </div>               
            <a href="#popover" class="item mui-icon mui-icon-bars" id="openPopover"></a>
            <a href="javascript:;" class="mui-icon-extra mui-icon-extra-cart" @click="gotologin"></a>
            <a href="javascript:;" class="item mui-icon mui-icon-location"></a>
            <a href="javascript:;" class="item mui-icon mui-icon-search" id="search_btn"></a>
        </div>
        <div id="popover" class="mui-popover" >
            <ul class="mui-table-view" style="position:fixed;top:66px;width:20rem;margin-left:-1.4rem;">
                <li class="mui-table-view-cell"><a  href="#">关于vans</a></li>
                <li class="mui-table-view-cell"><a href="#">热门</a></li>
                <li class="mui-table-view-cell mui-collapse">
                    <a href="#" class="mui-navigate-right">男子</a>
                    <div class="mui-collapse-content">
                        <p @click="gotoPrd">全部男子</p>
                        <p>鞋款</p>
                        <p>服装</p>
                        <p>配件</p>
                    </div>
                </li>
                <li class="mui-table-view-cell"><a href="#">女子</a></li>
                <li class="mui-table-view-cell"><a href="#">customs定制鞋</a></li>
                <li class="mui-table-view-cell"><a href="#" @click="gotoshopcart">登录/注册</a></li>
            </ul>
        </div>
        <div id="gotop">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        gotoPrd(){
            this.$router.push('/Product')
        },
        gotologin(){
            this.$router.push('/Shopcart')
        },
        gotoindex(){
            this.$router.push('/Home')
        },
        gotoshopcart(){
            this.$router.push('/Shopcart')
        }
    }
}
</script>

<style scoped>
    .maxheader{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        max-width: 640px;
        min-width: 320px;
        margin: auto;
        z-index: 101;
    }
    .home-nav{
        display: -webkit-box;
        width: 100%;
        height: 4rem;
        background-color: #fff;
        z-index: 12;
        position: relative;
    }

   .ad-pic a{
        text-align: center;
        line-height: .52rem;
        height: .52rem
    }

   .ad-pic a img{
       margin:1rem 3rem 0 1rem; 
       width:6.2rem;
    }

   .home-nav .item{
        line-height: 3.95rem;
        color: black;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        border-left: .01rem solid #d8d9d4;
        padding:0 .9rem;
        position: relative;
    }
    #gotop{
        width: 3.34rem;
        height: 13.34rem;
        display: block;
        position: fixed;
        bottom: .8rem;
        right: 0rem;
        cursor: pointer;
        z-index: 10000;
        background: url("http://127.0.0.1:3000/img/gotop.png") no-repeat center center;
        background-size: 2.7rem auto;
    }
</style>