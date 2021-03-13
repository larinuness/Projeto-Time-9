import Vue from 'vue'
import VueRouter from 'vue-router'
import Colabore from '../views/FormColab.vue'
import Home from '../views/Home.vue'
import PontosColeta from '../views/PontosDeColeta.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/PontosColeta',
        name: 'PontosColeta',
        component: PontosColeta
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