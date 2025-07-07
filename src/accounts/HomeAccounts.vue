<script setup>
import { computed, ref } from 'vue'
import AddAccount from './AddAccount.vue'
import ItemAccount from './ItemAccount.vue'

let tabAccounts = ref([
  {
    id: 'a1',
    nom: 'Yannick Account',
    statut: 'active',
    solde: 342,
  },
  {
    id: 'a2',

    nom: 'Claire Account',
    statut: 'inactive',
    solde: 200,
  },
  {
    id: 'a3',

    nom: 'Kevin Account',
    statut: 'ferme',
    solde: 140,
  },
])

let total = computed(() => {
  //   let t = 0
  //   for (const element of tabAccounts.value) {
  //     if (element.statut != 'ferme') t += element.solde
  //   }
  //   return t
  let t = 0
  for (const element of tabAccounts.value.filter((element) => element.statut != 'ferme')) {
    t += element.solde
  }
  return t
})

function updateSt(newSt, id) {
  tabAccounts.value[id].statut = newSt
}

function deleteHandler(i) {
  tabAccounts.value.splice(i, 1)
}
</script>
<template>
  <div class="col-10">
    <AddAccount @on-add="tabAccounts.unshift($event)"></AddAccount>
    <hr />
    <h4>Total des soldes : {{ total }} €</h4>
    <hr />
    <ItemAccount
      v-for="(acc, index) of tabAccounts"
      :oneAccount="acc"
      :i="index"
      :key="acc.id"
      @updateStatut="updateSt"
      @on-delete="tabAccounts.splice(index, 1)"
    ></ItemAccount>
  </div>
</template>
