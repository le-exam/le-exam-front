<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1" @click="infom">
            <i class="el-icon-help"></i>
            <span slot="title">机构信息</span>
          </el-menu-item>
          <el-menu-item index="2" @click="accountm">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">个人资料</span>
          </el-menu-item>
          <el-menu-item index="4" @click="changepasswordm">
            <i class="el-icon-data-line"></i>
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'side-menu',
  methods: {
    infom () {
      this.$router.push('/tenant/info/')
    },
    accountm () {
      this.$router.push('/tenant/account/')
    },
    changepasswordm () {
      this.$router.push('/tenant/changepassword/')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
