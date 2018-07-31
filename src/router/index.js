import Vue from 'vue'
import Router from 'vue-router'
import calender from '../components/buy/calender'
import choose from '../components/buy/choose'
import plantTicket from '../pages/planeTicket'
import planeTime from '../pages/planeTime'
import planePiao from '../pages/planePiao'
import planeOrder from '../pages/planeOrder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/planeTicket',
      name:'plantTicket',
      component: resolve => require(["../pages/planeTicket"],resolve)
    },
    {
      path: '/calender',
      name: 'calender',
      component: resolve => require(["../components/buy/calender"],resolve)
    },{
      path: '/choose',
      name: 'choose',
      component: resolve => require(["../components/buy/choose"],resolve)
    },{
      path:'/plantTicket',
      name:'plantTicket',
      component: resolve => require(["../pages/planeTicket"],resolve)
    },{
      path:'/planeTime',
      name:'planeTime',
      component: resolve => require(["../pages/planeTime"],resolve)
    },{
      path:'/planePiao',
      name:'planePiao',
      component: resolve => require(["../pages/planePiao"],resolve)
    },
    {
      path:'/planeOrder',
      name:'planeOrder',
      component: resolve => require(["../pages/planeOrder"],resolve)
    }
  ]
})
