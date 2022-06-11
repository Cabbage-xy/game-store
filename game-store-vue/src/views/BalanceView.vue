<template>
  <div class="common-layout">
    <div class="prop-list">
      <el-row
        v-for="cols in rows"
        :key="cols[0].name"
        :gutter="10"
        justify="center"
      >
        <el-col v-for="prop in cols" :key="prop.name" :span="5">
          <el-card :body-style="{ padding: '0px' }">
            <!-- <img :src="'../..' + prop.pic" class="image" /> -->
            <img :src="prop.pic" class="image" />
            <div style="padding: 14px">
              <span>{{ prop.name }}</span>
              <div class="bottom">
                <el-button text class="button">￥{{ prop.price }}</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>

.prop-list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.el-space {
  justify-content: center;
}
.el-col {
  padding: 10 !important;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  display: block;
}
</style>

<script>
import { computed } from '@vue/runtime-core';
// @ is an alias to /src

export default {
  name: "BalanceView",
  setup() {
    const propListData = [
      {
        name: "第1个",
        price: "100",
        pic: require("../assets/logo.png"),
      },
      {
        name: "第2个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第3个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第4个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第5个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第6个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第7个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第8个",
        price: "100",
        pic: "/file/img.jpg",
      },
      {
        name: "第9个",
        price: "100",
        pic: "/file/img.jpg",
      },
    ];
    const rows = computed(() => getRow(propListData));
    // onMounted(() => {
    //   rows = getRow(propListData);
    // })
    
    const getRow = (list) => {
      let arr = [];
      let row = Math.ceil(list.length / 4);
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        let modLast = list.length % 4 === 0 ? 4 : list.length % 4;
        let lastRow = i === (row - 1) ? modLast : 4;
        for (let j = 0; j < lastRow; j++) {
          arr[i][j] = list[4 * i + j];
        }
      }
      return arr;
    }

    return {
      propListData,
      rows
    };
  },
};
</script>