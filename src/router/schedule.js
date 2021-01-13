// import HelloWorld from '@/components/HelloWorld'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'
import ScheduleIndex from '@/components/schedule/Index'
import ExamDetail from '@/components/schedule/Detail'
import ExamCreate from '@/components/schedule/Create'
import ExamLogin from '@/components/exam/Login'

let router = [
  // 这里写路由
  // {
  //   path: '/account',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }
  // 每个路由逗号分割
  {
    path: '/schedule/list/all',
    name: 'ScheduleIndex',
    component: ScheduleIndex
  },
  {
    path: '/schedule/exam/:eid',
    name: 'ExamDetail',
    component: ExamDetail
  },
  {
    path: '/schedule/create',
    name: 'ExamCreate',
    component: ExamCreate
  },
  {
    path: '/exam/:eid/login',
    name: 'ExamLogin',
    component: ExamLogin
  }
]

// 导出
export default router
