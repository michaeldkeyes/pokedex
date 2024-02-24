<script setup lang="ts">
const store = usePokemonStore();

await callOnce(store.fetchPokemon);

store.resetPokemon();
</script>

<template>
  <main class="flex h-screen w-screen flex-col items-center gap-4 bg-red">
    <PokeHeader />
    <PokemonList />
  </main>
</template>
