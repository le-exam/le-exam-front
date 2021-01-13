<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-main>
      <div class="reportmain" style="width:70%; margin:0 auto">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><b>我的试卷</b></el-breadcrumb-item
          >
        </el-breadcrumb>
        <div>
          <div class="form-content-head" style="margin: 40px 0 0 0;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="从新到旧" name="newtoold"> </el-tab-pane>
              <el-tab-pane label="从旧到新" name="oldtonew"> </el-tab-pane>
            </el-tabs>
            <div class="form-content-head">
              <el-input
                placeholder="题库名称"
                prefix-icon="el-icon-search"
                v-model="input2"
                style="width: 150px"
              >
              </el-input>
              <el-button
                type="primary"
                plain
                @click="CreatePaper"
                style="margin-left:20px"
                >新建题库</el-button
              >
            </div>
          </div>
          <div id="formid">
            <el-row :gutter="12">
              <el-col :span="24" v-for="(item, key) in question" :key="key">
                <el-card shadow="hover" class="form-card">
                  <div @click="examQuestionBank(item.qbid)">
                    <div class="list-left">
                      <span style="font-size:20px">{{ item.qbname }}</span>
                      <span class="line-bt"></span>
                      <span>创建于{{ item.createTime }}</span>
                    </div>
                    <div class="list-right">
                      <div>
                        <span class="tag">总数</span>
                        <b>总计{{ item.question }}</b>
                      </div>
                      <div>
                        <span class="tag">难度</span>
                        <b>难：0% | </b>
                        <b>中：0% | </b>
                        <b>易：0%</b>
                      </div>
                      <div>
                        <span class="tag">分类</span>
                        <b>默认分类</b>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
.tag {
  width: 90px;
  text-align: center;
  display: inline-block;
  padding: 5px 15px;
  background-color: #0195ff;
  color: #fff;
  border-radius: 30px;
  margin-right: 30px;
}
.list-right {
  display: flex;
  align-items: left;
  justify-content: space-evenly;
  flex-direction: column;
  height: 202px;
  width: 60%;
  float: right;
}
.list-left {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 202px;
  width: 20%;
  float: left;
}
.line-bt {
  height: 3px;
  width: 50px;
  background-color: #0195ff;
  display: block;
  margin-bottom: 30px;
}
.form-content-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-card {
  height: 200px;
  width: 100%;
}
.form-card-content {
  padding-left: 40px;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
<script>
import nav from '@/components/tenant/nav'
export default {
  name: 'formid',
  components: {
    'v-nav': nav
  },
  data () {
    return {
      input2: '',
      activeName: 'newtoold',
      question:''
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
        that.question = response
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        // 失败后调用代码
      })
  },
  methods: {
    examQuestionBank: function (lsid) {
      this.$router.push('/content/form/list/particulars/' + lsid)
    },
    CreatePaper () {
      this.$prompt('题库名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '创建成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消创建'
          })
        })
    }
  }
}
</script>
