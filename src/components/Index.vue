<template>
  <el-container>
    <el-header>
      <el-row :gutter="20" type="flex" justify="space-between">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <p class="le-title">乐考</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-title"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">产品</el-menu-item>
              <el-menu-item index="2">评测</el-menu-item>
              <el-menu-item index="3">新闻</el-menu-item>
              <el-menu-item index="4">视频介绍</el-menu-item>
            </el-menu>
            <div class="line"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-row :gutter="20" type="flex" justify="end">
              <el-button type="primary" @click="SignUp">登录</el-button>
              <el-button type="primary" plain @click="SignIn">注册</el-button>
              <el-button type="success">我是考生</el-button>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="le-body">
      <h1 class="le-h1">每个人都可以使用的专业在线考试系统</h1>
      </div>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      activeIndex: '1',
      handleSelect: '1',
      msg: '乐考在线考试系统'
    }
  },
  methods: {
    SignUp () {
      this.$router.push({path: '/account/signin'})
    },
    SignIn () {
      this.$router.push({path: '/account/signup'})
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
  font-family: "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft Yahei", "微软雅黑", Tahoma, Arial, STHeiti, sans-serif;
  color: #409EFF;
}
</style>
