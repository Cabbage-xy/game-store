<template>
  <el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-main>
      <router-view></router-view>
      <login-dialog></login-dialog>
      <register-dialog></register-dialog>
    </el-main>
  </el-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0;
  padding: 0;
}
.login {
  margin-right: 10;
  width: 100px;
}
.el-header {
  padding: 0 !important;
}
.el-main {
  padding: 0 !important;
}
</style>

<script>
import CommonHeader from "./components/CommonHeader.vue";
import LoginDialog from "./components/LoginDialog.vue";
import RegisterDialog from "./components/RegisterDialog.vue"

export default {
  components: {
    CommonHeader,
    LoginDialog,
    RegisterDialog
  },
};
</script>
