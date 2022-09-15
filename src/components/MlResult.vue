<script lang="ts" setup>
defineProps<{
  title: string;
  message: string;
  status: "success" | "error";
  img: string;
}>();
</script>

<template>
  <div class="ml-result">
    <div class="ml-result__icon">
      <img v-if="img" :src="img" />
      <MlIcon v-else-if="status === 'success'" icon="checkmark" />
      <span v-else-if="status === 'error'"> :( </span>
    </div>
    <h1 class="ml-result__title">
      {{ title }}
    </h1>
    <p class="ml-result__message" v-if="message">
      {{ message }}
    </p>
  </div>
</template>

<style lang="scss">
.ml-result {
  text-align: center;

  &__icon {
    span {
      font-weight: 300;
      font-size: 91px;
      line-height: 128px;
    }

    img {
      margin: 0 auto;
      display: block;
      width: 100%;
      max-width: 360px;
    }
  }

  &__title,
  &__message {
    line-height: 28px;
    font-weight: 500;
    letter-spacing: -0.02em;
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
    font-weight: 500;
  }
}
</style>
