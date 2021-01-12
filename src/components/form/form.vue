<template>
  <el-container>
    <el-header><v-nav></v-nav></el-header>
    <el-main>
      <div class="reportmain" style="width:70%; margin:0 auto">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><b>我的试卷</b></el-breadcrumb-item
          >
        </el-breadcrumb>
        <div>
          <div class="form-content-head" style="margin: 40px 0 0 0;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="从新到旧" name="newtoold"> </el-tab-pane>
              <el-tab-pane label="从旧到新" name="oldtonew"> </el-tab-pane>
            </el-tabs>
            <div class="form-content-head">
              <el-input
                placeholder="试卷名称"
                prefix-icon="el-icon-search"
                v-model="input2"
                style="width: 150px"
              >
              </el-input>
              <el-button
                type="primary"
                plain
                @click="CreatePaper"
                style="margin-left:20px"
                >新建试卷</el-button
              >
            </div>
          </div>
          <el-row :gutter="12" id="formid">
            <el-col
              :span="12"
              v-for="(item, key) in list"
              :key="key"
              @click="setItemPath($event)"
            >
              <el-card shadow="hover" class="form-card">
                <div class="form-card-content">
                  <b style="font-size:16px">试卷示例</b>
                  <p style="font-size:14px;color: #88949b">
                    swjhdbwauibfiwaukbf
                  </p>
                  <div class="form-content-head">
                    <p class="el-icon-refresh" style="font-size:14px">
                      2121-1-10
                    </p>
                    <p class="el-icon-time" style="font-size:14px">
                      限时60.0分钟
                    </p>
                    <p class="el-icon-s-order" style="font-size:14px">
                      满分100分
                    </p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
.form-content-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-card {
  background: url('https://cdn.eztest.org/static/img/bg-paper-list.png') 20px
    50% no-repeat;
  /* height: 198px; */
}
.form-card-content {
  padding-left: 40px;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
<script>
import nav from '@/components/tenant/nav'
export default {
  name: 'formid',
  components: {
    'v-nav': nav
  },
  data () {
    return {
      event: {
        detail: '/form/detail'
      },
      input2: '',
      activeName: 'newtoold',
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    CreatePaper () {
      this.$prompt('试卷名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '创建成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消创建'
          })
        })
    }
  }
}
</script>
