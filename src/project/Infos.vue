<script setup>
import { useFetch } from '@/composables/useFetch'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let route = useRoute()
let router = useRouter()
let { data, error } = useFetch(`http://localhost:3000/candidats/${route.params.id}`)

watch(
  () => route.params.id,
  (newId) => {
    let res = useFetch(`http://localhost:3000/candidats/${newId}`)
    data = res.data
    error = res.error
  },
)

function deleteHandler() {
  if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
    const { data, error } = useFetch(`http://localhost:3000/candidats/${route.params.id}`, 'DELETE')
    if (!error.value) {
      console.log(error)

      alert('Candidat supprimé avec succès')
      router.replace('/cv')
    } else {
      console.log(error)

      alert('Problème de suppression...')
    }
  }
}
</script>
<template>
  <div class="d-flex justify-content-center">
    <div class="col-lg-8 push-lg-4">
      <div class="tab-content p-b-3">
        <div class="tab-pane active" id="profile">
          <div class="d-flex justify-content-center">
            <img
              width="150px"
              height="150px"
              class="rounded-circle align-content-center"
              :src="`/${data?.avatar}`"
              alt=""
            />
          </div>
          <div class="row">
            <div class="col-md-12">
              <h4 class="m-t-2">
                <span class="fa fa-clock-o ion-clock pull-xs-right"></span> Informations
              </h4>
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td><strong>Prénom</strong> {{ data?.prenom }}</td>
                  </tr>
                  <tr>
                    <td><strong>Nom</strong> {{ data?.nom }}</td>
                  </tr>
                  <tr>
                    <td><strong>Age</strong> {{ data?.age }}</td>
                  </tr>
                  <tr>
                    <td><strong>Profession</strong> {{ data?.profession }}</td>
                  </tr>
                  <tr>
                    <td><strong>Image</strong> {{ data?.avatar }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-center">
                <button @click="deleteHandler" class="btn btn-danger">Delete</button>
                <button class="btn btn-primary">Update</button>
                <RouterLink :to="`/cv/${data?.id + 1}`"
                  ><button class="btn btn-warning">Next</button></RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
