<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-main>
        <div class="inner">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/schedule/list/all' }"
              >考试列表</el-breadcrumb-item
            >
            <el-breadcrumb-item>{{ exam.ename }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="content">
            <div class="flex-row">
              <h3>{{ exam.ename }}</h3>

              <el-tooltip
                class="item"
                effect="dark"
                content="修改"
                placement="bottom"
              >
                <i @click="EditExam" class="el-icon-edit exam-icon"></i>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="删除"
                placement="bottom"
              >
                <el-popconfirm
                  title="您确定删除该场次的考试吗？"
                  @confirm="DeleteExam"
                >
                  <i class="el-icon-delete exam-icon" slot="reference"></i>
                </el-popconfirm>
              </el-tooltip>
            </div>
            <div class="flex-row">
              <span style="font-size: 13px; color: #999;"
                >{{ getTime(exam.startTime) }} -
                {{ getTime(exam.endTime) }}</span
              >
            </div>
            <div class="flex-row">
              <span style="font-size: 13px; color: #999;">{{
                exam.welcomeMsg
              }}</span>
            </div>
            <el-divider></el-divider>
            <div class="flex-row flex-between">
              <div>
                <h4 class="el-icon-s-order">考试试卷</h4>
                <div class="flex-row flex-warp">
                  <span
                    class="exam-do"
                    v-for="(item, key) in exam.testPaper"
                    :key="key"
                    >{{ item.tpname }}</span
                  >
                </div>
              </div>
              <div>
                <h4 class="el-icon-s-claim">信息采集</h4>
                <div class="flex-row flex-warp">
                  <span
                    class="exam-do"
                    v-for="(item, key) in exam.personalInfo"
                    :key="key"
                    >{{ item }}</span
                  >
                </div>
              </div>
              <div>
                <h4 class="el-icon-menu">考试配置</h4>
                <div class="flex-row flex-warp">
                  <span
                    class="exam-do"
                    v-for="(item, key) in exam.setting"
                    :key="key"
                    >{{ item }}</span
                  >
                </div>
              </div>
              <div>
                <h4 class="el-icon-s-opportunity">考试地址</h4>
                <div>
                  <el-link target="_blank">{{
                    host + '/exam/' + exam.eid + '/login'
                  }}</el-link>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="flex-row flex-between">
              <div class="flex-row">
                <b>考生列表</b>
                <span style="margin-left: 5px; font-size: 14px;"
                  >共筛选 {{ eeData.length }} 条信息</span
                >
              </div>
              <div class="flex-row">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="发送邮件"
                  placement="top"
                >
                  <i class="el-icon-s-promotion exam-do-icon"></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="强制收卷"
                  placement="top"
                >
                  <i class="el-icon-s-flag exam-do-icon"></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="导出考生明细"
                  placement="top"
                >
                  <i
                    @click="ExportExcel"
                    class="el-icon-download exam-do-icon"
                  ></i>
                </el-tooltip>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="删除考生"
                  placement="top"
                >
                  <i class="el-icon-delete-solid exam-do-icon"></i>
                </el-tooltip>
                <el-input
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  @input="SearchInput"
                  v-model="searchInput"
                >
                </el-input>
              </div>
            </div>
            <el-table
              ref="multipleTable"
              :data="eeData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column prop="status" label="考生状态">
              </el-table-column>
              <el-table-column prop="number" label="准考证号">
              </el-table-column>
              <el-table-column prop="name" label="考生姓名"> </el-table-column>
              <el-table-column prop="loginTime" label="参考时间">
              </el-table-column>
              <el-table-column prop="isEmail" label="邮件通知">
              </el-table-column>
              <el-table-column prop="grade" label="成绩"> </el-table-column>
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.inner {
  width: 70%;
  margin: 0 auto;
}
.content {
  margin-top: 30px;
  border: 1px solid #ebebeb;
  padding: 20px;
  border-radius: 3px;
  transition: 0.2s;
}
.content:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.flex-row {
  display: flex;
  align-items: center;
}
.flex-between {
  justify-content: space-between;
}
.flex-warp {
  flex-wrap: wrap;
}
.exam-icon {
  padding: 10px;
  margin-left: 10px;
}
.exam-do {
  display: inline-block;
  background-color: #87949c;
  padding: 2px 6px;
  font-size: 12px;
  margin: 4px;
  border-radius: 4px;
  color: #fff;
}
.exam-do-icon {
  padding: 6px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
}
</style>

<script>
import nav from '@/components/tenant/nav'
export default {
  data () {
    return {
      exam: '',
      eeData: [],
      searchInput: '',
      host: window.location.protocol + '//' + window.location.host
    }
  },
  components: {
    'v-nav': nav
  },
  created () {
    var that = this
    let eid = this.$route.params.eid
    this.$axios
      .get(that.getApi('/exam/selectbyeid'), {
        params: { eid: eid }
      })
      .then(function (response) {
        response['personalInfo'] = JSON.parse(response['personalInfo'])
        response['testPaper'] = JSON.parse(response['testPaper'])
        that.$axios
          .post(that.getApi('/testpaper/bytpids'), response['testPaper'])
          .then(function (res2) {
            that.exam['testPaper'] = res2
          })
        that.$axios
          .get(that.getApi('/examinee/eid/page'), {
            params: {
              eid: eid
            }
          })
          .then(function (res3) {
            for (let i = 0; i < res3.length; i++) {
              switch (res3[i]['status']) {
                case 0:
                  res3[i]['status'] = '未开考'
                  break
                case 1:
                  res3[i]['status'] = '已登录'
                  break
                case 2:
                  res3[i]['status'] = '考试中'
                  break
                case 3:
                  res3[i]['status'] = '已中断'
                  break
                case 4:
                  res3[i]['status'] = '已提交'
                  break
                case 5:
                  res3[i]['status'] = '已完成'
                  break
              }
              res3[i]['loginTime'] = that.getTime(res3[i]['loginTime'])
              switch (res3[i]['isEmail']) {
                case 0:
                  res3[i]['isEmail'] = '未投递'
                  break
                case 1:
                  res3[i]['isEmail'] = '投递中'
                  break
                case 2:
                  res3[i]['isEmail'] = '已投递'
                  break
                case 3:
                  res3[i]['isEmail'] = '投递失败'
                  break
              }
            }
            that.eeData = res3
          })

        response['setting'] = []
        if (response['eLockedExam'] !== 0) {
          response['setting'][response['setting'].length] =
            '锁定考试：' + response['eLockedExam'] + '次'
        }
        if (response['eOmmitment'] !== 0) {
          response['setting'][response['setting'].length] = '考试承诺书'
        }
        if (response['ePracticeMode'] !== 0) {
          response['setting'][response['setting'].length] = '练习模式'
        }
        if (response['eSignUp'] !== 0) {
          response['setting'][response['setting'].length] = '即报即考'
        }
        if (response['eViewResults'] !== 0) {
          response['setting'][response['setting'].length] = '查看成绩'
        }
        that.exam = response
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    EditExam () {
      this.$prompt('请输入考试名称', '修改考试名称', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          let that = this
          this.$axios
            .post(that.getApi('/exam/update'), {
              eid: that.exam.eid,
              ename: value
            })
            .then(function (response) {
              if (response === 'success') {
                that.$message({
                  type: 'success',
                  message: '修改考试名称成功。'
                })
                that.exam.ename = value
              } else {
                that.$message({
                  type: 'error',
                  message: '修改考试名称失败。'
                })
              }
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改考试名称'
          })
        })
    },
    DeleteExam () {
      var that = this
      this.$axios
        .get(that.getApi('/exam/delete'), {
          params: { eid: that.exam.eid }
        })
        .then(function (response) {
          if (response === 'success') {
            that.$message({
              message: '删除成功。',
              type: 'success'
            })
            that.$router.push('/schedule/list/all')
          } else if (response === 'error') {
            that.$message({
              message: '删除失败。',
              type: 'error'
            })
          } else {
            that.$message({
              message: '未知错误。',
              type: 'error'
            })
          }
        })
        .catch(function (error) {
          console.log(error)
          that.$message({
            message: '删除失败，请检查网络连接。',
            type: 'error'
          })
        })
    },
    getTime: function () {
      let yy = new Date().getFullYear()
      var mm =
        new Date().getMonth() < 10
          ? '0' + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1
      var dd =
        new Date().getDate() < 10
          ? '0' + new Date().getDate()
          : new Date().getDate()
      let hh = new Date().getHours()
      let mf =
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes()
      let gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf
      return gettime
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    SearchInput (key) {
      let eid = this.$route.params.eid
      let that = this
      let res = []
      that.$axios
        .get(that.getApi('/examinee/eid/page'), {
          params: {
            eid: eid
          }
        })
        .then(function (res3) {
          for (let i = 0; i < res3.length; i++) {
            switch (res3[i]['status']) {
              case 0:
                res3[i]['status'] = '未开考'
                break
              case 1:
                res3[i]['status'] = '已登录'
                break
              case 2:
                res3[i]['status'] = '考试中'
                break
              case 3:
                res3[i]['status'] = '已中断'
                break
              case 4:
                res3[i]['status'] = '已提交'
                break
              case 5:
                res3[i]['status'] = '已完成'
                break
            }
            res3[i]['loginTime'] = that.getTime(res3[i]['loginTime'])
            switch (res3[i]['isEmail']) {
              case 0:
                res3[i]['isEmail'] = '未投递'
                break
              case 1:
                res3[i]['isEmail'] = '投递中'
                break
              case 2:
                res3[i]['isEmail'] = '已投递'
                break
              case 3:
                res3[i]['isEmail'] = '投递失败'
                break
            }
            if (
              res3[i]['name'].indexOf(key) >= 0 ||
              res3[i]['number'].indexOf(key) >= 0
            ) {
              res.push(res3[i])
            }
          }
          that.eeData = res
        })
    },
    ExportExcel () {
      let that = this
      that.$axios.post(that.getApi('/excel/export'), [1, 2, 3]).then(res => {
        console.log(res)
        let link = document.createElement('a')
        link.href = 'http://localhost:8088/' + res
        link.click()

        // const content = res
        // const blob = new Blob([content], { type: 'application/octet-stream' })
        // if ('download' in document.createElement('a')) {
        //   const link = document.createElement('a')
        //   link.download = '考生数据.xls'
        //   link.style.display = 'none'
        //   link.href = URL.createObjectURL(blob)
        //   document.body.appendChild(link)
        //   link.click()
        //   URL.revokeObjectURL(link.href)
        //   document.body.removeChild(link)
        // } else {
        //   navigator.msSaveBlob(blob)
        // }
      })
    }
  }
}
</script>
