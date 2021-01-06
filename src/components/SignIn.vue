<template>
  <div class="signin">
    <div class="signinForm">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="登录" name="first">
          <el-input
            v-model="nameInput"
            placeholder="请输入用户名/邮箱"
            prefix-icon="el-icon-user-solid"
          ></el-input>
          <el-input
            placeholder="请输入密码"
            v-model="pwdInput"
            prefix-icon="el-icon-s-opportunity"
            show-password
          ></el-input>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      activeName: 'first',
      nameInput: '',
      pwdInput: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.signin {
  position: relative;
  height: 100vh;
}

.signinForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  min-width: 500px;
  height: 600px;
}
</style>
