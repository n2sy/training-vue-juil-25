<script setup>
import ItemServer from './ItemServer.vue'

let tabServers = [
  {
    id: 's1',
    title: 'Test Server',
    type: 'small',
    status: 'critical',
    date_d: new Date(2020, 5, 4),
  },
  {
    id: 's2',
    title: 'Development Server',
    type: 'large',
    status: 'stable',
    date_d: new Date(2022, 1, 1),
  },
  {
    id: 's3',
    title: 'Production Server',
    type: 'medium',
    status: 'offline',
    date_d: new Date(2023, 6, 4),
  },
  {
    id: 's4',
    title: 'Nidhal Server',
    type: 'large',
    status: 'stable',
    date_d: new Date(),
  },
]
</script>

<template>
  <div class="col-10">
    <ol class="list-group">
      <ItemServer v-for="serv in tabServers" :key="serv.id">
        <template #infos> {{ serv.title }} | {{ serv.type }} | {{ serv.date_d }} </template>
        <template #badge> {{ serv.status }} </template>
      </ItemServer>
    </ol>
  </div>
</template>
