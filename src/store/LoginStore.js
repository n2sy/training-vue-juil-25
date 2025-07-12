import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'

export const loggedStore = defineStore('login', {
  state: () => {
    isLogged: false
  },
  actions: {
    seConnecter() {
      const { data, error } = useFetch(`http://localhost:3000/users/1`)
      if (!error.value) {
        this.isLogged = true
        return true
      } else {
        return false
      }
    },
    inscription(credentials) {
      const { data, error } = useFetch(`http://localhost:3000/users/`, 'POST', {
        login: credentials.login,
        password: credentials.password,
      })
      if (!error.value) {
        return true
      } else {
        return false
      }
    },
    seDeconnecter() {
      this.isLogged = false
    },
  },
})
