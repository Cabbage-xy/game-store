<template>
  <div class="common-layout">
    <el-card
      shadow="hover"
      class="user-card"
      style="width: 300px; height: 300px"
    >
      <div class="user-info">
        <img src="../../file/img.jpg" class="user-avator" alt />
        <div class="user-info-cont">
          <div class="user-info-name">{{ userData.name }}</div>
          <div class="user-info-balance">
            余额：
            <span>￥{{ userData.balance }}</span>
          </div>
        </div>
      </div>
      <el-button class="recharge" type="primary">充值</el-button>
    </el-card>
  </div>
</template>
<style scoped>
.common-layout {
  display: flex;
  size: 100%;
  justify-content: center;
}
.user-card {
  justify-content: center;
  margin: 30px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 20px;
}
.user-info-name {
  font-weight: 700;
}
.user-info-balance {
  margin: 5px;
  color: #bdbebd;
}
.recharge {
  margin: 10px;
}
</style>

<script>
export default {
  name: "HomeView",
  setup() {
    const userData = {
      name: "我是用户名",
      balance: "20",
    };
    return {
      userData,
    };
  },
};
</script>