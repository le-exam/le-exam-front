import form from '@/components/form'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'

let router = [
  // 这里写路由
  {
    path: '/content',
    name: 'form',
    component: form
  }
  // 每个路由逗号分割
]

// 导出
export default router
