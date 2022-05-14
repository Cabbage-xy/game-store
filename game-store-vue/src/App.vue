<template>
  <el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
    <el-main>
      <router-view></router-view>
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
</style>

<script>
import CommonHeader from "./components/CommonHeader.vue";

export default {
  components: {
    CommonHeader,
  },
};
</script>
