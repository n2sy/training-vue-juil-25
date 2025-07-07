import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './components/Accueil.vue'
import Cv from './project/Cv.vue'
import ManageServers from './manage-servers/ManageServers.vue'
import HomeAccounts from './accounts/HomeAccounts.vue'
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Accueil,
  },
  {
    path: '/cv',
    name: 'project',
    component: Cv,
  },
  {
    path: '/servers',
    component: ManageServers,
  },
  {
    path: '/accounts',
    component: HomeAccounts,
  },
]

const MY_ROUTES = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default MY_ROUTES
