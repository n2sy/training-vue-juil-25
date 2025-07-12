<script setup>
import { useFetch } from '@/composables/useFetch'
import { loggedStore } from '@/store/LoginStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let showLogin = ref(true)
let inpLogin = ref('')
let inpPwd = ref('')
let router = useRouter()

const logStore = loggedStore()

function submitHandler(e) {
  //console.log(e)
  console.log(showLogin.value)

  if (!showLogin.value) {
    let res = logStore.inscription({
      login: inpLogin.value,
      password: inpPwd.value,
    })

    if (res) {
      alert('Inscription réussie')
      showLogin.value = !showLogin.value
    } else {
      alert('Connexion impossible')
    }
  } else {
    let res = logStore.seConnecter()
    if (res) {
      alert('Connexion réussie')
      router.replace('/cv')
    } else {
      alert('Connexion impossible')
    }
  }
}
</script>
<template>
  <form @submit.prevent="submitHandler">
    <label for="">Login</label>
    <input type="text" class="form-control" v-model="inpLogin" />
    <label for="">Mot de passe</label>
    <input type="text" class="form-control" v-model="inpPwd" />

    <br />
    <div class="row">
      <div class="col-6 offset-3" v-if="showLogin">
        <button type="submit" v-if="showLogin" class="btn btn-info">Se connecter</button>
        <button @click="showLogin = !showLogin" v-if="showLogin" class="btn btn-danger">
          Switch to Register
        </button>
      </div>
      <div class="col-6 offset-3" v-else>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
        <button @click="showLogin = !showLogin" class="btn btn-dark">Switch to Login</button>
      </div>
    </div>
  </form>
</template>
