import Vue from 'vue'
import Router from 'vue-router'
import account from './account.js'
import content from './content.js'
import enrollment from './enrollment.js'
import schedule from './schedule.js'
import tenant from './tenant.js'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
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
