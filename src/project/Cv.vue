<script setup>
import Liste from './Liste.vue'
import Details from './Details.vue'
import { Candidat } from '@/models/candidat'
import { provide, ref } from 'vue'
import { useFetch } from '@/composables/useFetch'

// let tabCands = [
//   new Candidat(1, 'bart', 'simpson', 42, 'trainer', 'bart.jpeg'),
//   new Candidat(2, 'homer', 'simpson', 23, 'chef de projet', 'homer.png'),
//   new Candidat(3, 'lisa', 'simpson', 27, 'designer', 'lisa.png'),
// ]

const { data, error } = useFetch(`http://localhost:3000/candidats`)

let selectedCand = ref(undefined)
provide('refSelectedCand', setSelectedCand)

function setSelectedCand(cand) {
  selectedCand.value = cand
  // console.log(selectedCand.value)
}
</script>
<template>
  <div class="row">
    <div class="col-5">
      <Liste :tab="data" :changeCand="selectedCand"></Liste>
    </div>
    <div class="col-7">
      <Details v-if="selectedCand" :selCand="selectedCand"></Details>
      <h3 v-else>Veuillez sélectionner un candidat</h3>
    </div>
  </div>
</template>
