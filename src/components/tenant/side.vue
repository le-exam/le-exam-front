<template>
  <el-aside width="200px"
    ><el-row class="tac">
      <el-col :span="20">
        <el-menu
          :default-active="$router.path"
          :router="true"
          class="el-menu-vertical-demo"
        >
          <el-menu-item
            :index="sidePath.console"
            @click="setItemPath(sidePath.console)"
          >
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据监控</span>
          </el-menu-item>
          <el-menu-item
            :index="sidePath.exam"
            @click="setItemPath(sidePath.exam)"
          >
            <i class="el-icon-user-solid"></i>
            <span slot="title">考试考生</span>
          </el-menu-item>
          <el-menu-item
            :index="sidePath.examup"
            @click="setItemPath(sidePath.examup)"
          >
            <i class="el-icon-s-order"></i>
            <span slot="title">报名考生</span>
          </el-menu-item>
          <el-menu-item
            :index="sidePath.report"
            @click="setItemPath(sidePath.report)"
          >
            <i class="el-icon-document-copy"></i>
            <span slot="title">报告管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row></el-aside
  >
</template>

<script>
export default {
  data () {
    return {
      sidePath: {
        console: '/tenant',
        exam: '/tenant/entries',
        examup: '/tenant/candidates',
        report: '/tenant/reports'
      },
      asideIndex: '1'
    }
  },
  methods: {
    setItemPath (activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  }
}
</script>
