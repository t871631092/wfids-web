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
              <b-nav-item href="#"
                ><router-link to="/Login">登陆</router-link></b-nav-item
              >
              <b-nav-item href="#"
                ><router-link to="/Register">注册</router-link></b-nav-item
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
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
};
</script>

<style>
</style>