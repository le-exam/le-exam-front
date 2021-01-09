import console from '@/components/console'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'

let router = [
  // 这里写路由
  {
    path: '/tenant',
    name: 'console',
    component: console
  }
  // 每个路由逗号分割
]

// 导出
export default router
