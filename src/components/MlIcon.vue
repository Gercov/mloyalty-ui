<script lang="ts" setup>
import iconList from "@/assets/icons";

const props = defineProps<{ icon: string }>();
const icon = iconList[props.icon];
</script>

<template>
  <div class="ml-icon">
    <component :is="icon" v-if="icon" />
  </div>
</template>
