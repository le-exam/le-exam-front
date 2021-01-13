import form from '@/components/form/form'
import detail from '@/components/form/detail'
import questionbank from '@/components/entername/questionbank'
import minutiae from '@/components/entername/minutiae'
import management from '@/components/entername/management'
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
    path: '/content/detail/:tpid',
    name: 'detail',
    component: detail
  },
  {
    path: '/content/form/list',
    name: 'questionbank',
    component: questionbank
  },
  {
    path: '/content/form/list/particulars/:qbid',
    name: 'minutiae',
    component: minutiae
  },
  {
    path: '/content/form/list/management/:qbid',
    name: 'management',
    component: management
  }
  // 每个路由逗号分割
]

// 导出
export default router
