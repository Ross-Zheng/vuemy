// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter); //挂载属性
//创建路由对象并配置路由规则
const router = new VueRouter({
    mode: 'history'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
