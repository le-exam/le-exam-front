<template>
  <div class="block">
    <span class="demonstration" style="font-size:14px">创建时间:</span>
    <el-date-picker
      style="width:160px"
      v-model="value1"
      align="right"
      type="date"
      placeholder="开始时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <el-date-picker
      style="width:160px"
      v-model="value2"
      align="right"
      type="date"
      placeholder="结束时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <span class="demonstration" style="font-size:14px">首次登陆时间:</span>
    <el-date-picker
      style="width:160px"
      v-model="value3"
      align="right"
      type="date"
      placeholder="开始时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <el-date-picker
      style="width:160px"
      v-model="value4"
      align="right"
      type="date"
      placeholder="结束时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <span class="demonstration" style="font-size:14px">完成时间:</span>
    <el-date-picker
      style="width:160px"
      v-model="value5"
      align="right"
      type="date"
      placeholder="开始时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <el-date-picker
      style="width:160px"
      v-model="value6"
      align="right"
      type="date"
      placeholder="结束时间"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <br />
    <br />
    <i>共筛选出x条</i>
    <el-row style="float:right">
      <el-button type="primary" plain>筛选</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: ''
    }
  }
}
</script>
