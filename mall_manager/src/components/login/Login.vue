<!--
 * @Author: your name
 * @Date: 2022-01-04 17:42:21
 * @LastEditTime: 2022-01-05 15:10:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/mall_manager/mall_manager/src/components/Login.vue
-->
<template>
  <div class="login-wrap">
    <el-form class="login-form" :label-position="labelPosition">
      <h2>用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="formdata.password"
          type="password"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-button class="login-btn" @click.prevent="handleLogin">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelPosition: "right",
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      // console.log(this.prototype);
      if (this.formdata.username == "" || this.formdata.password == "") {
        this.open1();
      } else {
        this.$http.post("login", this.formdata).then((res) => {
          // 登陆状态
          console.log(res);
          const {
            data,
            meta: { msg, status },
          } = res.data;

          if (status == "200") {
            // 登陆成功跳转
            this.open2();
            this.$router.push({ name: "home" });
          } else if (status == "400") {
            this.open3();
            this.$router.push({ name: "login" }).catch((error) => {
              if (error.name != "NavigationDuplicated") {
                throw error;
              }
            });
          }
        });
      }
    },
    open1() {
      this.$message({
        message: "用户名或密码不能为空",
        type: "warning",
      });
    },
    open2() {
      this.$message({
        message: "登陆成功",
        type: "success",
      });
    },
    open3() {
      this.$message({
        message: "用户名或者密码错误",
        type: "warning",
      });
    },
  },
};
</script>
  

<style scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
  /* display: block; */
  /* margin: 0 auto; */
  background-color: #fff;
  color: black;
}
.login-btn:hover {
  background-color: rgb(185, 224, 250);
}

h2 {
  text-align: center;
}
</style>