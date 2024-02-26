<script setup lang="ts">
interface Props {
  id: number;
  pokemonName: string;
}

defineProps<Props>();
</script>

<template>
  <div class="relative">
    <NuxtLink
      v-if="id > 1"
      data-testid="back-link"
      :to="`/details/${id - 1}`"
      class="absolute -left-8 top-1/2 z-50 inline-block translate-y-1/2"
    >
      <img
        class="w-7 brightness-0 grayscale invert"
        src="~/assets/chevron_left.svg"
        alt="back"
      />
    </NuxtLink>
    <div class="relative z-10 m-auto size-48">
      <img
        class="size-full"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
        :alt="pokemonName"
      />
    </div>
    <NuxtLink
      v-if="id < 151"
      data-testid="forward-link"
      :to="`/details/${id + 1}`"
      class="absolute -right-8 top-1/2 z-50 inline-block translate-y-1/2"
    >
      <img
        class="w-7 brightness-0 grayscale invert"
        src="~/assets/chevron_right.svg"
        alt="forward"
      />
    </NuxtLink>
  </div>
</template>
