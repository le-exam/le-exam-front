<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><b>乐考</b></el-menu-item>
      <el-menu-item index="1">控制台</el-menu-item>
      <el-menu-item index="1">试卷</el-menu-item>
      <el-menu-item index="1">考试</el-menu-item>
      <el-menu-item index="1">报名</el-menu-item>
      <el-menu-item index="1">题库</el-menu-item>
      <el-menu-item index="1">组卷</el-menu-item>
      <el-menu-item index="4"
        ><a href="" target="_blank">？帮助中心</a></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">用户名</template>
        <el-menu-item index="2-1">管理中心</el-menu-item>
        <el-menu-item index="2-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
