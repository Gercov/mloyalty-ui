<script lang="ts" setup>
defineProps<{
  title: string;
  message: string;
  status: "success" | "error";
}>();
</script>

<template>
  <div class="ml-result">
    <div class="ml-result__icon">
      <span v-if="status === 'error'"> :( </span>
      <MlIcon v-else-if="status === 'success'" icon="checkmark" />
    </div>
    <h1 class="ml-result__title">
      {{ title || "Что-то пошло не так" }}
    </h1>
    <p class="ml-result__message" v-if="message">
      {{ message }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.ml-result {
  text-align: center;

  &__icon {
    span {
      font-weight: 300;
      font-size: 91px;
      line-height: 128px;
    }
  }

  &__title,
  &__message {
    line-height: 28px;
    font-weight: 500;
  }

  &__title {
    margin: 24px 0 4px 0;
    font-size: 20px;
  }

  &__message {
    margin: 0 auto;
    font-size: 14px;
    max-width: 278px;
    color: $dark-variant;
  }
}
</style>
