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
            :remote-method="remoteMethod"
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
            <el-table-column prop="date" label="状态" width="100">
            </el-table-column>
            <el-table-column prop="examid" label="准考证号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="examname" label="参加考试名称" width="150">
            </el-table-column>
            <el-table-column prop="exampaper" label="考试试卷" width="150">
            </el-table-column>
            <el-table-column prop="startime" label="创建时间" width="100">
            </el-table-column>
            <el-table-column prop="firsttime" label="首次登陆时间" width="140">
            </el-table-column>
            <el-table-column prop="overtime" label="完成时间" width="100">
            </el-table-column>
            <el-table-column prop="usetime" label="考试用时" width="100">
            </el-table-column>
            <el-table-column prop="score" label="成绩/试卷满分">
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
      tableData: [
        {
          date: '已参加',
          examid: 18110506083,
          name: '姜富超',
          examname: '期末考试',
          exampaper: '闭卷',
          startime: '2021-1-9',
          firsttime: '2020-8-25',
          overtime: '2021-1-9',
          usetime: '120分钟',
          score: '59/100'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
    var that = this
    this.$axios.post(that.getApi(''))
  }
}
</script>
