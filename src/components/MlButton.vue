<script lang="ts" setup></script>

<template>
  <button class="ml-button"><slot /></button>
</template>

<style scoped>
.ml-button {
  background-color: var(--ml-primary);
  outline: none;
  border: none;
  color: var(--ml-white);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 15px 24px;
  border-radius: 5px;
}
</style>
