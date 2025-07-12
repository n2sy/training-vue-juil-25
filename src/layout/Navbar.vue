<script setup>
import { loggedStore } from '@/store/LoginStore'
import { RouterLink } from 'vue-router'

let logStore = loggedStore()
</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link" aria-current="page">Accueil </RouterLink>
    </li>
    <li v-if="logStore.isLogged" class="nav-item">
      <RouterLink :to="{ name: 'project' }" class="nav-link">Projet</RouterLink>
    </li>
    <li v-if="logStore.isLogged" class="nav-item">
      <RouterLink :to="{ name: 'ajout' }" class="nav-link">Ajout</RouterLink>
    </li>
    <li v-if="logStore.isLogged" class="nav-item">
      <RouterLink to="/accounts" class="nav-link">Accounts</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="servers" class="nav-link">Servers</RouterLink>
    </li>
    <li v-if="!logStore.isLogged" class="nav-item">
      <RouterLink to="login" class="nav-link">Login</RouterLink>
    </li>
  </ul>
</template>
