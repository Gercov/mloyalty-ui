<script lang="ts" setup name="MlButton"></script>

<template>
  <button ref="color" class="ml-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
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
