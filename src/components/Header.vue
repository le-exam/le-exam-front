<template>
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
        <el-row :gutter="20" type="flex" justify="end" v-if="nologin">
          <el-button type="primary" @click="SignUpThing">登录</el-button>
          <el-button type="primary" plain @click="SignInThing">注册</el-button>
          <el-button type="success">我是考生</el-button>
        </el-row>
        <el-row :gutter="20" type="flex" justify="end" v-else>
          <el-button
            type="primary"
            plain
            @click="ConsoleThing"
            icon="el-icon-data-analysis"
            >控制台</el-button
          >
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  data () {
    let nologin = true
    if (this.$cookieStore.getCookie('uname')) {
      nologin = false
    }
    return {
      activeIndex: '1',
      handleSelect: '1',
      msg: '乐考在线考试系统',
      nologin: nologin
    }
  },
  methods: {
    SignUpThing () {
      this.$router.push({ path: '/account/signin' })
    },
    SignInThing () {
      this.$router.push({ path: '/account/signup' })
    },
    ConsoleThing () {
      this.$router.push({ path: '/tenant' })
    }
  }
}
</script>
