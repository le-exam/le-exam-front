<template>
  <header class="head-nav">
    <div class="head-nav-inner">
      <div style="width:145px;">乐考</div>
      <nav>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1" @click="GoKZT">控制台</el-menu-item>
          <el-menu-item index="2" @click="GoSJ">试卷</el-menu-item>
          <el-menu-item index="3" @click="GoKS">考试</el-menu-item>
          <el-menu-item index="4" @click="GoBM">报名</el-menu-item>
          <el-menu-item index="5" @click="GoTK">题库</el-menu-item>
        </el-menu>
      </nav>
    </div>
    <div class="head-nav-inner">
      <el-link icon="el-icon-question" style="margin-right: 40px;"
        >帮助中心</el-link
      >
      <el-dropdown>
        <span class="el-dropdown-link">
          用户名<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>管理中心</el-dropdown-item>
          <el-dropdown-item @click="SignOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<style scoped>
.head-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-nav-inner {
  display: flex;
  align-items: center;
}
</style>

<script>
export default {
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    GoKZT () {
      this.$router.push('/tenant')
      this.activeIndex = '1'
    },
    GoSJ () {
      this.$router.push('/content')
      this.activeIndex = '2'
    },
    GoKS () {
      this.$router.push('/schedule/list/all')
      this.activeIndex = '3'
    },
    GoBM () {
      this.$router.push('/tenant')
      this.activeIndex = '4'
    },
    GoTK () {
      this.$router.push('/tenant')
      this.activeIndex = '5'
    },
    SignOut () {
      this.$cookieStore.delCookie('uname')
    }
  }
}
</script>
