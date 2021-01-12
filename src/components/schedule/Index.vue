<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-main>
        <div class="inner">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.inner {
  width: 70%;
  margin: 0 auto;
}
</style>

<script>
import nav from '@/components/tenant/nav'

export default {
  data () {
    return {}
  },
  components: {
    'v-nav': nav
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
