import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'

let router = [
  {
    path: '/account',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      title: '你好'
    }
  },
  {
    path: '/account/signin',
    name: 'signin',
    component: SignIn,
    meta: {
      title: '登录 | 乐考在线考生系统'
    }
  }
]

export default router
