<script setup></script>

<template>
  <li class="list-group-item list-group-item-success">
    <span>
      <slot name="infos"></slot>
    </span>
    <span class="badge text-bg-secondary">
      <slot name="badge"></slot>
    </span>
  </li>
</template>
