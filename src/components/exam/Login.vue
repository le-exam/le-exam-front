<template>
  <div class="main">
    <div class="banner">
      <div class="inner">
        <div class="session-name">
          <p>1.4 test</p>
        </div>
        <div class="time-wrapper">
          <div class="login-time">
            <span>考试时间: </span>
          </div>
          <div class="line"></div>
          <div class="time">
            2021/01/04 09:11 - 2021/01/30 09:11
          </div>
        </div>
      </div>
    </div>
    <div class="banner-image"></div>
    <div class="login">
      <el-input
        placeholder="请输入准考证号"
        v-model="loginText"
        style="width: 60%"
      >
      </el-input>
      <el-button type="success" style="width: 10%; height: 40px">登录</el-button>
    </div>
    <div class="welcomeMsg">
      你好
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
}
.banner {
  height: 340px;
  width: 100%;
  background: url(https://cdn.eztest.org/static/eztest-app/assets/images/login/banner.jpg)
    50% 50% / cover no-repeat;
  color: #fff;
  display: table;
}
.banner-image {
  position: absolute;
  right: 0px;
  top: -115px;
  width: 700px;
  height: 500px;
  background: url(https://cdn.eztest.org/static/eztest-app/assets/images/login/banner-right.png)
    50% 100px / contain no-repeat;
  z-index: 0;
}
.inner {
  display: table;
  min-width: 900px;
  margin: 0 auto;
  padding: 85px 0 0;
  text-align: left;
  font-size: 18px;
  position: relative;
  z-index: 100;
}
.session-name {
  font-size: 46px;
  max-width: 524px;
  padding-bottom: 30px;
}
.line {
  width: 24px;
  height: 2px;
  background-color: #fff;
  margin: 8px 0;
}
.login {
  min-height: 230px;
  max-width: 900px;
  margin-top: -64px;
  box-shadow: 0 0.125rem 0.55rem rgba(100, 183, 207, 0.35);
  background-color: #fff;
  margin: -64px auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 150;
}
.welcomeMsg {
  margin: 100px 0 0 150px;
}
</style>

<script>
export default {
  data () {
    return {
      loginText: ''
    }
  }
}
</script>
