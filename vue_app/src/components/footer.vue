<template>
    <div class="full-screen">
        <div class="home-nav-down">
            <ul>
                <li>
                    <div class="maxitem" id="maxget">获取帮助</div>
                </li>
                <li>
                    <div class="maxitem" id="maxcontact">联系我们</div>
                </li>
            </ul>
        </div>
        <div class="bottom-qr">
            <div class="maxtitle">
                <h3>在这些地方找到我们</h3>
            </div>
            <div class="qr-code">
                <p>
                    长按二维码关注微信公众号：
                    <br>
                    VansChina
                    <br>
                    率先了解产品、滑板、艺术、音乐及
                    <br>
                    街头文化等活动的最新消息！
                </p>
                <div class="qr-code-img">
                    <img src="http://127.0.0.1:3000/img/bigtwo.jpg">
                </div>
            </div>
        </div>
        <div class="maxplaces">
            <div class="ad-shopmax-group clearfix" id="ad_shopmax_group_117">
                <ul class="clearfix">
                    <li class="item item-1">
                        <a href="#">
                            <img class="lazy" src="http://127.0.0.1:3000/img/weixin.png">
                            <div class="maxpice"></div>
                        </a>
                    </li>
                    <li class="item item-2">
                        <a href="javascript:;">
                            <img class="lazy" src="http://127.0.0.1:3000/img/weibo.png">
                            <div class="maxpice"></div>
                        </a>
                    </li>
                    <li class="item item-3">
                        <a href="javascript:;">
                            <img class="lazy" src="http://127.0.0.1:3000/img/maxn.png">
                            <div class="maxpice"></div>
                        </a>
                    </li>
                    <li class="item item-4">
                        <a href="javascript:;">
                            <img class="lazy" src="http://127.0.0.1:3000/img/bofang.png">
                            <div class="maxpice"></div>
                        </a>
                    </li>
                    <li class="item item-5">
                        <a href="javascript:;">
                            <img class="lazy" src="http://127.0.0.1:3000/img/ins.png">
                            <div class="maxpice"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="maxcity" id="maxcity">
            <div class="country">
                <div class="title">
                    <span>中国</span>
                </div>
                <div class="country-list" id="country-list"></div>
            </div>
        </div>
        <div class="maxminimum">
            <div class="maxlogin1">
                <img src="http://127.0.0.1:3000/img/maxlogo1.png">
                <p>
                    <a href="javascript:;">苏ICP备13010219号</a>
                        工信部网站
                    <br>
                    <a href="javascript:;">威富服饰(中国)有限公司</a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
</style>