import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import resetPassword from '@/components/resetPassword'

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
      title: '登录 | 乐考在线考试系统'
    }
  },
  {
    path: '/account/signup',
    name: 'signup',
    component: SignUp,
    meta: {
      title: '登录 | 乐考在线考试系统'
    }
  },
  {
    path: '/accounts/password/reset',
    name: 'resetPassword',
    component: resetPassword,
    meta: {
      title: '重置密码 | 乐考在线考试系统'
    }
  }
]

export default router
