<template>
  <div style="width: 100%; height: 100%" class="login-bg" ref="id">
    <el-row justify="center" align="middle" type="flex" style="height: 100%">
      <el-col :xs="18" :sm="12" :md="8" :lg="8" :xl="8">
        <el-card :body-style="{ padding: '0px' }" style="min-width: 350px">
          <div slot="header" class="tk-header clearfix">
            <h1>20a101</h1>
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
                <el-button
                  type="primary"
                  style="width: 100%"
                  :disabled="canlogin"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item label-width="0px" size="mini">
                <div style="font-size: 8px; text-align: center"></div>
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
  methods:{
      onSubmit() {},
  }
};
</script>

<style>
</style>