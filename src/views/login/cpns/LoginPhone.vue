<template>
  <div class="login-phone">
    <el-form
      label-width="70px"
      :model="account"
      :rules="loginPhoneRules"
      ref="elFormRef"
      class="el-form"
    >
      <el-form-item label="手机号" prop="phonenumber">
        <el-input v-model="account.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <div class="code-btn">
          <el-input v-model="account.code"></el-input>
          <el-button type="primary" class="el-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import { loginPhoneRules } from "../hooks/rules";
export default defineComponent({
  name: "LoginPhone",
  setup() {
    const account = reactive({
      phonenumber: "",
      code: ""
    });
    const elFormRef = ref<InstanceType<typeof ElForm>>();
    const loginPhoneAction = () => {
      elFormRef.value?.validate((res) => {
        //验证登录逻辑
        console.log(res);
      });
    };
    return { account, loginPhoneRules, elFormRef, loginPhoneAction };
  }
});
</script>

<style scoped lang="less">
.el-form {
  padding-top: 10px;
  .code-btn {
    display: flex;
    .el-btn {
      margin-left: 5px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>
