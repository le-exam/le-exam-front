import form from '@/components/form/form'
import detail from '@/components/form/detail'
import app from '@/components/form/app'
// 上面先引用vue文件，语法类似上面
// import **** from '@/components/****'

let router = [
  // 这里写路由
  {
    path: '/content',
    name: 'form',
    component: form
  },
  {
    path: '/content/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/content/app',
    name: 'app',
    component: app
  }
  // 每个路由逗号分割
]

// 导出
export default router
