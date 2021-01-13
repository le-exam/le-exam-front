<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <div class="le-body">
        <div class="wrap-home-page clearfix">
          <div class="wrap-banner-center">
            <div class="container text-center">
              <div class="title2">灵活便捷的考试管理</div>
              <p class="font-18 mt50 mb50">
                乐考采用saas模式提供服务，客户可以自己在线创建和管理考试，并实时监控考试的数据变化。考生可以通过浏览器或微信扫码答题，也可以即报即考参加考试，报名考试一站完成。
              </p>
              <a href="/home/product/" class="font-16 txt-gray txt-underline"
                >了解详细&gt;</a
              >
            </div>
          </div>
          <div class="apply-wrap">
            <div class="container">
              <h3 class="title2 text-center">多场景多类型考试应用</h3>
              <div class="row">
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">社会招聘考试</div>
                  <p class="font-16 mt20 mb20">
                    候选人等候时面试可手机扫码参加笔试，系统实时生成结果，一个简单的考核就可让面试官提前了解候选人的能力情况。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
                <div class="col-xs-6">
                  <div class="apply-img apply-1"></div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6">
                  <div class="apply-img apply-2"></div>
                </div>
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">大规模校园招聘</div>
                  <p class="font-16 mt20 mb20">
                    招聘会上公布考试地址，考生现场完成考试，现场出分，主办方可快速筛选合格考生参加面试，大大缩短招聘周期和成本。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">员工晋升考核</div>
                  <p class="font-16 mt20 mb20">
                    员工专业技能是否达标，员工素质测评，安排一场考试即可对员工是否晋升进行有理的判断。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
                <div class="col-xs-6">
                  <div class="apply-img apply-3"></div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6">
                  <div class="apply-img apply-4"></div>
                </div>
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">培训认证考核</div>
                  <p class="font-16 mt20 mb20">
                    培训机构结业认证考核，行业从业资格认证，能力认证考核等，乐考提供从考生付费报名到参加考试的全流程功能。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">入学水平测试</div>
                  <p class="font-16 mt20 mb20">
                    学生入学前在家即可完成其水平测试，为学校的分级工作和针对性教育提供参考依据。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
                <div class="col-xs-6">
                  <div class="apply-img apply-5"></div>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6">
                  <div class="apply-img apply-6"></div>
                </div>
                <div class="col-xs-6 apply-des">
                  <div class="blue-line"></div>
                  <div class="title3">随堂练习检测</div>
                  <p class="font-16 mt20 mb20">
                    教师可以在乐考上方便的发布一场班级内的小练习，学生可以随堂参加测试，并在系统上查看自己的答卷和详细的试题解析。
                  </p>
                  <a class="btn-radius" href="/accounts/signup/">免费试用</a>
                </div>
              </div>
            </div>
          </div>

          <div class="wrap-evaluation" id="particles-js">
            <div class="container text-center">
              <div class="title2 white">
                人才测评和能力考核，一场考试即可搞定
              </div>
              <p class="font-18 white">
                乐考支持saville全类型的测评报告，组织者可以根据需求生成不同的测评报告，考生可以在一场考试中完成素质测评和能力考核，减少考生重复参加考试的成本。
              </p>
              <a href="/home/evaluation/">了解更多人才测评相关&gt;</a>
            </div>
            <canvas
              class="particles-js-canvas-el"
              width="1485"
              height="500"
              style="width: 100%; height: 100%;"
            ></canvas>
          </div>
        </div>
      </div>
    </el-main>
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.eztest.org/static/css/index-pc.css?_version=223"
      /><link
        rel="stylesheet"
        href="https://cdn.eztest.org/static/css/admin.css?_version=223"
      /><link
        rel="stylesheet"
        href="https://cdn.eztest.org/static/lib/bootstrap-3.3.5-dist/css/bootstrap.min.css?_version=223"
      /><link
        rel="stylesheet"
        href="https://cdn.eztest.org/static/css/index-pc.css?_version=223"
      />
    </div>
  </el-container>
</template>

<script>
import header from '@/components/Header'
export default {
  name: 'Index',
  components: {
    'v-header': header
  }
}
</script>

<style scoped>
.le-title {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 20px;
}
.le-body {
  width: 100%;
  height: 80vh;
}
.le-h1 {
  margin-top: 5rem;
  font-size: 2.2rem;
  font-family: 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI',
    'Microsoft Yahei', '微软雅黑', Tahoma, Arial, STHeiti, sans-serif;
  color: #409eff;
}
</style>
