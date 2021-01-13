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
          {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div @click="Info">管理中心</div>
            </el-dropdown-item>
          <el-dropdown-item>
            <div @click="SignOut">退出</div>
          </el-dropdown-item>
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
      activeIndex: '0',
      name: ''
    }
  },
  created () {
    if (!this.$cookieStore.getCookie('name')) {
      this.$router.push('/')
    } else {
      this.name = unescape(this.$cookieStore.getCookie('name'))
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      return false
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
      this.$router.push('/content/form/list')
      this.activeIndex = '5'
    },
    Info () {
      this.$router.push('/tenant/info/')
    },
    SignOut () {
      this.$cookieStore.delCookie('uname')
      this.$cookieStore.delCookie('name')
      this.$cookieStore.delCookie('email')
      this.$cookieStore.delCookie('uid')
      this.$cookieStore.delCookie('oid')
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
      this.$router.push('/')
      if (!this.$cookieStore.getCookie('name')) {
        this.$message({
          message: '退出登录成功。',
          type: 'success'
        })
      } else {
        this.$message({
          message: '退出登录失败，请退出浏览器退出系统。',
          type: 'error'
        })
      }
    }
  }
}
</script>
