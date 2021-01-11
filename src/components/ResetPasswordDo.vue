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
          <el-form
            :model="pwdForm"
            ref="pwdForm"
            label-width="auto"
            class="demo-dynamic"
          >
            <el-form-item label="密码" prop="pass" size="large">
              <el-input
                type="password"
                v-model="pwdForm.pass"
                autocomplete="off"
                placeholder="输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" size="large">
              <el-input
                type="password"
                v-model="pwdForm.checkPass"
                autocomplete="off"
                placeholder="确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item size="large">
              <el-button
                type="primary"
                @click="submit('pwdForm')"
                icon="el-icon-s-promotion"
                >完成</el-button
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.pwdForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      pwdForm: {
        domains: [
          {
            value: ''
          }
        ],
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      email: ''
    }
  },
  created () {
    let emailParams = this.$route.params
    this.email = emailParams.email
  },
  methods: {
    submit (pwdForm) {
      this.$refs[pwdForm].validate(valid => {
        if (valid) {
          let that = this
          // 发送请求
          // let param = new URLSearchParams()
          // param.append('email', this.email)
          // this.$axios
          //   .post(that.getApi(''), param)
          //   .then(function (response) {
          //     // 发送邮件成功
          that.$router.push({
            name: 'resetPasswordSuccess',
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
  margin-top: 100px;
  width: 400px;
  text-align: center;
}
</style>
