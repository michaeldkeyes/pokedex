<script setup lang="ts">
// const store = usePokemonStore();

// await callOnce(store.fetchPokemon);

// store.resetPokemon();
const { data: pokeymans } = useFetch("/api/pokemon");

console.log(pokeymans.value?.pokemon[0].pokemonToTypes[0].type.name);
</script>

<template>
  <main class="flex h-screen w-screen flex-col items-center gap-4 bg-red">
    {{ pokeymans }}
    <!-- <PokeHeader />
    <PokemonList /> -->
  </main>
</template>
