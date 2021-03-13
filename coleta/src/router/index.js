import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Colabore from '../views/FormColab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Colabore',
    name: 'Colabore',
    component: Colabore
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
