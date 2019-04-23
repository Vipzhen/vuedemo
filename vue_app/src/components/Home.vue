<template>
    <div class="ios">
        <!-- 顶部导航 -->
        <header-nav></header-nav>
        <div class="screen">
            <div class="main-banner" id="custom-swiper" style="overflow:hidden;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;"><img src="http://127.0.0.1:3000/img/bg_1.jpg"></a>
                    </div>
                </div>
            </div>
            <div class="index-link-list">
                <a href="javascript:;" class="item-1">
                    <span>CLASSICS 经典鞋</span>
                </a>
                <a href="javascript:;" class="item-2">
                    <span>PRO SKATE 职业鞋款</span>
                </a>
                <a href="javascript:;" class="item-3">
                    <span>CUSTOMS 自由定制鞋</span>
                </a>
            </div>
            <div class="buy-article">
                <div class="w-article">
                    <ul>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_2.jpg">
                                <span class="title">COMFYCUSH舒舒服服系列</span>
                                <span class="buy-btn">立即选购</span>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_3.jpg">
                                <span class="title">VANS X YUSUKE HANAI 联名系列</span>
                                <span class="buy-btn">立即选购</span>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_4.jpg">
                                <span class="title">撞色棋盘格系列</span>
                                <span class="buy-btn">立即选购</span>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_5.jpg">
                                <span class="title">撞色棋盘格系列</span>
                                <span class="buy-btn">立即选购</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="new-article">
                <div class="w-article">
                    <h3 class="title">最新活动</h3>
                    <ul>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_6.jpg">
                                <span class="title">3月30日，“滑板先锋”- GET ON BOARD 女子滑板专属活动登陆上海！</span>
                                <p class="briefing">开启“滑板先锋”之旅</p>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_7.jpg">
                                <span class="title">VANS全球范围开启“THIS IS OFF THE WALL”新篇章</span>
                                <p class="briefing">深度探索现代“滑板先锋”</p>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_8.jpg">
                                <span class="title">VANS BERLE PRO 鞋测活动回顾</span>
                                <p class="briefing">全新职业签名鞋款BERLE PRO 已于2月9日发售</p>
                            </a>
                        </li>
                        <li class="article-item">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3000/img/bg_9.jpg">
                                <span class="title">VANS 出品全新冲浪剧集 WEIRD WAVES</span>
                                <p class="briefing">从米苏拉到慕尼黑，和最不按常理出牌的冲浪怪杰们体验奇妙旅途，DYLAN GRAVES 带你领略冲浪冒险风采</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer-nav></footer-nav>
        <div class="bottom-fixed">
            <ul class="fixed-ul">
                <li class="item-1">
                    <a href="javascript:;">
                        <i class="mui-icon mui-icon-more"></i>
                        <span>新品上市</span>
                    </a>
                </li>
                <li class="item-2">
                    <a href="javascript:;">
                        <i class="mui-icon mui-icon-flag"></i>
                        <span>最新活动</span>
                    </a>
                </li>
                <li class="item-3">
                    <a href="javascript:;">
                        <i class="mui-icon mui-icon-contact"></i>
                        <span>我的账户</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerNav from './header.vue'
import footerNav from './footer.vue'
export default {
    data(){
        return{}
    },
    components:{
        headerNav,
        footerNav
    },
}
</script>

<style>
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

   

   .screen{
        margin: 0px auto;
        max-width: 640px;
        min-width: 320px;
        overflow: hidden;
        background: #f1f4ed;
    }

    .main-banner {
        width: 100%;
        position: relative;
    }

    .main-banner .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .main-banner .swiper-slide a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .main-banner .swiper-slide a img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .index-link-list{
        background: #fff;
    }

    .index-link-list a{
        display: block;
        line-height: 3rem;
        border-bottom: 2px solid #ccc;
        font-size: 1rem;
        font-weight: bold;
        color: #000;
    }

    .buy-article .article-item{
        background: white;
        padding-bottom: 1.1rem;
    }

    .w-article .article-item a{
        display: block;
        text-align: center;
    }

    .w-article img {
        display: block;
        width: 100%;
    }

    .w-article .article-item span.title {
        display: block;
        font-size: 1.2rem;
        line-height: 2rem;
        font-weight: bold;
        color: black;
        padding: .98rem 0;
    }

    .w-article .article-item .buy-btn {
        width: 10.5rem;
        height: 2.7rem;
        line-height: 2.6rem;
        border: 1px solid #000;
        text-align: center;
        display: inline-block;
        font-size: 1rem;
        font-weight: bold;
        margin-top: .5rem;
        color: #000;
    }

    .w-article h3.title {
        text-align: center;
        padding: 1.9rem 0;
        font-size: 1.76rem;
        color: #000;
        letter-spacing: 2px;
    }

    .new-article .w-article ul {
        padding: .05rem;
    }

    .new-article .w-article .article-item a {
        padding-bottom: .12rem;
        border: 1px solid transparent;
    }

    .w-article img {
        display: block;
        width: 100%;
    }

    .w-article .article-item .briefing {
        font-size: 0.95rem;
        line-height: 1.6;
        padding: .15rem .6rem;
        color:#000;
    }
    

    .bottom-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3rem;
        background: #fff;
        z-index: 9999;
        box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
        -ms-box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
    }

    .fixed-ul {
        display: box;
        display: -webkit-box;
        display: -ms-box;
    }   

    .fixed-ul li {
        box-flex: 1;
        -webkit-box-flex: 1;
        -ms-box-flex: 1;
        text-align: center;
    }

    .fixed-ul li a {
        display: block;
        color: #000;
    }

    .fixed-ul li a i {
        display: block;
        margin: .9rem 2.9rem 13px;
        width: 1.3rem;
        height: .25rem;
        line-height: .25rem;
        font-size: 2.0rem;
    }

    .fixed-ul li a span{
        font-size:.9rem;
    }
</style>