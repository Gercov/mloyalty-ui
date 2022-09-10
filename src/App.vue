<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<script lang="ts" setup>
import MlButton from './components/MlButton/index.vue';
import MlIcon from './components/MlIcon/index.vue';
</script>

<template>
  <div>
    <MlButton> fsdjkfdsjfklsdjflkjsdlkfjdskl </MlButton>
    <MlIcon icon="checkmark" />
  </div>
</template>
