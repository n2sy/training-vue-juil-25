<script setup>
import BaseButton from '@/UI/BaseButton.vue'
import { ref } from 'vue'

let props = defineProps(['oneAccount', 'i'])
let emit = defineEmits(['updateStatut', 'onDelete'])
let myColor = ref('aqua')

let notePerso = ref('')

function changeStatut(newStatut) {
  emit('updateStatut', newStatut, props.i)
}

function switchColor() {
  if (myColor.value == 'aqua') myColor.value = 'yellowgreen'
  else if (myColor.value == 'yellowgreen') myColor.value = 'pink'
  else myColor.value = 'aqua'
}
</script>
<template>
  <div class="contour" :style="{ backgroundColor: myColor }">
    <strong> {{ props.oneAccount.nom }}</strong>
    <hr />
    <p>
      Ce compte est {{ props.oneAccount.statut }}. Le solde est à {{ props.oneAccount.solde }} €.
    </p>
    <p><input type="text" class="form-control" placeholder="Note..." v-model="notePerso" /></p>
    <!-- <BaseButton classe="btn-info">Cliquez-moi</BaseButton> -->
    <button
      :disabled="oneAccount.statut == 'active'"
      @click="changeStatut('active')"
      class="btn btn-success"
    >
      Changer à 'active'
    </button>
    <button
      :disabled="oneAccount.statut == 'inactive'"
      @click="changeStatut('inactive')"
      class="btn btn-danger"
    >
      Changer à 'inactive'
    </button>
    <button
      :disabled="oneAccount.statut == 'ferme'"
      @click="changeStatut('ferme')"
      class="btn btn-info"
    >
      Changer à 'fermé'
    </button>
    <button @click="$emit('onDelete', props.i)" class="btn btn-dark">Supprimer</button>

    <button @click="switchColor" class="btn btn-primary">Modifier couleur</button>
  </div>
</template>
<style scoped>
.contour {
  border: 1px solid rgb(32, 58, 49);
  padding: 10px;
  margin: 10px;
}
</style>
