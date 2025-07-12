<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue'
import Cv from '../src/project/Cv.vue'
import HomeAccounts from './accounts/HomeAccounts.vue'
import { useFetch } from './composables/useFetch'
import Navbar from './layout/Navbar.vue'
import ManageServers from './manage-servers/ManageServers.vue'
</script>

<template>
  <div class="container">
    <Navbar></Navbar>
    <!--  <Cv></Cv>
    <HomeAccounts></HomeAccounts>
    <ManageServers></ManageServers>  -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
