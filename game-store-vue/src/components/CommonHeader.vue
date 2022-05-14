<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
  >
    <el-menu-item @click="clickMenu(item)" v-for="item in menu" :index="item.path" :key="item.path">
        <template v-slot:title>
          <span>{{item.lable}}</span>
        </template>
    </el-menu-item>
      
    <el-menu-item @click="clickLogin">
        <template v-slot:title>
          <span>登录</span>
        </template>
    </el-menu-item>
    
    
  </el-menu>
</template>
<style scoped>
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/balance",
          name: "balance",
          lable: "余额交易",
          icon: "video-play",
          url: "Balance/Balance",
        },
        {
          path: "/exchange",
          name: "exchange",
          lable: "物物交易",
          icon: "user",
          url: "Exchange/Exchange",
        },
      ],
    }
  },
  methods: {
    clickMenu(item) {
        this.$router.push({
            name: item.name
        })
    },
    clickLogin() {
      this.$router.push({
        name: "login"
      })
    }
  }
};
</script>