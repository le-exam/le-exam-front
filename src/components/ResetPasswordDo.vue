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
          <p>通过注册邮箱重设密码</p>
          <el-form
            :model="pwdForm"
            ref="pwdForm"
            label-width="auto"
            class="demo-dynamic"
          >
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change']
                }
              ]"
            >
              <el-input
                v-model="pwdForm.email"
                placeholder="输入您的登录邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button
                type="primary"
                @click="submit('pwdForm')"
                icon="el-icon-s-promotion"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<script>
import header from '@/components/Header'
export default {
  name: 'Index',
  components: {
    'v-header': header
  },
  data () {
    return {
      pwdForm: {
        domains: [
          {
            value: ''
          }
        ],
        email: ''
      }
    }
  },
  created () {
    let emailParams = this.$route.params
    console.log(emailParams.email)
  },
  methods: {
    submit (pwdForm) {
      this.$refs[pwdForm].validate(valid => {
        if (valid) {
          let that = this
          // 发送请求
          // let param = new URLSearchParams()
          // param.append('email', this.pwdForm.email)
          // this.$axios
          //   .post(that.getApi(''), param)
          //   .then(function (response) {
          //     // 发送邮件成功
          that.$router.push({
            name: 'resetPasswordDone',
            params: { email: that.pwdForm.email }
          })
          //   })
          //   .catch(function (error) {
          //   })
        } else {
          return false
        }
      })
    }
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
  margin-top: 50px;
  width: 600px;
  text-align: center;
}
</style>
