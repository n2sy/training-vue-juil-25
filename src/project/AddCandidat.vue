<script setup>
import { useFetch } from '@/composables/useFetch'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

let cand = reactive({
  prenom: '',
  nom: '',
  age: 0,
  profession: '',
  avatar: '',
})
let router = useRouter()
function addHandler() {
  const { data, error } = useFetch(`http://localhost:3000/candidats`, 'POST', cand)
  if (!error.value) {
    alert('Candidat ajouté avec succès')
    router.replace('/cv')
  } else {
    alert("Probléme d'ajout d'un candidat")
  }
}
</script>
<template>
  <form @submit.prevent="addHandler">
    <label for="">Prénom</label>
    <input type="text" class="form-control" v-model="cand.prenom" />
    <label for="">Nom</label>
    <input type="text" class="form-control" v-model="cand.nom" />
    <label for="">Age</label>
    <input type="number" class="form-control" v-model="cand.age" />
    <label for="">Profession</label>
    <input type="text" class="form-control" v-model="cand.profession" />
    <label for="">Avatar</label>
    <input type="text" class="form-control" v-model="cand.avatar" />
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>
</template>
