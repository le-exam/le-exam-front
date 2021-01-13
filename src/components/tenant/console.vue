<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-aside width="200px"><v-side></v-side></el-aside>
      <el-main>
        <div class="all" style="width: 100%">
          <el-row :gutter="2">
            <el-col :span="8"
              ><div class="grid-content bg-purple" style="min-height:300px">
                <div class="content-header">
                  <div
                    class="till-pull"
                    style="margin:40px 0 0 0; padding: 20px"
                  >
                    尊敬的
                    <span style="font-size: 18px; font-weight: 700;">{{
                      org.oname
                    }}</span
                    >用户
                    <span style="color: blue">{{ uname }}</span>
                    ，你好,
                    <br />感谢选择我们机构
                  </div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>
                </div>
                <el-divider></el-divider>
                <div class="tip clearfix">
                  <span class="pull-right" style="padding: 20px"
                    >业务合作及支持热线： 182-548-74523(工作日 9:00-17:00)</span
                  >
                </div>
              </div></el-col
            >
            <el-col :span="4"
              ><div class="grid-content bg-purple" style="height:300px">
                <div class="content-sty">
                  <div>在线考生统计</div>
                  <i class="el-icon-s-data" style="font-size:50px"></i>
                  <div>当前: {{ onlineCount }}</div>
                </div>
              </div></el-col
            >
            <el-col :span="4"
              ><div class="grid-content bg-purple" style="height:300px">
                <div class="content-sty">
                  <div>创建考生</div>
                  <i class="el-icon-s-check" style="font-size:50px"></i>
                  <div>今日: {{ todayCreateCount }}</div>
                </div>
              </div></el-col
            >
            <el-col :span="4"
              ><div class="grid-content bg-purple" style="height:300px">
                <div class="content-sty">
                  <div>完成考生</div>
                  <i class="el-icon-success" style="font-size:50px"></i>
                  <div>今日: {{ todayOverCount }}</div>
                </div>
              </div></el-col
            >
            <el-col :span="4"
              ><div class="grid-content bg-purple" style="height:300px">
                <div class="content-sty">
                  <div>完成报名</div>
                  <i class="el-icon-s-order" style="font-size:50px"></i>
                  <div>今日: {{ allOverCount }}</div>
                </div>
              </div></el-col
            >
          </el-row>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="exampersion">
              <div style="width:500px" class="exampersion">
                <span><b>考生数据分析</b></span>
                <span><i class="icon-circle-1"></i>新增人数</span>
                <span><i class="icon-circle-2"></i>完成人数</span>
                <span><i class="icon-circle-3"></i>报名人数</span>
              </div>
              <div>
                <el-select v-model="value" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
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
              <span>模板统计</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                class="el-icon-s-operation"
                >模板列表</el-button
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
.content-sty {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.dashboard-photo {
  height: 150px;
  width: 150px;
}
.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-circle-3 {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(255, 255, 255, 1);
  border: 3px solid rgba(255, 202, 127, 1);
  border-radius: 50%;
}
.icon-circle-2 {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(255, 255, 255, 1);
  border: 3px solid rgba(110, 210, 155, 1);
  border-radius: 50%;
}
.icon-circle-1 {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(255, 255, 255, 1);
  border: 3px solid rgba(64, 149, 247, 1);
  border-radius: 50%;
}
.exampersion {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border: 1px solid #ebebeb;
  border-radius: 3px;
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
  width: 100%;
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
      asideIndex: '1',
      onlineCount: 0,
      todayCreateCount: 0,
      todayOverCount: 0,
      allOverCount: 0,
      org: [],
      uname: ''
    }
  },
  components: {
    'v-nav': nav,
    'v-side': side
  },
  created () {
    this.uname = unescape(this.$cookieStore.getCookie('uname'))
    let oid = this.$cookieStore.getCookie('oid')
    let that = this
    this.$axios
      .get(that.getApi('/examinee/count/byOidStatus?oid=' + oid + '&status=2'))
      .then(function (response) {
        that.onlineCount = response
      })
    this.$axios
      .get(that.getApi('/examinee/count/today?oid=' + oid))
      .then(function (response) {
        that.todayCreateCount = response
      })
    this.$axios
      .get(
        that.getApi(
          '/examinee/count/today/byOidStatus?oid=' + oid + '&status=5'
        )
      )
      .then(function (response) {
        that.todayOverCount = response
      })
    this.$axios
      .get(that.getApi('/examinee/count/sum?oid=' + oid))
      .then(function (response) {
        that.allOverCount = response
      })
    let param = new URLSearchParams()
    param.append('uname', unescape(this.$cookieStore.getCookie('uname')))
    this.$axios.post(that.getApi('/selectorg'), param).then(function (response) {
      that.org = response[0]
    })
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
