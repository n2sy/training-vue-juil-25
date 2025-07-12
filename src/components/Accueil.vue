<script setup>
import { loggedStore } from '@/store/LoginStore'
import BaseButton from '@/UI/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function clickHandler() {
  router.replace('accounts')
}

const login = loggedStore()
</script>

<template>
  <h4>Bienvenue parmi la communauté VUE.JS ...</h4>
  <hr />
  <h6>Navigation côté Template</h6>
  <RouterLink to="cv"> <BaseButton classe="btn-primary">Go To Cv </BaseButton></RouterLink>
  <hr />
  <h6>Navigation côté Script</h6>

  <BaseButton @click="clickHandler" classe="btn-danger">Go To Accounts </BaseButton>
  <hr />
  <button
    @click="login.seConnecter({ login: 'n@gmail.com', password: 'aze' })"
    class="btn btn-warning"
  >
    Login
  </button>
  <button class="btn btn-warning">Logout</button>
</template>
