<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <div style="margin-top: 20px">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <side-menu></side-menu>
          </div>
        </el-col>
        <el-col :span="12" style="padding: 20px;padding-right: 150px">
          <div class="grid-content bg-purple-light">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="当前密码">
                <el-input v-model="form.currpsd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input v-model="form.newpsd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input v-model="form.renewpsd" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
import sidemenu from '@/components/tenant/side-menu'
import nav from '@/components/tenant/nav'

export default {
  name: 'change-password',
  components: {
    'side-menu': sidemenu,
    'v-nav': nav
  },
  data () {
    return {
      form: {
        currpsd: '',
        newpsd: '',
        renewpsd: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let _this = this
      let uid = this.$cookieStore.getCookie('uid')
      let param = new URLSearchParams()
      // eslint-disable-next-line eqeqeq
      if (_this.form.newpsd != _this.form.renewpsd) {
        _this.$message.error('两次输入的密码不一致')
        return
      }
      param.append('uid', uid)
      param.append('new_pwd', _this.form.newpsd)
      param.append('enter_pwd', _this.form.currpsd)
      this.$axios
        .post(_this.getApi('/updatepwd'), param)
        .then(function (response) {
          // eslint-disable-next-line eqeqeq
          if (response == 'Change the success') {
            _this.$message.success('修改密码成功')
            _this.$cookieStore.delCookie('uname')
            _this.$cookieStore.delCookie('name')
            _this.$cookieStore.delCookie('email')
            _this.$cookieStore.delCookie('uid')
            _this.$cookieStore.delCookie('oid')
            var keys = document.cookie.match(/[^ =;]+(?==)/g)
            if (keys) {
              for (var i = keys.length; i--;) {
                document.cookie =
                  keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
                document.cookie =
                  keys[i] +
                  '=0;path=/;domain=' +
                  document.domain +
                  ';expires=' +
                  new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
                document.cookie =
                  keys[i] +
                  '=0;path=/;domain=ratingdog.cn;expires=' +
                  new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
              }
            }
            _this.$router.push('/')
            // eslint-disable-next-line eqeqeq
          } else if (response == 'Password input error') {
            _this.$message.error('原密码输入错误')
          } else {
            _this.$message.error('修改密码失败')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
