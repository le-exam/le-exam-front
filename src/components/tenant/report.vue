<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="200px"><v-side></v-side></el-aside>
      <el-main
        ><div>
          <b>我的报告</b>
          <el-select
            style="float:right"
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="场次名称"
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
          <br />
          <br />
          <br />
        </div>
        <el-card class="box-card">
          <div class="text item">
            <span style="font-size:14px">报告类型：</span>
            <el-select v-model="value1" placeholder="全部" style="width:120px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span style="font-size:14px">试卷类型：</span>
            <el-select v-model="value2" placeholder="全部" style="width:150px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span style="font-size:14px">生成结果：</span>
            <el-select v-model="value3" placeholder="全部" style="width:120px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span class="demonstration" style="font-size:14px">报名时间:</span>
            <el-date-picker
              style="width:160px"
              v-model="value4"
              align="right"
              type="date"
              placeholder="开始时间"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
            <a>--</a>
            <el-date-picker
              style="width:160px"
              v-model="value5"
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
          <i style="float:right">共筛选出x条</i>
          <br />
        </el-card>
        <br />
        <br />
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="retype" label="报告类型" width="180">
            </el-table-column>
            <el-table-column prop="patype" label="试卷类型" width="180">
            </el-table-column>
            <el-table-column prop="gere" label="生成结果" width="180">
            </el-table-column>
            <el-table-column prop="getime" label="生成时间" width="180">
            </el-table-column>
            <el-table-column prop="examid" label="准考证号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="考生姓名" width="180">
            </el-table-column>
            <el-table-column prop="examses" label="考试场次" width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped></style>
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
      value4: '',
      value5: '',
      options: [],
      value1: '',
      value2: '',
      value3: '',
      tableData: [
        {
          retype: '',
          patype: '',
          gere: '',
          getime: '',
          examid: '',
          name: '',
          examses: ''
        }
      ],
      asideIndex: '4'
    }
  }
}
</script>
