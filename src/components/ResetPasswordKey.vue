<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <div class="le-body">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">忘记密码</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="le-fgpass">
          <p>{{ msg }}</p>
        </div>
      </div>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<script>
import header from '@/components/Header'
import crypto from '@/commn/crypto'

export default {
  name: 'ResetPasswordKey',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let key = this.$route.params.id
    let jsonData = crypto.jiemi(key)
    if (jsonData === '') {
      this.msg = '抱歉 ，这不是一个有效的链接地址。'
      return false
    }
    let emailObj = JSON.parse(jsonData)
    let nowTimestamp = new Date().getTime()
    let emailTimestamp = new Date(emailObj.date).getTime()
    if ((nowTimestamp - emailTimestamp) / 1000 > 24 * 60 * 60) {
      this.msg = '该链接已失效，很有可能已经让他人验证。'
      return false
    }
    this.msg = '这是一个正确的链接地址，重置密码邮箱为：' + emailObj.email
    this.$router.push({
      name: 'resetPasswordDo',
      params: { email: emailObj.email }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style scoped>
.le-title {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 20px;
}
.le-body {
  width: 100%;
  height: 80vh;
}
.le-h1 {
  margin-top: 5rem;
  font-size: 2.2rem;
  font-family: 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI',
    'Microsoft Yahei', '微软雅黑', Tahoma, Arial, STHeiti, sans-serif;
  color: #409eff;
}
.le-fgpass {
  margin: 0 auto;
  margin-top: 150px;
  width: 300px;
}
</style>
