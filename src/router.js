import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './components/Accueil.vue'
import Cv from './project/Cv.vue'
import ManageServers from './manage-servers/ManageServers.vue'
import HomeAccounts from './accounts/HomeAccounts.vue'
import Infos from './project/Infos.vue'
import AddCandidat from './project/AddCandidat.vue'
import Login from './project/Login.vue'
import { loggedStore } from './store/LoginStore'
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
    beforeEnter: (to, from) => {
      let logStore = loggedStore()
      if (logStore.isLogged) return true
      return false
    },
  },
  {
    path: '/cv/:id',
    name: 'infos',
    component: Infos,
  },
  {
    path: '/cv/add',
    name: 'ajout',
    component: AddCandidat,
  },
  {
    path: '/servers',
    component: ManageServers,
  },
  {
    path: '/accounts',
    component: HomeAccounts,
  },
  {
    path: '/login',
    component: Login,
  },
]

const MY_ROUTES = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default MY_ROUTES
