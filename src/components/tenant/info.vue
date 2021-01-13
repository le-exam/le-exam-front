<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <div style="margin-top: 20px">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <side-menu></side-menu>
          </div>
        </el-col>
        <el-col :span="12" style="padding: 20px">
          <div class="grid-content bg-purple-light">
            <el-row :gutter="20">
              <el-col :span="6" :offset="0">
                <div class="grid-content bg-purple">
                  <h4>机构信息</h4>
                  <div class="demo-image" style="margin-left: 30px">
                    <div class="block" v-for="fit in fits" :key="fit">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :fit="fit"></el-image>
                    </div>
<!--                    <el-button @click="upimg" style="margin-left: 10px;margin-top: 10px" size="mini" type="primary" round>上传头像</el-button>-->
                    <el-upload
                      name="img"
                      class="upload-demo"
                      action="http://localhost:8088/upload"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      :on-success="onSuccess"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed">
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                  </div>
                </div>
              </el-col>
              <el-col :span="1" :offset="0">
                <div style="height: 300px;border-right: 1px solid black"></div>
              </el-col>
              <el-col :span="16" :offset="0">
                <div class="grid-content bg-purple">
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="机构类型">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="机构名称">
                      <el-input v-model="form.oname"></el-input>
                    </el-form-item>
                    <el-form-item label="网站URL">
                      <el-input v-model="form.url"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">保存</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
import sidemenu from '@/components/tenant/side-menu'
import nav from '@/components/tenant/nav'

export default {
  name: 'info',
  components: {
    'side-menu': sidemenu,
    'v-nav': nav
  },
  data () {
    return {
      fits: ['fill'],
      url: 'http://localhost:8088/upload/images/default.jpeg',
      form: {
        oname: '',
        url: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '0',
        label: '学校'
      }, {
        value: '1',
        label: '企业'
      }, {
        value: '2',
        label: '其他'
      }],
      value: '0'
    }
  },
  created () {
    let _this = this
    let uname = this.$cookieStore.getCookie('uname')
    this.$axios
      .post(_this.getApi('/selectorg?uname=' + uname))
      .then(function (response) {
        let date = response[0]
        _this.value = date.type + ''
        _this.form.oname = date.oname
        _this.form.url = date.url
        // eslint-disable-next-line eqeqeq
        if (date.logo != '') {
          _this.url = 'http://localhost:8088/' + date.logo
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    onSubmit () {
      let _this = this
      let uname = this.$cookieStore.getCookie('uname')
      let param = new URLSearchParams()
      param.append('uname', uname)
      param.append('oname', _this.form.oname)
      param.append('type', _this.value)
      param.append('url', _this.form.url)
      _this.$axios
        .post(_this.getApi('/updateorg'), param)
        .then(function (response) {
          // eslint-disable-next-line eqeqeq
          if (response == 'Change the success') {
            _this.$message.success('保存成功')
          }
        })
        .catch(function (error) {
          console.log(error)
          _this.$message.error('保存失败')
        })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    onSuccess (response, file, fileList) {
      this.url = 'http://localhost:8088/' + response
      let uname = this.$cookieStore.getCookie('uname')
      let _this = this
      this.$axios
        .get(_this.getApi('/org/updatelogo?uname=' + uname + '&logo=' + response))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
