<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-main
      ><div class="reportmain" style="width:70%; margin:0 auto">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><b>我的试卷</b></el-breadcrumb-item
          >
          <el-breadcrumb-item>试卷示例</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
          <div class="form-detail-head" style="margin: 40px 0 0 0;">
            <b style="font-size:20px">试卷示例</b>
            <el-button type="text" @click="alter"
              ><p class="el-icon-edit" title="修改"></p
            ></el-button>
            <el-button type="text" @click="alter"
              ><p class="el-icon-document-copy" title="复制"></p
            ></el-button>
            <el-button type="text" @click="alter"
              ><p class="el-icon-paperclip" title="分享"></p
            ></el-button>
            <el-button type="text" @click="alter"
              ><p class="el-icon-delete" title="删除"></p
            ></el-button>
            <el-button type="text" @click="alter"
              ><p class="el-icon-refresh" title="转换"></p
            ></el-button>
          </div>
        </div></div
    ></el-main>
  </el-container>
</template>
<script>
import nav from '@/components/tenant/nav'
export default {
  components: {
    'v-nav': nav
  },
  methods: {
    alter () {
      this.$prompt('试卷名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          })
        })
    }
  }
}
</script>
