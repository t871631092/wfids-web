<template>
  <div style="width: 100%; height: 100%" class="login-bg" ref="id">
    <el-row justify="center" align="middle" type="flex" style="height: 100%">
      <el-col :xs="18" :sm="12" :md="8" :lg="8" :xl="8">
        <el-card :body-style="{ padding: '0px' }" style="min-width: 350px">
          <div slot="header" class="tk-header clearfix">
            <h3>天气预报综合展示系统</h3>
            <h5>Weather Forcast Integrated Display System</h5>
          </div>
          <div style="padding: 14px; padding-top: 50px">
            <el-form
              ref="form"
              :rules="rules"
              :model="form"
              label-width="60px"
              :hide-required-asterisk="true"
              @keyup.enter.native="onSubmit"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label-width="0px" style="padding-top: 20px">
                <el-button type="primary" style="width: 100%" @click="login"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item label-width="0px" size="mini">
                <div style="font-size: 8px; text-align: center">
                  <router-link to="/Index">返回</router-link>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        vcode: "",
      },
      url: "/Home/User/verify_img",
      nurl: "/Home/User/verify_img_new",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        vcode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      codeShow: false,
      code: 0,
    };
  },
  computed: {
    canlogin() {
      return !(this.form.username != "" && this.form.password != "");
    },
  },
  methods: {
    onSubmit() {},
    login() {
      this.post(
        "/User/login",
        { username: this.form.username, password: this.form.password },
        (res) => {
          console.log(res);
          if (res.success) {
            this.$store.commit("setUsername", res.username);
            this.$store.commit("setIslogin", res.islogin);
            this.$router.push({ path: "Index" });
          } else {
            alert(res.msg);
          }
        }
      );
    },
  },
};
</script>

<style>
.el-card {
  border-radius: 0px;
  border: 0px solid #ebeef5;
}
.el-card__header {
  background-color: rgba(0, 255, 255, 0.2);
  color: white;
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;
}
.login-bg {
  background: linear-gradient(
    -45deg,
    #f186657c,
    #e7428152,
    #23a5d588,
    #23d5ab86
  );
  background-size: 300% 300%;
  animation: gradientBG 30s ease infinite;
}
.el-card__body {
  background-color: rgb(255, 255, 255);
}
.el-card {
  background-color: rgba(0, 0, 0, 0.2);
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>