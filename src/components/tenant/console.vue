<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="200px"><v-side></v-side></el-aside>
      <el-main>
        <div class="all" style="width:1260px">
          <el-row :gutter="2">
            <el-col :span="8"
              ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></el-col>
          </el-row>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span><b>考生数据分析</b></span>
              <span>新增人数</span>
              <span>完成人数</span>
              <span>报名人数</span>
              <template>
                <el-select v-model="value" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </div>
            <div v-for="o in 0" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <br />
        <div>
          <el-row :gutter="20">
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-card class="box-card1">
                  <div slot="header" class="clearfix">
                    <span><b>今日考试</b></span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >考生入口</el-button
                    >
                  </div>
                  <div v-for="o in 0" :key="o" class="text item">
                    {{ '列表内容 ' + o }}
                  </div>
                </el-card>
              </div></el-col
            >
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-card class="box-card2">
                  <div slot="header" class="clearfix">
                    <span>今日报名</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >报名主页</el-button
                    >
                  </div>
                  <div v-for="o in 0" :key="o" class="text item">
                    {{ '列表内容 ' + o }}
                  </div>
                </el-card>
              </div></el-col
            >
          </el-row>
        </div>
        <div>
          <el-card class="box-card3">
            <div slot="header" class="clearfix">
              <span><b>更新试卷</b></span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >试卷列表</el-button
              >
            </div>
            <div v-for="o in 0" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <br />
        <div>
          <el-row :gutter="20">
            <el-col :span="10"
              ><div class="grid-content bg-purple">
                <el-card class="box-card4" style="width:500px;height:300px">
                  <div slot="header" class="clearfix">
                    <span>题库统计</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >题库列表</el-button
                    >
                  </div>
                  <div v-for="o in 0" :key="o" class="text item">
                    {{ '列表内容 ' + o }}
                  </div>
                </el-card>
              </div></el-col
            >
            <el-col :span="7"
              ><div class="grid-content bg-purple">
                <el-card class="box-card5" style="height:300px">
                  <div slot="header" class="clearfix">
                    <span>报名统计</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >报名列表</el-button
                    >
                  </div>
                  <div v-for="o in 0" :key="o" class="text item">
                    {{ '列表内容 ' + o }}
                  </div>
                </el-card>
              </div></el-col
            >
            <el-col :span="7"
              ><div class="grid-content bg-purple">
                <el-card class="box-card5" style="height:300px">
                  <div slot="header" class="clearfix">
                    <span>考试统计</span>
                    <el-button style="float: right; padding: 3px 0" type="text"
                      >考试列表</el-button
                    >
                  </div>
                  <div v-for="o in 0" :key="o" class="text item">
                    {{ '列表内容 ' + o }}
                  </div>
                </el-card>
              </div></el-col
            >
          </el-row>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              >
            </div>
            <div v-for="o in 0" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.bg-purple {
  background: #d3dce6;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.box-card3 {
  height: 200px;
}
.box-card1 {
  height: 300px;
}
.box-card2 {
  height: 300px;
}
.el-row {
  margin-bottom: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
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
  width: 1260px;
  height: 450px;
}
.all {
  height: 376px;
  width: 1035px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
  height: 300px;
}
.bg-purple-light1 {
  background: #e5e9f2;
  height: 300px;
}
</style>

<script>
import nav from '@/components/tenant/nav'
import side from '@/components/tenant/side'
export default {
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '近七日考生数据分析'
        },
        {
          value: '选项2',
          label: '一个月考生数据分析'
        },
        {
          value: '选项3',
          label: '一年考生数据分析'
        }
      ],
      value: '',
      asideIndex: '1'
    }
  },
  components: {
    'v-nav': nav,
    'v-side': side
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
