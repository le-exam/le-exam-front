<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="250px"></el-aside>
      <el-main>
        <span>我的试卷</span>
        <br />
        <br />
        <el-card class="box-card" style="width:1000px">
          <div slot="header" class="clearfix">
            <el-menu-item index="1">处理中心</el-menu-item>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card></el-main
      >
    </el-container>
  </el-container>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
<script>
import nav from '@/components/tenant/nav'
export default {
  components: {
    'v-nav': nav
  }
}
</script>
