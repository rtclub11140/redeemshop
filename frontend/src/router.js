import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import SummaryRewardsPage from './pages/SummaryRewardsPage.vue'

const routes = [
    {name: 'login', path: '/login', component: LoginPage},
    {name: 'home', path: '/', component: HomePage},
    {name: 'summary', path: '/summary', component: SummaryRewardsPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
