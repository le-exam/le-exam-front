// import HelloWorld from '@/components/HelloWorld'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'
import ScheduleIndex from '@/components/schedule/Index'

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
  }
]

// 导出
export default router
