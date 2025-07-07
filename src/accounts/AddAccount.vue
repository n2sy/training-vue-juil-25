<script setup>
import { ref } from 'vue'

const allStatut = ['', 'active', 'inactive', 'ferme']
let nom = ref('')
let st = ref('')
let s = ref('')
let emit = defineEmits(['onAdd'])

function ajouterCompte() {
  emit('onAdd', { nom: nom.value, statut: st.value, solde: s.value })
}
</script>
<template>
  <label for="">Nom du compte</label>
  <input type="text" class="form-control" v-model="nom" />
  <label for="">Statut du compte</label>
  <select class="form-control" v-model="st">
    <option v-for="st in allStatut" :value="st">{{ st }}</option>
  </select>

  <label for="">Solde du compte</label>
  <input type="number" class="form-control" v-model="s" />

  <button class="btn btn-primary" @click="ajouterCompte">Ajouter Compte</button>
  <!-- {{ nom }} {{ st }} {{ s }} -->
</template>
<!-- <script setup>
import { ref } from 'vue'

const allStatut = ['', 'active', 'inactive', 'ferme']
let nom = ref()
let st = ref()
let s = ref()

function ajouterCompte() {
  console.log(nom.value.value)
  console.log(st.value.value)
  console.log(s.value.value)
}
</script>
<template>
  <label for="">Nom du compte</label>
  <input type="text" class="form-control" ref="nom" />
  <label for="">Statut du compte</label>
  <select class="form-control" ref="st">
    <option v-for="st in allStatut" :value="st">{{ st }}</option>
  </select>

  <label for="">Solde du compte</label>
  <input type="number" class="form-control" ref="s" />

  <button class="btn btn-primary" @click="ajouterCompte">Ajouter Compte</button>
</template> -->
