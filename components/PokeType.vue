<script setup lang="ts">
interface Props {
  backgroundColor: string;
  types: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <p
      v-for="(type, index) in types"
      id="poke-type"
      :key="index"
      class="my-3 rounded-lg px-2 py-1 text-xs font-bold capitalize text-white"
    >
      {{ type }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
#poke-type {
  background-color: v-bind(backgroundColor);
}
</style>
