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
              <el-form-item label="联系人">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="用户名">
                <el-input v-model="form.uname" disabled></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email" disabled></el-input>
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
  name: 'account',
  components: {
    'side-menu': sidemenu,
    'v-nav': nav
  },
  data () {
    return {
      form: {
        name: '',
        uname: '',
        phone: '',
        email: ''
      }
    }
  },
  created () {
    let _this = this
    let uname = this.$cookieStore.getCookie('uname')
    this.$axios
      .post(_this.getApi('/selectuser?uname=' + uname))
      .then(function (response) {
        let date = response[0]
        _this.form.name = date.name
        _this.form.uname = date.uname
        _this.form.phone = date.phone
        _this.form.email = date.email
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    onSubmit () {
      let _this = this
      let uid = this.$cookieStore.getCookie('uid')
      let param = new URLSearchParams()
      param.append('uid', uid)
      param.append('phone', _this.form.phone)
      param.append('new_name', _this.form.name)
      this.$axios
        .post(_this.getApi('/updateuser'), param)
        .then(function (response) {
          // eslint-disable-next-line eqeqeq
          if (response == 'Change the success') {
            _this.$message.success('保存成功')
          } else {
            _this.$message.error('保存失败')
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
