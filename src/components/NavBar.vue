<template>
  <div id="nav">
    <el-row>
      <el-col :span="24">2020-12-22 12:20:07</el-col>
      <el-col :span="24">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">天气预报综合展示系统</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#"
                ><router-link to="/Login">首页</router-link></b-nav-item
              >
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>{{ username }}</em>
                </template>
                <template v-if="!islogin">
                  <b-dropdown-item href="#"
                    ><router-link to="/Login"
                      >登陆</router-link
                    ></b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    ><router-link to="/Register"
                      >注册</router-link
                    ></b-dropdown-item
                  >
                </template>
                <b-dropdown-item v-else @click="logout">注销</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    username: function () {
      return this.$store.state.username;
    },
    islogin:function(){
      return this.$store.state.islogin;
    }
  },
  methods: {
    logout() {
      this.get("/User/logout", (res) => {
        if (res.success) {
          this.$store.commit("setUsername", "未登录");
          this.$store.commit("setIslogin", res.islogin);
        }
      });
    },
  },
};
</script>

<style>
</style>