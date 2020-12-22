import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    username:"未登录"
  },
  mutations: {
    setUsername(n,g){
      this.state.username=g;
    },
    setIslogin(is,g){
      this.state.islogin=g?true:false;
    }
  },
  actions: {
  },
  modules: {
  }
})
