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
                <el-tab-pane label="未开始" name="second"></el-tab-pane>
                <el-tab-pane label="考试中" name="third"></el-tab-pane>
                <el-tab-pane label="已过期" name="fourth"></el-tab-pane>
              </el-tabs>
              <div class="form-content-head">
                <el-input
                  placeholder="考试名称"
                  prefix-icon="el-icon-search"
                  v-model="input2"
                  style="width: 150px"
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
              <el-col
                :span="24"
                v-for="(item, key) in list"
                :key="key"
                @click="setItemPath($event)"
              >
                <el-card shadow="hover" class="form-card">
                  <div class="form-card-content">
                    <div class="form-content-head">
                      <b style="font-size:16px">试卷示例</b>
                      <div class="form-status status-ksz">已过期</div>
                    </div>
                    <div class="form-content-head">
                      <p style="font-size:14px;color: #88949b">
                        2021/01/09 14:00 - 2021/01/09 15:00
                      </p>
                      <div class="form-setting form-content-head"></div>
                    </div>
                    <div class="form-content-head">
                      <div class="form-card-content" style="font-size:12px;">
                        <span>试卷：试卷实例</span>
                        <span>报名：1111111</span>
                      </div>

                      <div class="form-content-head">
                        <div class="form-card-col">
                          <span style="font-size: 22px;">0</span>
                          <span style="font-size: 14px;">在线</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">0</span>
                          <span style="font-size: 14px;">在线</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">0</span>
                          <span style="font-size: 14px;">在线</span>
                        </div>
                        <div class="form-card-col">
                          <span style="font-size: 22px;">0</span>
                          <span style="font-size: 14px;">在线</span>
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
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    'v-nav': nav
  },
  created () {
    var that = this
    let param = new URLSearchParams()
    // param.append('oid', that.$cookieStore.getCookie('oid'))
    param.append('oid', '1')
    this.$axios
      .post(that.getApi('/exam/byoid'), param)
      .then(function (response) {})
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
      console.log(tab, event)
    },
    CreateExam () {
      return false
    }
  }
}
</script>
