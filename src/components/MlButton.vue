<script lang="ts" setup>
defineProps<{ to?: string }>();
</script>

<template>
  <a v-if="to" :href="to" class="ml-button no-select"><slot /></a>
  <button v-else class="ml-button"><slot /></button>
</template>

<style lang="scss" scoped>
.ml-button {
  background-color: $primary;
  outline: none;
  border: none;
  color: $white;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 14px 24px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration-line: none;
}
</style>
