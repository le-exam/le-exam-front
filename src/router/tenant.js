import console from '@/components/tenant/console'
import exam from '@/components/tenant/exam'
import examup from '@/components/tenant/examup'
import report from '@/components/tenant/report'

import info from '@/components/tenant/info'
import account from '@/components/tenant/account'
import changepassword from '@/components/tenant/change-password'

// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'

let router = [
  // 这里写路由
  {
    path: '/tenant',
    name: 'console',
    component: console
  },
  {
    path: '/tenant/entries',
    name: 'exam',
    component: exam
  },
  {
    path: '/tenant/candidates',
    name: 'examup',
    component: examup
  },
  {
    path: '/tenant/reports',
    name: 'report',
    component: report
  },
  {
    path: '/tenant/info/',
    name: 'info',
    component: info
  },
  {
    path: '/tenant/account/',
    name: 'account',
    component: account
  },
  {
    path: '/tenant/changepassword/',
    name: 'changepassword',
    component: changepassword
  }
]

// 导出
export default router
