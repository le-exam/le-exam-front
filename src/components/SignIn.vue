<template>
  <div class="signin">
    <div class="signTitle">
      <span>乐考</span>
      <p>每个人都可以使用的专业在线考试系统</p>
    </div>
    <div class="signinForm">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="登录" name="signin">
          <el-form
            ref="SigninForm"
            :model="SigninForm"
            status-icon
            :rules="SigninRules"
            label-width="auto"
            style="padding: 50px 30px;"
          >
            <el-form-item size="large" prop="name">
              <el-input
                v-model="SigninForm.name"
                placeholder="请输入用户名/邮箱"
                prefix-icon="el-icon-user-solid"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="pwd">
              <el-input
                placeholder="请输入密码"
                v-model="SigninForm.pwd"
                prefix-icon="el-icon-s-opportunity"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="status">
              <div class="flex" :inline="true">
                <el-checkbox-group v-model="SigninForm.status">
                  <el-checkbox label="记住我" name="status"></el-checkbox>
                </el-checkbox-group>
                <el-link type="primary" @click="ForgetPass">忘记密码</el-link>
              </div>
            </el-form-item>
            <el-form-item size="large" prop="signin">
              <el-button
                type="primary"
                @click="Login('SigninForm')"
                style="width: 100%;"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="signup">
          <el-form
            ref="SignupForm"
            :model="SignupForm"
            status-icon
            :rules="SignupRules"
            label-width="auto"
            style="padding: 50px 30px;"
          >
            <el-form-item size="large" prop="uname">
              <el-input
                v-model="SignupForm.uname"
                placeholder="输入您的用户名"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="email">
              <el-input
                v-model="SignupForm.email"
                placeholder="输入您的常用邮箱"
                prefix-icon="el-icon-files"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="pwd2">
              <el-input
                v-model="SignupForm.pwd2"
                placeholder="输入您的密码"
                prefix-icon="el-icon-bell"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="pwd3">
              <el-input
                v-model="SignupForm.pwd3"
                placeholder="确认您的密码"
                prefix-icon="el-icon-bell"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="oname">
              <el-input
                v-model="SignupForm.oname"
                placeholder="输入您的机构名称"
                prefix-icon="el-icon-office-building"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="name2">
              <el-input
                v-model="SignupForm.name2"
                placeholder="输入您的联系人姓名"
                prefix-icon="el-icon-s-custom"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="phone">
              <el-input
                v-model="SignupForm.phone"
                placeholder="输入您的联系人电话"
                prefix-icon="el-icon-phone"
              ></el-input>
            </el-form-item>
            <el-form-item size="large" prop="signup">
              <el-button
                type="primary"
                @click="Register('SignupForm')"
                style="width: 100%;"
                >同意条款并注册</el-button
              >
            </el-form-item>
            <div style="width: 100%; text-align: center;">
              <el-link type="primary" @click="Agreement">用户服务协议</el-link>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名/邮箱不能为空'))
      } else {
        if (this.SigninForm.checkName !== '') {
          this.$refs.SigninForm.validateField('checkName')
        }
        callback()
      }
    }
    var checkPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        if (this.SigninForm.checkPwd !== '') {
          this.$refs.SigninForm.validateField('checkPwd')
        }
        callback()
      }
    }
    var checkPwd3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.SignupForm.pwd2) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var checkOname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('机构名称不能为空'))
      } else {
        if (this.SignupForm.checkOname !== '') {
          this.$refs.SignupForm.validateField('checkOname')
        }
        callback()
      }
    }
    var checkName2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('联系人姓名不能为空'))
      } else {
        if (this.SignupForm.checkName2 !== '') {
          this.$refs.SignupForm.validateField('checkName2')
        }
        callback()
      }
    }
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      if (!value) {
        return callback(new Error('电话号码不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (phoneReg.test(value)) {
            callback()
          } else {
            callback(new Error('电话号码格式不正确'))
          }
        }
      }, 100)
    }
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }, 100)
    }
    if (this.$cookieStore.getCookie('uname')) {
      this.$router.push('/tenant/dashboard')
    }
    return {
      activeName: 'signin',
      SigninForm: {
        name: '',
        pwd: '',
        status: ''
      },
      SignupForm: {
        uname: '',
        email: '',
        pwd2: '',
        pwd3: '',
        oname: '',
        name2: '',
        phone: ''
      },
      SigninRules: {
        name: [{ validator: checkName, trigger: 'blur' }],
        pwd: [{ validator: checkPwd, trigger: 'blur' }]
      },
      SignupRules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        email: [{ validator: checkEmail, trigger: 'blur' }],
        pwd2: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        pwd3: [{ validator: checkPwd3, trigger: 'blur' }],
        oname: [{ validator: checkOname, trigger: 'blur' }],
        name2: [{ validator: checkName2, trigger: 'blur' }],
        phone: [{ validator: checkPhone, trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    Login (SigninForm) {
      this.$refs[SigninForm].validate(valid => {
        if (valid) {
          // 发送请求
          var that = this
          let param = new URLSearchParams()
          param.append('uname', this.SigninForm.name)
          param.append('pwd', this.SigninForm.pwd)
          this.$axios
            .post(that.getApi('/login'), param)
            .then(function (response) {
              if (response === '') {
                that.$message({
                  message: '用户名或密码错误，请重试。',
                  type: 'error'
                })
                that.SigninForm.pwd = ''
              } else if (response === 'Successful user login') {
                // 登录成功
                that.$cookieStore.setCookie('uname', that.SigninForm.name, 1)
                that.$router.push('/tenant')
              } else {
                let user = response[0]
                if (user) {
                  that.$cookieStore.setCookie('uname', user.uname, 1)
                  that.$cookieStore.setCookie('name', user.name, 1)
                  that.$cookieStore.setCookie('email', user.email, 1)
                  that.$cookieStore.setCookie('uid', user.uid, 1)
                  that.$cookieStore.setCookie('oid', user.oid, 1)
                  that.$router.push('/tenant')
                  that.$message({
                    message: '登录成功，欢迎你  ' + user.name,
                    type: 'success'
                  })
                } else {
                  that.$message({
                    message: '登录失败，未知错误。',
                    type: 'error'
                  })
                }
              }
            })
            .catch(function (error) {
              console.log(error)
              that.$message({
                message: '登录失败，请检查网络连接。',
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    },
    Register (SignupForm) {
      this.$refs[SignupForm].validate(valid => {
        if (valid) {
          var that = this
          let param = new URLSearchParams()
          param.append('uname', this.SignupForm.uname)
          param.append('pwd', this.SignupForm.pwd2)
          param.append('email', this.SignupForm.email)
          param.append('oname', this.SignupForm.oname)
          param.append('name', this.SignupForm.name2)
          param.append('phone', this.SignupForm.phone)
          this.$axios
            .post(that.getApi('/register'), param)
            .then(function (response) {
              if (response === 'registration failed') {
                that.$message({
                  message: '注册失败，请重试。',
                  type: 'error'
                })
              } else if (response === 'registered successfully') {
                that.activeName = 'signin'
                that.$message({
                  message: '注册成功，请登录。',
                  type: 'success'
                })
              } else {
                that.$message({
                  message: '注册失败。未知错误。',
                  type: 'error'
                })
              }
            })
            .catch(function (error) {
              console.log(error)
              that.$message({
                message: '注册失败，请检查网络连接。',
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    },
    ForgetPass () {
      this.$router.push({ name: 'resetPassword' })
    },
    Agreement () {
      this.$router.push({ name: 'Agreement' })
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
  width: 30%;
  min-width: 500px;
  margin: 30px auto;
}
.signTitle {
  padding-top: 1.5rem;
  text-align: center;
}
.signTitle > span {
  background: #eee
    url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC)
    repeat;
  text-shadow: 5px -5px dodgerblue, 4px -4px white;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 60px;
  line-height: 100px;
}
.signTitle > p {
  margin: 0;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
