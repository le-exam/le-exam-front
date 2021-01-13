<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="200px"><v-side></v-side></el-aside>
      <el-main
        ><div>
          <b>我是报名考生</b>
          <el-select
            style="float:right"
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="姓名/手机号"
          >
          </el-select>
        </div>
        <br />
        <br />
        <el-card class="box-card">
          <div class="text item">
            <span class="demonstration" style="font-size:14px">报名时间:</span>
            <el-date-picker
              style="width:160px"
              v-model="value1"
              align="right"
              type="date"
              placeholder="开始时间"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
            <a>--</a>
            <el-date-picker
              style="width:160px"
              v-model="value2"
              align="right"
              type="date"
              placeholder="开始时间"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
            <el-row style="float:right">
              <el-button type="primary" plain>筛选</el-button>
            </el-row>
          </div>
          <br />
          <a style="float:right">共筛选X条记录</a>
          <br />
        </el-card>
        <br />
        <br />
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="256">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="256">
            </el-table-column>
            <el-table-column prop="sname" label="报名名称" width="256">
            </el-table-column>
            <el-table-column prop="up" label="报名科目" width="256">
            </el-table-column>
            <el-table-column prop="startTime" label="报名时间" width="256">
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import nav from '@/components/tenant/nav'
import side from '@/components/tenant/side'
export default {
  components: {
    'v-nav': nav,
    'v-side': side
  },
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: '',
      value: '',
      tableData: [],
      asideIndex: '3'
    }
  },
  created () {
    let oid = this.$cookieStore.getCookie('oid')
    let that = this
    let param = new URLSearchParams()
    param.append('oid', oid)
    this.$axios
      .post(that.getApi('/selectsignup'), param)
      .then(function (response) {
        console.log(response)
        that.tableData = response
      })
      .catch(function (error) {
        console.log(error)
        // 失败后调用代码
      })
  }
}
</script>
