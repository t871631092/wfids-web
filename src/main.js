/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/main.scss'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.post = function (url, data, success, option) {
  axios.post(url, JSON.stringify(data), option).then((res, error) => {
    if (res.status == 200) {
      success(res.data)
    } else {
      success({ success: 0, msg: '请求错误', data: res });
    }
  }).catch(err => {
    success({ success: 0, msg: '请求错误', data: err });
  })
}
Vue.prototype.get = function (url, success, option) {
  axios.get(url, option).then((res) => {
    if (res.status == 200) {
      success(res.data)
    } else {
      success({ success: 0, msg: '请求错误', data: res });
    }
  }).catch(err => {
    success({ success: 0, msg: '请求错误', data: err });
  })
}