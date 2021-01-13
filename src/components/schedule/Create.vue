<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-container>
      <el-main>
        <div class="inner">
          <el-steps :active="active" finish-status="success">
            <el-step title="基本信息"></el-step>
            <el-step title="选择试卷"></el-step>
            <el-step title="个人信息"></el-step>
            <el-step title="考试配置"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>

          <div class="main" v-if="active === 0">
            <el-form
              :model="firstForm"
              :rules="firstRules"
              ref="firstForm"
              label-width="80px"
            >
              <el-form-item label="考试名称" prop="ename">
                <el-input v-model="firstForm.ename" prop="ename"></el-input>
              </el-form-item>
              <el-form-item label="考试时间" prop="time">
                <el-date-picker
                  v-model="firstForm.time"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="考试设置">
                <el-checkbox-group v-model="firstForm.login_in_advance">
                  <el-checkbox label="提前登录" name="login_in_advance"
                    >提前登录：开考前<el-input
                      size="small"
                      v-model="firstForm.login_in_advance_n"
                      style="width: 100px"
                      @input="NumberInput"
                      type="number"
                    ></el-input
                    >分钟，考生可以登录系统，确认信息及拍照。</el-checkbox
                  >
                </el-checkbox-group>
                <el-checkbox-group v-model="firstForm.restricted_login">
                  <el-checkbox label="限制迟到" name="restricted_login"
                    >限制迟到：开考后<el-input
                      size="small"
                      v-model="firstForm.restricted_login_n"
                      style="width: 100px"
                      @input="NumberInput"
                      type="number"
                    ></el-input
                    >分钟，不允许考生入场，考中退出的考生不受此影响。</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="欢迎语">
                <el-input
                  type="textarea"
                  v-model="firstForm.welcome_msg"
                ></el-input>
              </el-form-item>
              <el-button
                style="margin-top: 12px;"
                @click="FirstNext('firstForm')"
                >下一步</el-button
              >
            </el-form>
          </div>
          <div class="main" v-if="active === 1">
            <div style="text-align: center">
              <el-transfer
                style="text-align: left; display: inline-block"
                v-model="value"
                filterable
                :render-content="renderFunc"
                :titles="['备选栏', '已选栏']"
                :button-texts="['移除', '添加']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="testPaperData"
              >
                <el-button
                  class="transfer-footer"
                  slot="left-footer"
                  size="small"
                  >操作</el-button
                >
                <el-button
                  class="transfer-footer"
                  slot="right-footer"
                  size="small"
                  >操作</el-button
                >
              </el-transfer>
            </div>
            <el-button style="margin-top: 12px;" @click="SecondPrev"
              >上一步</el-button
            >
            <el-button style="margin-top: 12px;" @click="SecondNext"
              >下一步</el-button
            >
          </div>
          <div class="main" v-if="active === 2">
            <div style="text-align: center">
              <el-transfer
                style="text-align: left; display: inline-block"
                v-model="value2"
                filterable
                :render-content="renderFunc"
                :titles="['备选信息', '已选信息']"
                :button-texts="['移除', '添加']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="infoData"
              >
                <el-button
                  class="transfer-footer"
                  slot="left-footer"
                  size="small"
                  >操作</el-button
                >
                <el-button
                  class="transfer-footer"
                  slot="right-footer"
                  size="small"
                  >操作</el-button
                >
              </el-transfer>
            </div>
            <el-button style="margin-top: 12px;" @click="ThirdPrev"
              >上一步</el-button
            >
            <el-button style="margin-top: 12px;" @click="ThirdNext"
              >下一步</el-button
            >
          </div>
          <div class="main" v-if="active === 3">
            <el-form :model="fourthForm" ref="fourthForm" label-width="auto">
              <el-form-item>
                <el-checkbox-group v-model="fourthForm.e_sign_up">
                  <el-checkbox label="即报即考" name="e_sign_up">
                    <b>即报即考：</b>
                    <p>允许考生自主进行注册报名，然后马上开始考试。</p>
                    <p>
                      未勾选时，只有取得准考证的考生（管理员录入的考生）才可参加考试。
                    </p>
                  </el-checkbox>
                </el-checkbox-group>
                <el-divider></el-divider>
                <el-checkbox-group v-model="fourthForm.e_practice_mode">
                  <el-checkbox label="练习模式" name="e_practice_mode">
                    <b>练习模式：</b>
                    <p>考生每作答一题即可查看该题的答案和解析。</p>
                    <p>
                      练习模式下试卷的选项乱序功能将失效。目前仅支持标准的单选、多选和判断题。
                    </p>
                  </el-checkbox>
                </el-checkbox-group>
                <el-divider></el-divider>
                <el-checkbox-group v-model="fourthForm.e_ommitment">
                  <el-checkbox label="考试承诺书" name="e_ommitment">
                    <b>考试承诺书：</b>
                    <p>考生承诺遵守以下内容，方可进入考试。</p>
                    <p>
                      考生在登录考试后，需同意以下内容方可进入考试。
                    </p>
                    <el-input
                      type="textarea"
                      v-model="fourthForm.e_ommitment_body"
                    ></el-input>
                  </el-checkbox>
                </el-checkbox-group>
                <el-divider></el-divider>
                <el-checkbox-group v-model="fourthForm.e_locked_exam">
                  <el-checkbox label="锁定考试" name="e_locked_exam">
                    <b>锁定考试：</b>
                    <p>
                      记录考生登录考试次数，只允许登录<el-input
                        size="small"
                        v-model="fourthForm.e_locked_exam_n"
                        style="width: 100px"
                        @input="NumberInput"
                        type="number"
                      ></el-input>
                      次。
                    </p>
                    <p>
                      当登录考试次数超过设定次数，系统会阻止此考生登录考试。
                    </p>
                  </el-checkbox>
                </el-checkbox-group>
                <el-divider></el-divider>
                <el-checkbox-group v-model="fourthForm.e_view_results">
                  <el-checkbox label="查看成绩" name="e_view_results">
                    <b>查看成绩：</b>
                    <p>允许考生可在答题结束后查看考试结果。</p>
                    <p>
                      未勾选时，考生成绩结果不可查询。
                    </p>
                  </el-checkbox>
                </el-checkbox-group>
                <el-divider></el-divider>
              </el-form-item>
              <el-button
                style="margin-top: 12px;"
                @click="FourthPrev('fourthForm')"
                >上一步</el-button
              >
              <el-button
                style="margin-top: 12px;"
                @click="FourthNext('fourthForm')"
                >下一步</el-button
              >
            </el-form>
          </div>
          <div class="main" v-if="active === 4">
            <h3 style="color: #409EFF">11111111</h3>
            <div class="flex-row">
              <h4>登录时间段：</h4>
              2021/01/12 00:00 - 2021/01/21 23:43
            </div>
            <div class="flex-row">
              <h4>选择试卷：</h4>
              范德萨额为我
            </div>
            <div class="flex-row">
              <h4>个人信息：</h4>
              <span
                class="exam-do"
                v-for="(item, key) in infoData"
                :key="key"
                >{{ item.label }}</span
              >
            </div>
            <div class="flex-row">
              <h4>考试配置：</h4>
              <span
                class="exam-do"
                v-for="(item, key) in infoData"
                :key="key"
                >{{ item.label }}</span
              >
            </div>
            <el-divider></el-divider>
            <el-button type="primary" @click="FinishCreate">完成</el-button>
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
.main {
  margin-top: 40px;
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
.flex-row {
  display: flex;
  align-items: center;
}
</style>

<script>
import nav from '@/components/tenant/nav'
export default {
  data () {
    return {
      active: 0,
      firstForm: {
        ename: '',
        time: '',
        login_in_advance: 0,
        login_in_advance_n: 0,
        restricted_login: 0,
        restricted_login_n: 0,
        welcome_msg: ''
      },
      firstRules: {
        ename: [
          { required: true, message: '请输入考试名称', trigger: 'blur' },
          { min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'blur' }
        ],
        time: [{ required: true, message: '请选择考试时间', trigger: 'blur' }]
      },
      testPaperData: [],
      renderFunc (h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        )
      },
      value: [],
      testPaperRes: [],
      testPaperList: '',
      infoData: [
        {
          key: 1,
          label: '姓名'
        },
        {
          key: 2,
          label: '邮箱'
        },
        {
          key: 3,
          label: '手机号码'
        },
        {
          key: 4,
          label: '性别'
        },
        {
          key: 5,
          label: '身份证号'
        },
        {
          key: 6,
          label: '年龄'
        },
        {
          key: 7,
          label: '毕业院校'
        }
      ],
      value2: [1, 2, 3, 4, 5],
      infoList: [],
      fourthForm: {
        e_sign_up: 0,
        e_practice_mode: 0,
        e_ommitment: 0,
        e_ommitment_body: '',
        e_locked_exam: 0,
        e_locked_exam_n: 0,
        e_view_results: 0
      }
    }
  },
  components: {
    'v-nav': nav
  },
  created () {
    let that = this
    this.$axios
      .get(that.getApi('/testpaper/byoid'), {
        params: { oid: that.$cookieStore.getCookie('oid') }
      })
      .then(function (response) {
        that.testPaperRes = response
        let tpdata = []
        for (let i = 0; i < response.length; i++) {
          tpdata.push({
            key: response[i]['tpid'],
            label: response[i]['tpname']
          })
        }
        that.testPaperData = tpdata
      })
  },
  methods: {
    previous () {
      if (this.active-- < 1) return false
    },
    next () {
      if (this.active++ > 4) return false
    },
    handleChange (value, direction, movedKeys) {
      // console.log(value, direction, movedKeys)
      return false
    },
    NumberInput (event) {
      if (Number.parseInt(event) < 0) {
        this.firstForm.login_in_advance_n = 0
      } else if (Number.parseInt(event) >= 60) {
        this.firstForm.login_in_advance_n = 60
      }
    },
    getTime (d) {
      let yy = d.getFullYear()
      var mm = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
      var dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
      let hh = d.getHours()
      let mf = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
      let ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
      let gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
      return gettime
    },
    FirstNext (firstForm) {
      this.$refs[firstForm].validate(valid => {
        if (valid) {
          this.next()
          // console.log(this.firstForm)
        } else {
          this.$message({
            message: '请输入合法的信息。',
            type: 'error'
          })
          return false
        }
      })
    },
    SecondPrev () {
      this.previous()
    },
    SecondNext () {
      if (this.value.length === 0) {
        this.$message({
          message: '请至少选择一张试卷。',
          type: 'error'
        })
      } else {
        this.testPaperList = JSON.stringify(this.value)
        this.next()
      }
    },
    ThirdPrev () {
      this.previous()
    },
    ThirdNext () {
      if (this.value2.length === 0) {
        this.$message({
          message: '请至少选择一条收集信息。',
          type: 'error'
        })
      } else {
        let infoJson = []
        for (let i = 0; i < this.infoData.length; i++) {
          for (let j = 0; j < this.value2.length; j++) {
            if (this.infoData[i]['key'] === this.value2[j]) {
              infoJson.push(this.infoData[i]['label'])
            }
          }
        }
        this.infoList = JSON.stringify(infoJson)
        this.next()
      }
    },
    FourthPrev () {
      this.previous()
    },
    FourthNext () {
      let data = {
        ename: this.firstForm.ename,
        startTime: this.getTime(this.firstForm['time'][0]),
        endTime: this.getTime(this.firstForm['time'][1]),
        loginInAdvance:
          this.firstForm['login_in_advance'] === true
            ? Number.parseInt(this.firstForm['login_in_advance_n'])
            : 0,
        restrictedLogin:
          this.firstForm['restricted_login'] === true
            ? Number.parseInt(this.firstForm['restricted_login_n'])
            : 0,
        welcomeMsg: this.firstForm['welcome_msg'],
        testPaper: this.testPaperList,
        personalInfo: this.infoList,
        eSignUp: this.fourthForm.e_sign_up === true ? 1 : 0,
        ePracticeMode: this.fourthForm.e_practice_mode === true ? 1 : 0,
        eOmmitment: this.fourthForm.e_ommitment === true ? 1 : 0,
        eOmmitmentBody: this.fourthForm.e_ommitment_body,
        eLockedExam:
          this.fourthForm.e_locked_exam === true
            ? Number.parseInt(this.fourthForm.e_locked_exam_n)
            : 0,
        eViewResults: this.fourthForm.e_view_results === true ? 1 : 0
      }
      let that = this
      this.$axios
        .post(that.getApi('/exam/insert'), data)
        .then(function (response) {
          console.log(response)
          this.$message({
            message: '新增考试 ' + that.firstForm.ename + ' 成功！',
            type: 'success'
          })
        })
      this.next()
    },
    FinishCreate () {
      this.$router.push('/schedule/list/all')
    }
  }
}
</script>
