// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/commn/axios'
import { setCookie, getCookie, delCookie } from '@/commn/cookie'

// 定义常量
// api访问路径
let BACK_URL = 'http://127.0.0.1:8081'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}
Vue.prototype.getApi = function (url) {
  let apiurl = BACK_URL
  if (url.substr(0, 1) !== '/') {
    apiurl += '/'
  }
  apiurl += url
  return apiurl
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
