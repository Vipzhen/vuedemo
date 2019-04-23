// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'



import axios from 'axios'
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

//引入mint-ui 组件
//1:引入Header组件
import {Swipe,SwipeItem} from 'mint-ui' 
//2:注册Header组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

Vue.config.productionTip = false

// 导入 MUI 的样式表
import './lib/mui/css/mui.css'
import './lib/mui/js/mui.js'
import './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */
import qs from "qs";
Vue.prototype.qs=qs;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
