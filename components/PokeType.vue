<script setup lang="ts">
interface Props {
  backgroundColor: string;
  types: { type: { name: string } }[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <p
      v-for="(type, index) in types"
      :key="index"
      data-testid="poke-type"
      class="my-3 rounded-lg px-2 py-1 text-xs font-bold capitalize text-white"
    >
      {{ type.type.name }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
#poke-type {
  background-color: v-bind(backgroundColor);
}
</style>
