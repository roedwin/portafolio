import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import EstudiosView from '../views/EstudiosView.vue'
import PortafolioView from '../views/PortafolioView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => HomeView
        },
        {
            path: '/estudios',
            name: 'estudios',
            component: () => EstudiosView
        },
        {
            path: '/portafolio',
            name: 'portafolio',
            component: () => PortafolioView
        },
    ]
})

export default router

