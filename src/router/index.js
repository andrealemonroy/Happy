import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/registro',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/register.vue')
    }
  },
  // {
  //   path: '/address',
  //   name: 'address',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/address.vue')
  //   }
  // },
  // {
  //   path: '/registerParent',
  //   name: 'registerParent',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/registerParent.vue')
  //   }
  // },
  // {
  //   path: '/registerChild',
  //   name: 'registerChild',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/registerChild.vue')
  //   }
  // },
  // {
  //   path: '/addChild',
  //   name: 'addChild',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/addChild.vue')
  //   }
  // },
  // {
  //   path: '/listOfChilds',
  //   name: 'listOfChilds',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/listOfChilds.vue')
  //   }
  // },
  // {
  //   path: '/contract',
  //   name: 'contract',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/contract.vue')
  //   }
  // },
  {
    path: '/searchAccount',
    name: 'searchAccount',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/searchAccount.vue')
    }
  },
  {
    path: '/parents',
    name: 'parents',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Parents.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
