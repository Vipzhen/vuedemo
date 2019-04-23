import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Prdlist from '@/components/Prdlist'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/Home',name:'Home',component:Home},
    {path:'/Login',name:'Login',component:Login},
    {path:'/Product',name:'Product',component:Product},
    {path:'/Prdlist',name:'Prdlist',component:Prdlist},
    {path:'/Shopcart',name:'Shopcart',component:Shopcart}
  ]
})
