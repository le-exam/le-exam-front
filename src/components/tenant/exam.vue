<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="200px"><v-side></v-side></el-aside>
      <el-main>
        <div>
          <b>我是考试考生</b>
          <el-select
            style="float:right"
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="姓名/准考证号"
            :loading="loading"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <br />
        <br />
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部考试" name="first">
              <v-selecttime></v-selecttime>
            </el-tab-pane>
            <el-tab-pane label="考试中" name="second">
              <v-selecttime></v-selecttime>
            </el-tab-pane>
            <el-tab-pane label="已中断" name="third">
              <v-selecttime></v-selecttime>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="fourth">
              <v-selecttime></v-selecttime>
            </el-tab-pane>
            <el-tab-pane label="未完成" name="fifth">
              <v-selecttime></v-selecttime>
            </el-tab-pane>
          </el-tabs>
        </div>
        <br />
        <br />
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="status" label="状态" width="100">
            </el-table-column>
            <el-table-column prop="number" label="准考证号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="exam.ename" label="参加考试名称" width="150">
            </el-table-column>
            <el-table-column prop="exam.tp" label="考试试卷" width="150">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="100">
            </el-table-column>
            <el-table-column prop="loginTime" label="首次登陆时间" width="140">
            </el-table-column>
            <el-table-column prop="finishTime" label="完成时间" width="100">
            </el-table-column>
            <el-table-column prop="useTime" label="考试用时" width="100">
            </el-table-column>
            <el-table-column prop="grade" label="成绩/试卷满分">
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 1280px;
}
</style>
<script>
import selecttime from '@/components/tenant/selecttime'
import nav from '@/components/tenant/nav'
import side from '@/components/tenant/side'
export default {
  components: {
    'v-nav': nav,
    'v-selecttime': selecttime,
    'v-side': side
  },
  data () {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [],
      activeName: 'first',
      tableData: [],
      asideIndex: '2'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  remoteMethod (query) {
    if (query !== '') {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.options = this.list.filter(item => {
          return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
        })
      }, 200)
    } else {
      this.options = []
    }
  },
  created () {
    let oid = this.$cookieStore.getCookie('oid')
    let that = this
    this.$axios
      .get(that.getApi('/examinee/byoid?oid=' + oid))
      .then(function (response) {
        console.log(response)
        let td = response
        for (let i = 0; i < td.length; i++) {
          td[i]['tp'] = ''
          for (let j = 0; j < td[i]['exam']['testPaperList'].length; j++) {
            td[i]['tp'] += td[i]['exam']['testPaperList'][j]['tpname'] + ' '
          }
          td[i]['useTime'] = that.getTime(
            td[i]['finishTime'] - td[i]['loginTime']
          )
          td[i]['createTime'] = that.getTime(td[i]['createTime'])
          td[i]['finishTime'] = that.getTime(td[i]['finishTime'])
          td[i]['loginTime'] = that.getTime(td[i]['loginTime'])
          td[i]['score'] =
            td[i]['score'] +
            '/' +
            td[i]['exam']['testPaperList'][0]['fullMarks']
        }
        that.tableData = td
      })
      .catch(function (error) {
        console.log(error)
        // 失败后调用代码
      })
  }
}
</script>
