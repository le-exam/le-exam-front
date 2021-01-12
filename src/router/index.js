import Vue from 'vue'
import Router from 'vue-router'
import account from './account.js'
import content from './content.js'
import enrollment from './enrollment.js'
import schedule from './schedule.js'
import tenant from './tenant.js'
import Index from '@/components/Index'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ...account,
    ...content,
    ...enrollment,
    ...schedule,
    ...tenant
  ]
})
