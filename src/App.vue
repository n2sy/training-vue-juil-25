<script setup>
import Cv from '../src/project/Cv.vue'
import HomeAccounts from './accounts/HomeAccounts.vue'
import ManageServers from './manage-servers/ManageServers.vue'
</script>

<template>
  <div class="container">
    <!-- <Cv></Cv> -->
    <!-- <HomeAccounts></HomeAccounts>
    <ManageServers></ManageServers> -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
