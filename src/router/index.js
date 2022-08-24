import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Presents from '../views/Presents.vue'
import Local from '../views/Local.vue'
import Confirm from '../views/Confirm.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/local',
        name: 'Local',
        component: Local
    },
    {
        path: '/presents',
        name: 'Presents',
        component: Presents
    },
    {
        path: '/confirm',
        name: 'Confirm',
        component: Confirm
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router