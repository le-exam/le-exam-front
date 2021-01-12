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
        <div class="form-detail-all" style="margin: 40px 0 0 0;">
          <div class="form-detail-head">
            <b style="font-size:20px">试卷示例</b>
            <el-button type="text" @click="alter"
              ><p class="el-icon-edit" title="修改"></p
            ></el-button>
            <el-button type="text" @click="copy"
              ><p class="el-icon-document-copy" title="复制"></p
            ></el-button>
            <el-button type="text" @click="share"
              ><p class="el-icon-paperclip" title="分享"></p
            ></el-button>
            <el-button type="text" @click="del"
              ><p class="el-icon-delete" title="删除"></p
            ></el-button>
            <el-button type="text" @click="conver"
              ><p class="el-icon-refresh" title="转换"></p
            ></el-button>
            <el-button type="text" @click="AlterDetail"
              ><p class="el-icon-edit-outline" title="转换"></p
            ></el-button>
          </div>
          <div class="form-detail-all-score">
            <div class="form-detail-score">总分</div>
            <div class="form-detail-num">100</div>
          </div>
        </div>
        <div class="form-detail-all">
          <div>
            <span style="font-size:14px">更新于2021-1-11</span>
            <span style="font-size:14px">复制于2021-1-10</span>
            <el-popover
              placement="top-start"
              title="试卷描述"
              width="200"
              trigger="hover"
              content="这是一段试卷描述。"
            >
              <el-button slot="reference">试卷描述</el-button>
            </el-popover>
            <el-popover placement="top" width="160" v-model="visible">
              <p>还没有考试应用此试卷</p>
              <div style="text-align: right; margin: 0">
                <el-button type="primary" size="mini" @click="visible = false"
                  >马上创建考试</el-button
                >
              </div>
              <el-button slot="reference">应用考试</el-button>
            </el-popover>
          </div>
          <div class="form-detail-all">
            <p>交卷时间限制XX分钟（已设置）</p>
            <el-button type="text" @click="alter"
              ><p class="el-icon-edit" title="修改"></p
            ></el-button>
          </div>
        </div></div
    ></el-main>
  </el-container>
</template>
<style scoped>
.form-detail-all-score {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-detail-all {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-detail-score {
  height: 30px;
  line-height: 26px;
  color: #fff;
  padding: 0 10px;
  background-color: #88949b;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #88949b;
}
.form-detail-num {
  height: 30px;
  line-height: 26px;
  padding: 0 12px;
  font-size: 24px;
  color: #88949b;
  border: 1px dashed #88949b;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
<script>
import nav from '@/components/tenant/nav'
export default {
  components: {
    'v-nav': nav
  },
  data () {
    return {
      visible: false
    }
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
    },
    AlterDetail () {
      this.$prompt('试卷描述', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消提交'
          })
        })
    },
    del () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    copy () {
      this.$confirm('此操作将复制一份试卷, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '复制成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消复制'
          })
        })
    },
    share () {
      this.$confirm('确定要分享给你的朋友吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '分享成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消分享'
          })
        })
    },
    conver () {
      this.$confirm('此操作将转换为默认试卷样例, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '转换成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消转换'
          })
        })
    }
  }
}
</script>
