<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

interface IProps {
  error: NuxtError;
}

withDefaults(defineProps<IProps>(), {
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
