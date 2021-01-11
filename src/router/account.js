import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import resetPassword from '@/components/resetPassword'
import resetPasswordDone from '@/components/resetPasswordDone'
import resetPasswordKey from '@/components/resetPasswordKey'
import resetPasswordDo from '@/components/resetPasswordDo'
import agreement from '@/components/Agreement'

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
    path: '/account/password/reset',
    name: 'resetPassword',
    component: resetPassword,
    meta: {
      title: '重置密码 | 乐考在线考试系统'
    }
  },
  {
    path: '/account/password/reset/done',
    name: 'resetPasswordDone',
    component: resetPasswordDone,
    meta: {
      title: '重置密码 | 乐考在线考试系统'
    }
  },
  {
    path: '/account/password/reset/key/:id',
    name: 'resetPasswordKey',
    component: resetPasswordKey,
    meta: {
      title: '重置密码 | 乐考在线考试系统'
    }
  },
  {
    path: '/account/password/reset/do',
    name: 'resetPasswordDo',
    component: resetPasswordDo,
    meta: {
      title: '重置密码 | 乐考在线考试系统'
    }
  },
  {
    path: '/account/agreement',
    name: 'Agreement',
    component: agreement,
    meta: {
      title: '用户服务协议 | 乐考在线考试系统'
    }
  }
]

export default router
