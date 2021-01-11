<template>
  <el-aside width="200px"
    ><el-row class="tac">
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
    </el-row></el-aside
  >
</template>
