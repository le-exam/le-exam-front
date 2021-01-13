<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-main>
        <div class="inner">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/schedule/list/all' }"
              >我的考试</el-breadcrumb-item
            >
          </el-breadcrumb>
          <div>
            <div class="form-content-head" style="margin: 40px 0 0 0;">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="all"></el-tab-pane>
                <el-tab-pane label="未开始" name="wait"></el-tab-pane>
                <el-tab-pane label="考试中" name="doing"></el-tab-pane>
                <el-tab-pane label="已过期" name="finish"></el-tab-pane>
              </el-tabs>
              <div class="form-content-head">
                <el-input
                  placeholder="考试名称"
                  prefix-icon="el-icon-search"
                  style="width: 150px"
                  @input="SearchInput"
                  v-model="searchInput"
                >
                </el-input>
                <el-button
                  type="primary"
                  plain
                  @click="CreateExam"
                  style="margin-left:20px"
                  >新建考试</el-button
                >
              </div>
            </div>

            <el-row :gutter="12" id="formid">
              <el-col :span="24" v-for="(exam, key) in exams" :key="key">
                <el-card shadow="hover" class="form-card">
                  <div class="form-card-content" @click="ClickExam(exam.eid)">
                    <div class="form-content-head">
                      <b style="font-size:16px">{{ exam.ename }}</b>
                      <div
                        :class="
                          getStatus(exam.startTime, exam.endTime, 'class') +
                            ' form-status'
                        "
                      >
                        {{ getStatus(exam.startTime, exam.endTime, 'status') }}
                      </div>
                    </div>
                    <div class="form-content-head">
                      <p style="font-size:14px;color: #88949b">
                        {{ exam.startTime }} -
                        {{ exam.endTime }}
                      </p>
                      <div class="form-setting form-content-head"></div>
                    </div>
                    <div class="form-content-head">
                      <div class="form-card-content" style="font-size:12px;">
                        <span
                          >试卷：<span
                            v-for="(tp, key) in exam.testPaperList"
                            :key="key"
                            >{{ tp.tpname + ' ' }}</span
                          ></span
                        >
                      </div>

                      <div class="form-content-head">
                        <div class="form-card-col">
                          <span style="font-size: 22px;">{{
                            getPersonCount(exam.examineeList, 'online')
                          }}</span>
                          <span style="font-size: 14px;">在线</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">{{
                            getPersonCount(exam.examineeList, 'finish')
                          }}</span>
                          <span style="font-size: 14px;">完成</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">{{
                            getPersonCount(exam.examineeList, 'stop')
                          }}</span>
                          <span style="font-size: 14px;">中断</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">{{
                            getPersonCount(exam.examineeList, 'total')
                          }}</span>
                          <span style="font-size: 14px;">总数</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
.form-content-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-card {
  margin-bottom: 20px;
}
.form-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.form-card-col {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 14px;
}
.form-status {
  font-size: 16px;
  color: white;
  margin: 5px 0 0 10px;
  width: 120px;
  height: 55px;
  text-align: center;
  line-height: 50px;
  float: right;
}
.status-ygq {
  background: url(https://cdn.eztest.org/static/img/icon-form-expired.png);
  background-size: 100% 100%;
}
.status-ksz {
  background: url(https://cdn.eztest.org/static/img/icon-form-ongoing.png);
  background-size: 100% 100%;
}
.status-wkk {
  background: url(https://cdn.eztest.org/static/img/icon-form-incoming.png);
  background-size: 100% 100%;
}
</style>

<script>
import nav from '@/components/tenant/nav'
export default {
  data () {
    return {
      activeName: 'all',
      list: [1, 2, 3, 4, 5, 6],
      exams: '',
      searchInput: ''
    }
  },
  components: {
    'v-nav': nav
  },
  created () {
    var that = this
    this.$axios
      .get(that.getApi('/exam/byoid'), {
        params: { oid: that.$cookieStore.getCookie('oid') }
      })
      .then(function (response) {
        that.exams = response
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (tab, event) {
      var that = this
      this.$axios
        .get(that.getApi('/exam/byoid'), {
          params: { oid: that.$cookieStore.getCookie('oid') }
        })
        .then(function (response) {
          let res = []
          for (let i = 0; i < response.length; i++) {
            let resStatus = that.getStatus(
              response[i]['startTime'],
              response[i]['endTime'],
              'status'
            )
            if (
              tab.name === 'all' ||
              (tab.name === 'wait' && resStatus === '未开考') ||
              (tab.name === 'doing' && resStatus === '考试中') ||
              (tab.name === 'finish' && resStatus === '已过期')
            ) {
              res[res.length] = response[i]
            }
          }
          that.exams = res
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    SearchInput (key) {
      this.$forceUpdate()
      var that = this
      this.$axios
        .get(that.getApi('/exam/byoid'), {
          params: { oid: that.$cookieStore.getCookie('oid') }
        })
        .then(function (response) {
          let res = []
          for (let i = 0; i < response.length; i++) {
            // 字符串模糊匹配
            // 实现模糊搜索
            if (response[i]['ename'].indexOf(key) >= 0) {
              res.push(response[i])
            }
          }
          that.exams = res
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    CreateExam () {
      this.$router.push('/schedule/create')
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
      // let ss =
      //   new Date().getSeconds() < 10
      //     ? '0' + new Date().getSeconds()
      //     : new Date().getSeconds()
      let gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf
      return gettime
    },
    getStatus (startTime, endTime, op) {
      let timestamp = Date.parse(new Date())
      let st = new Date(Date.parse(startTime)).getTime()
      let et = new Date(Date.parse(endTime)).getTime()
      let res = {
        status: '',
        class: ''
      }
      if (timestamp < st) {
        res['status'] = '未开考'
        res['class'] = 'status-wkk'
      } else if (timestamp > et) {
        res['status'] = '已过期'
        res['class'] = 'status-ygq'
      } else {
        res['status'] = '考试中'
        res['class'] = 'status-ksz'
      }
      if (op === 'status') return res['status']
      else return res['class']
    },
    getPersonCount (examineeList, op) {
      let online = 0
      let finish = 0
      let stop = 0
      let total = 0
      for (let i = 0; i < examineeList.length; i++) {
        total++
        let ee = examineeList[i]
        if (ee['status'] === 1) online++
        else if (ee['status'] === 5) finish++
        else if (ee['status'] === 3) stop++
      }
      if (op === 'online') return online
      else if (op === 'finish') return finish
      else if (op === 'stop') return stop
      else if (op === 'total') return total
      else return 0
    },
    ClickExam (eid) {
      this.$router.push('/schedule/exam/' + eid)
    }
  }
}
</script>
