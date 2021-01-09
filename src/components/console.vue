<template>
  <div>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" style="width:160px"><b>乐考</b></el-menu-item>
        <el-menu-item index="2">控制台</el-menu-item>
        <el-menu-item index="3">试卷</el-menu-item>
        <el-menu-item index="4">考试</el-menu-item>
        <el-menu-item index="5">报名</el-menu-item>
        <el-menu-item index="6">题库</el-menu-item>
        <el-menu-item index="7">组卷</el-menu-item>
        <el-menu-item index="8"
          ><a href="" target="_blank" id="b"
            ><i class="el-icon-question"></i>帮助中心</a
          ></el-menu-item
        >
        <el-submenu index="2" class="y">
          <template slot="title"><i class="el-icon-user"></i>用户名</template>
          <el-menu-item index="2-1">管理中心</el-menu-item>
          <el-menu-item index="2-2">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-row class="tac" style="width:190px;height:2000px">
      <el-col :span="20">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据监控</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-user-solid"></i>
            <span slot="title">考试考生</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-s-order"></i>
            <span slot="title">报名考生</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-document-copy"></i>
            <span slot="title">报告管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="clearfix console-panel">
      <div class="panel-tenant">
        <div class="clearfix">
          <div class="dashboard-photo pull-left"></div>
          <div class="tip pull-left"></div>
        </div>
        <div class="clearfix">
          <div class="entry-volume">
            <span></span>
          </div>
        </div>
        <div class="tip clearfix">
          <span></span>
        </div>
      </div>
      <li></li>
    </div>
  </div>
</template>

<style scoped>
.y {
  position: relative;
  left: 630px;
}
#b {
  position: relative;
  left: 600px;
}
</style>

<script>
export default {
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
