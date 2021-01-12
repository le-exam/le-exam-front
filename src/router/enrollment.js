// import HelloWorld from '@/components/HelloWorld'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'
import enrollmentIndex from '@/components/enrollment/Index'

let router = [
  // 这里写路由
  // {
  //   path: '/account',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }
  // 每个路由逗号分割
  {
    path: '/enrollment/list/all',
    name: 'enrollmentIndex',
    component: enrollmentIndex
  }
]

// 导出
export default router
