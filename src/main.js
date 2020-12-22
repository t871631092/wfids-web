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

const baseUrl = "http://localhost:8081";

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
axios.defaults.withCredentials=true;
Vue.prototype.post = function (url, data, success, option) {
  axios.post(baseUrl + url, data, option).then((res, error) => {
    console.log(res)
    if (res.status == 200) {
      success(JSON.parse(res.data))
    } else {
      success({ success: 0, msg: '请求错误', data: res });
    }
  }).catch(err => {
    //success({ success: 0, msg: '请求错误', data: err });
  })
}
Vue.prototype.get = function (url, success, option) {
  axios.get(baseUrl + url, option).then((res) => {
    if (res.status == 200) {
      success(JSON.parse(res.data))
    } else {
      success({ success: 0, msg: '请求错误', data: res });
    }
  }).catch(err => {
    //success({ success: 0, msg: '请求错误', data: err });
  })
}
new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    this.get("/User/islogin", res => {
      console.log(res.username)
      this.$store.commit("setUsername",res.username);
      this.$store.commit("setIslogin",res.islogin);
    })
  }
}).$mount('#app')
