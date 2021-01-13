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
          </el-breadcrumb>
        </div>
        <div style="margin:40px 0 0 0;" v-for="(item, key) in min" :key="key">
          <el-card class="box-card">
            <div class="list-content">
              <div>
                <b style="font-size:20px">{{ item.qbname }}</b>
                <el-button
                  type="text"
                  @click="ListEdit"
                  class="el-icon-edit"
                  title="编辑题库名"
                ></el-button>
                <el-button
                  type="text"
                  @click="ListCopy"
                  class="el-icon-circle-plus-outline"
                  title="复制题库"
                ></el-button>
                <el-button
                  type="text"
                  @click="ListShare"
                  class="el-icon-s-promotion"
                  title="分享题库"
                ></el-button>
                <el-button
                  type="text"
                  @click="ListDel"
                  class="el-icon-delete"
                  title="删除题库"
                ></el-button>
              </div>
              <div class="list-content-right">
                <div class="list-title">题量总计</div>
                <div class="list-number">{{ item.question }}</div>
                <el-button type="primary" plain @click="Createlist(item.lsid)"
                  >管理/创建试题</el-button
                >
              </div>
            </div>
          </el-card>
        </div>
      </div></el-main
    >
  </el-container>
</template>
<style scoped>
.list-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-content-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-number {
  height: 36px;
  line-height: 32px;
  padding: 0 12px;
  font-size: 24px;
  color: #88949b;
  border: 1px dashed #88949b;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.list-title {
  height: 36px;
  line-height: 32px;
  color: #fff;
  padding: 0 10px;
  background-color: #88949b;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #88949b;
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
      min: ''
    }
  },
  created () {
    let oid = this.$cookieStore.getCookie('oid')
    let that = this
    let param = new URLSearchParams()
    param.append('oid', oid)
    this.$axios
      .post(that.getApi('/quesbank'), param)
      .then(function (response) {
        that.min = response
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        // 失败后调用代码
      })
  },
  methods: {
    Createlist: function (lsid) {
      this.$router.push('/content/form/list/management/' + lsid)
    },
    ListEdit () {
      this.$prompt('请输入题库名', '编辑题库名', {
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
    ListCopy () {
      this.$prompt('请输入新题库名', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '复制成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消复制'
          })
        })
    },
    ListShare () {
      this.$prompt('请输入分享邮箱', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '分享成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消分享'
          })
        })
    },
    ListDel () {
      this.$confirm(
        '您确定删除此题库吗？删除此题库后，则无法还原此题库的所有信息！',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
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
    }
  }
}
</script>
