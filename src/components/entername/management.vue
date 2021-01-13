<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-main
      ><div class="reportmain" style="width:70%; margin:0 auto">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"
              >我的题库</el-breadcrumb-item
            >
            <el-breadcrumb-item>题库名</el-breadcrumb-item>
            <el-breadcrumb-item>管理试题</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div style="margin:40px 0 0 0">
          <el-container>
            <el-header
              ><div class="man-content-top">
                <b style="font-size:20px">题库名</b>
                <el-button type="primary" plain>创建试题</el-button>
              </div>
              <div>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary"
                    >点击上传Word</el-button
                  >
                </el-upload>
              </div>
            </el-header>
            <el-container>
              <el-aside width="200px">
                <div style="margin:40px 0 0 0">
                  <el-col :span="12">
                    <el-menu
                      default-active="2"
                      @open="handleOpen"
                      @close="handleClose"
                    >
                      <el-menu-item index="2">
                        <span slot="title">全部</span>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <span slot="title">默认分类</span>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <span slot="title" @click="ManAdd">添加分类</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                </div>
              </el-aside>
              <el-main>
                <div class="question-type">
                  <span class="select-tag">题型：</span>
                  <span class="tag">全部</span>
                  <span class="tag">判断</span>
                  <span class="tag">单选</span>
                  <span class="tag">多选</span>
                  <span class="tag">简答</span>
                  <span class="tag">复合</span>
                  <span class="tag">填空</span>
                  <span class="tag">录音</span>
                  <span class="tag">录像</span>
                  <span class="tag">拖拽</span>
                  <span class="tag">模拟</span>
                  <span class="tag">编程</span>
                  <span class="tag">完形填空</span>
                  <span class="tag">热点题</span>
                  <span class="tag">热区题</span>
                </div>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </div></el-main
    >
  </el-container>
</template>
<style scoped>
.tac el-row {
  width: 400px;
}
.select-tag {
  height: 32px;
  font-size: 14px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  display: inline-block;
  line-height: 30px;
  padding: 0 10px;
}
.man-content-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      fileList: []
    }
  },
  methods: {
    ManAdd () {
      this.$prompt('分类名称', '添加分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消添加'
          })
        })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
