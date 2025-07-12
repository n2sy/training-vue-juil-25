<script setup>
import { inject } from 'vue';

defineProps(['oneCandidate','updateCand'])
//let emit = defineEmits(['onSelectedCand'])

const selCand = inject("refSelectedCand");

</script>
<template>
  <li @click="selCand(oneCandidate)" class="list-group-item">
  <!-- <li @click="emit('onSelectedCand', oneCandidate)" class="list-group-item"> -->
  <img :src="oneCandidate.avatar"></img>
  {{ oneCandidate.prenom }} {{  oneCandidate.nom }}
  </li>
</template>
<style scoped>
img {
    width: 50px;
    height: 50px;
}</style>
