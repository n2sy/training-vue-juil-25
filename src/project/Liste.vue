<script setup>
import { inject } from 'vue'
import Item from './Item.vue'
defineProps(['tab', 'changeCand'])
// defineEmits(['onUpdatedCand'])

// function sendCandToCv(cand) {
//   emit('onUpdatedCand', cand)
// }
</script>
<template>
  <ol class="list-group">
    <Item v-for="cand of tab" :oneCandidate="cand"></Item>
    <!-- <Item
      v-for="cand of tab"
      :oneCandidate="cand"
      @onSelectedCand="$emit('onUpdatedCand', cand)"
    ></Item> -->
  </ol>
</template>
