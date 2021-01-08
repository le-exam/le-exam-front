<template>
  <el-container>
    <el-header>
      <v-header></v-header>
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
import header from '@/components/Header'
export default {
  name: 'Index',
  components: {
    'v-header': header
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
