<template>
  <el-dialog v-model="dialogFormVisible" :append-to-body="false" title="登录" @closed="closeDialog()">
    <el-form ref="login" :rules="rules" :model="form">
      <el-form-item prop="name" label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入用户名" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="password" label="密码" :label-width="formLabelWidth" @keyup.enter="handleLogin()">
          <el-input type="password" v-model="form.password" placeholder="请输入密码" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="handleLogin()">登录</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref, reactive, computed } from 'vue';
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default ({
    name: "LoginDialog",
    setup() {
        const router = useRouter();
        const formLabelWidth = '140px';
        const rules = {
            name: [
                { required: true, message: "请输入用户名", trigger: "blur" },
            ],
            password: [
                { required: true, message: "请输入密码", trigger: "blur" },
            ],
        };
        const form = reactive({
            name: "",
            password: ""
        });
        const login = ref(null);
        const handleLogin = () => {
            login.value.validate((valid) => {
                if (valid) {
                    ElMessage.success("登录成功");
                    localStorage.setItem("ms_username", form.username);
                    router.push("/");
                } else {
                    ElMessage.error("登录成功");
                    return false;
                }
            });
        };
        const store = useStore();
        const dialogFormVisible = computed(() => store.state.showLoginDialog);
        const closeDialog = () => {
            store.commit("closeLoginDialog");
        }
        return {
            dialogFormVisible,
            formLabelWidth,
            rules,
            form,
            login,
            handleLogin,
            closeDialog
        }
        
    },
})
</script>

      