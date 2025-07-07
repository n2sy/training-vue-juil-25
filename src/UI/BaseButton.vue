<script setup>
defineProps(['classe'])
</script>

<template>
  <button :class="`btn ${classe}`">
    <slot></slot>
  </button>
</template>
