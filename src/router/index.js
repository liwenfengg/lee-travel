import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import City from '../views/City.vue'
// import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }
]

const scrollBehavior = function (to, from, savedPosition) {
  return { x: 0, y: 0 }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})

export default router
