<template>
  <div class="common-header">
    <div class="menu-wrap">
      <el-menu :default-active="onRoutes" class="el-menu" mode="horizontal" :ellipsis="false" router>
      <!--:default-active="activeIndex"-->
        <el-menu-item
          v-for="item in menu"
          :index="item.path"
          :key="item.path"
        >
          <template v-slot:title>
            <span>{{ item.lable }}</span>
          </template>
        </el-menu-item>
        <div class="header-right">
          <!-- <div class="button-wrap">
            <el-button-group>
              <el-button @click="clickLogin()" type="primary">登录</el-button>
              <el-button @click="clickRegister()" type="primary"
                >注册</el-button
              >
            </el-button-group>
          </div> -->

          <div class="user-avator">
            <img src="../../file/img.jpg" />
          </div>
          <el-dropdown
            class="user-name"
            trigger="click"
            @command="handleCommand"
          >
            <div class="el-dropdown-link">
              <span>{{ userData.name }}</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- <div class="button-wrap">
            <el-button-group>
              <el-button @click="clickLogin()" type="primary">登录</el-button>
              <el-button @click="clickRegister()" type="primary"
                >注册</el-button
              >
            </el-button-group>
          </div> -->
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.common-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-wrap {
  flex-grow: 3;
}
.button-wrap {
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  margin-left: auto;
  padding-right: 20px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name {
  margin-left: 10px;
  /*vertical-align: middle;*/
}
.el-dropdown-link {
    color: #000;
    cursor: pointer;
    vertical-align: middle;
}
.header-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  margin-left: auto;
  padding-right: 20px;
}
</style>

<script>
//import router from '@/router';
//import { reactive } from '@vue/reactivity';
//import { useRouter } from "vue-router";
import { useRoute,useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const menu = [
      {
        path: "/wrap/home",
        name: "home",
        lable: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
      {
        path: "/wrap/balance",
        name: "balance",
        lable: "余额交易",
        icon: "video-play",
        url: "Balance/Balance",
      },
      {
        path: "/wrap/exchange",
        name: "exchange",
        lable: "好友交易",
        icon: "user",
        url: "Exchange/Exchange",
      },
    ];
    //const router = useRouter();
    const clickMenu = () => {
      // router.push({
      //   path: '/home/' + item.name,
      // });
    };
    const route = useRoute();
        const onRoutes = computed(() => {
            return route.path;
        });
    const store = useStore();
    const clickLogin = () => {
      store.commit("showLoginDialog");
    };
    const clickRegister = () => {
      store.commit("showRegisterDialog");
    };
    const userData = {
      name: "我是用户名",
      balance: 20,
    };
    const router = useRouter();
    const handleCommand = (command) => {
            if (command == "loginout") {
                localStorage.removeItem("ms_username");
                router.push("/login");
            }
    };
    return {
      menu,
      clickMenu,
      clickLogin,
      clickRegister,
      userData,
      onRoutes,
      handleCommand
    };
  },
};
// export default {
//   data() {
//     return {
//       menu: [
//         {
//           path: "/",
//           name: "home",
//           lable: "首页",
//           icon: "s-home",
//           url: "Home/Home",
//         },
//         {
//           path: "/balance",
//           name: "balance",
//           lable: "余额交易",
//           icon: "video-play",
//           url: "Balance/Balance",
//         },
//         {
//           path: "/exchange",
//           name: "exchange",
//           lable: "物物交易",
//           icon: "user",
//           url: "Exchange/Exchange",
//         },
//       ],
//     };
//   },
//   methods: {
//     clickMenu(item) {
//       this.$router.push({
//         name: item.name,
//       });
//     },
//     clickLogin() {
//       this.$router.push({
//         name: "login",
//       });
//     },
//   },
// };
</script>