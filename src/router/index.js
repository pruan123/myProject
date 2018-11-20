import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import area from '../page/area'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/area'
    },
    {
      path: '/HelloWorld',
      component: () => import('../components/HelloWorld'),
      children: [
        {
          path: 'demo',
          component: () => import('../page/demo')
        }
      ]
    }, {
      path: '/area',
      name: 'area',
      component: area
    }

  ]
})
